import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { loginService } from "../../_services/login_service";
import Select from "react-select";
import { async } from "q";
import { toast } from "react-toastify";
import uuid from "uuid";
import SimpleReactValidator from "simple-react-validator";
import $ from "jquery";
export default class AssignedChannelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PackageId: this.props.match.params.id,
      assignedChannelList: [],
      displaySubPackage: {},
      subpackList: [],
      notAssignedChannelList: [],
      isChecked :false,
      //post data
      selectedsubPack: "",
      channelIDs:[],

    };
  }
  componentDidMount() {
    this.getAssignedChannels();
    this.getPackList();
  }

  cancelAll = () =>{
    this.setState({
      selectedsubPack: "",
      channelIDs:[],
      isChecked :false,
    })
  }

  getAssignedChannels = async () => {
    let resp = await loginService.getAssignedChannelList(this.state.PackageId);
    if (resp.result) {
      this.setState({
        assignedChannelList: resp.result,
        displaySubPackage: resp.subPackage
      });
    }
  };
  getPackList = async () => {
    let resp = await loginService.getPackList();
    if (resp.result) {
      this.setState({
        subpackList: resp.result.map(item => {
          return {
            value: item.packName,
            label: item.packName,
            id: item.id,
            activeStatus: item.activeStatus
          };
        })
      });
    }
  };

  handleSubpack = e => {
    console.log(e);
    this.setState({
      selectedsubPack: e
    });
  };

  getNotAssignedChannelList = async () => {
    let resp = await loginService.getNotAssignedChannelList(
      this.state.PackageId
    );
    if (resp.result) {
      this.setState({
        notAssignedChannelList: resp.result
      });
    }
  };

  assignHandler = (e,data) =>{
    let prevChannel = [...this.state.channelIDs];
    if(e.target.checked){
      let foundIndex = prevChannel.indexOf(data.id);
      if(foundIndex == -1 ){
        prevChannel.push(data.id);
      }

    }
    else{
      if(!e.target.checked){
       let foundIndex = prevChannel.indexOf(data.id);
       if(foundIndex !== -1){
         prevChannel.splice(foundIndex,1);
       }
      }
    }
    this.setState({
      channelIDs:prevChannel
    })
  }

  addChannelToPkg = async() =>{
    let payload ={
      channelIds:[...this.state.channelIDs],
      subPackId: this.state.selectedsubPack.id
    }
    let resp = await loginService.addChannelToPkg(this.state.PackageId,payload);
      if(resp){
        $(".close").click();
        toast.success("Channel added to package Successfully");
        this.cancelAll();
        this.getAssignedChannels();
      }
  }
  removeChannelfromPkg = async(id) =>{
    let payload = {
      channelId:id
    }
    let resp = await loginService.removeChannelfromPkg(this.state.PackageId,payload);
    if(resp){
      toast.success("Channel removed from package Successfully");
        this.getAssignedChannels();
    }
  }

  render() {
    if(localStorage.getItem("tokens") === null){
      return <Redirect to="/" />
  }
    return (
      <div>
        <div className="channelsinfo">
          <h5 className="main__head">
            <b>ASSIGNED CHANNELS</b>
            <button
              className="btn blueborder-btn"
              data-toggle="modal"
              data-target="#assignChannelModal"
              onClick={this.getNotAssignedChannelList}
            >
              Assign Channel
            </button>
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>CHANNEL NAME</th>
                <th>SUBPACK</th>
                <th>REGION/CATEGORY</th>
                <th>LANGUAGE</th>
                <th>GENRE</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {(this.state.assignedChannelList.length > 0)
                ? this.state.assignedChannelList.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>
                          <div className="float-left small__img">
                            <img
                              src={`data:image/jpeg;base64, ${
                                item.channelImage.image
                              }`}
                              alt=""
                            />
                          </div>
                          <div className="right">{item.channelName}</div>
                          <div className="clearfix" />
                        </td>
                        <td>{(this.state.displaySubPackage)?this.state.displaySubPackage.packName:"select Subpackage"}</td>
                        <td>{item.regionId.regionName}</td>
                        <td>{item.languageId.languageName}</td>
                        <td>{item.genreId.genreName}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            
                            className="text-red text-uppercase btn blueborder-btn"
                            onClick={e=>this.removeChannelfromPkg(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "No data found"}
            </tbody>
          </table>
        </div>

        <div
          className="modal fade assign__channel"
          id="assignChannelModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="assignChannelLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content border-0 custom__modal">
              <div className="modal-header">
                <h5 className="modal-title" id="assignChannelLabel">
                  Select Package
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="border-bottom pm-30 py-3">
                  <div className="form-group mb-0">
                    <Select
                      onChange={this.handleSubpack}
                      options={this.state.subpackList}
                      placeholder="Select subpack"
                      value={this.state.selectedsubPack}
                    />
                  </div>
                </div>
                <div className="channel__list py-3">
                  {/* <input
                    type="text"
                    id="channelSearch"
                    className="round__search form-control mb-4"
                    placeholder="Search Channel"
                  /> */}
                  <ul id="channelFilter">
                    {this.state.notAssignedChannelList.length > 0
                      ? this.state.notAssignedChannelList.map((item,key) => {
                          return (
                            <li key={key}>
                              <div className="custom-control custom-checkbox mb-3 mx-1">
                                <input
                                  type="checkbox"
                                  // className="custom-control-input"
                                  onChange={e=>this.assignHandler(e,item)}
                                checked={this.state.channelIDs.includes(item.id)}
                                />
                                <img
                                  width="30"
                                  height="30"
                                  className="mx-3"
                                  src={`data:image/jpeg;base64, ${
                                    item.channelImage.image
                                  }`}
                                />
                                <label
                                  class="custom-control-label"
                                  htmlFor="customCheck"
                                >
                                  {item.channelName}
                                </label>
                              </div>
                            </li>
                          );
                        })
                      : "No list found or list is full"}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" class="btn blue__btn" onClick={this.addChannelToPkg}>
                    Assign
                  </button>
                  <button
                    type="button"
                    className="btn cancel__btn"
                    data-dismiss="modal"
                    onClick={this.cancelAll}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
