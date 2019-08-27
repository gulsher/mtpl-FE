import React, { Component } from "react";
import LeftMenuPage from "../common/left-menu";
import { NavLink, Redirect } from "react-router-dom";
import { loginService } from "../../_services/login_service";
import Select from "react-select";
import { async } from "q";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import $ from "jquery";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelList: [],
      broadcastOptions: [],
      regionOptions: [],
      languageOptions: [],
      genreOptions: [],
      //add channel
      selectedBroadcast: "",
      channelNameInput: "",
      selectedRegion: "",
      selectedLanguage: "",
      selectedGenre: "",
      priceInput: "",
      imageText: "",
      imageData: {},
      //Patch
      modifyId: ""
    };
    this.validator = new SimpleReactValidator();
    this.validator2 = new SimpleReactValidator();
  }

  componentDidMount() {
    this.getChannelList();
    this.getBroadcastList();
    this.getRegionList();
    this.getLanguageList();
    this.getGenreList();
  }
  getChannelList = async () => {
    let resp = await loginService.getChannelList();
    if (resp.result) {
      this.setState({
        channelList: resp.result
      });
    }
  };
  getBroadcastList = async () => {
    let resp = await loginService.getBroadcastList();
    if (resp.result) {
      let broadcastOptions = resp.result.map(item => {
        return {
          value: item.broadCasterName,
          label: item.broadCasterName,
          id: item.id,
          activeStatus: item.activeStatus
        };
      });
      this.setState({
        broadcastOptions: broadcastOptions
      });
    }
  };
  getRegionList = async () => {
    let resp = await loginService.getRegionList();
    if (resp.Region) {
      let regionOptions = resp.Region.map(item => {
        return {
          value: item.regionName,
          label: item.regionName,
          id: item.id,
          activeStatus: item.activeStatus
        };
      });
      this.setState({ regionOptions });
    }
  };

  getLanguageList = async () => {
    let resp = await loginService.getLanguageList();
    if (resp.result) {
      let languageOptions = resp.result.map(item => {
        return {
          value: item.languageName,
          label: item.languageName,
          id: item.id,
          activeStatus: item.activeStatus
        };
      });
      this.setState({ languageOptions });
    }
  };

  getGenreList = async () => {
    let resp = await loginService.getGenreList();
    if (resp.result) {
      let genreOptions = resp.result.map(item => {
        return {
          value: item.genreName,
          label: item.genreName,
          id: item.id,
          activeStatus: item.activeStatus
        };
      });
      this.setState({ genreOptions });
    }
  };

  handleBroadcastSelect = e => {
    this.setState({
      selectedBroadcast: e
    });
  };

  channelNameHandler = e => {
    this.setState({
      channelNameInput: e.target.value
    });
  };

  handleRegion = e => {
    this.setState({
      selectedRegion: e
    });
  };
  handleLanguage = e => {
    this.setState({
      selectedLanguage: e
    });
  };

  handleGenre = e => {
    this.setState({
      selectedGenre: e
    });
  };
  pricehandler = e => {
    this.setState({
      priceInput: e.target.value
    });
  };
  imageUploadHandler = async e => {
    if (e.target.files.length > 0) {
      let browseImage = URL.createObjectURL(e.target.files[0]);
      let formData = new FormData();
      let file = e.target.files[0];
      formData.append("productImage", file);
      this.setState({
        imageText: file.name
      });

      let imageResp = await loginService.uploadImage(formData);
      if (imageResp.result) {
        toast.success("Image uploaded successfully");
        this.setState({
          imageData: imageResp.result
        });
      }
    }
  };

  addChannel = async () => {
    if (this.validator.allValid()) {
      let payload = {
        languageId: this.state.selectedLanguage.id,
        genreId: this.state.selectedGenre.id,
        regionId: this.state.selectedRegion.id,
        broadCasterId: this.state.selectedBroadcast.id,
        channelName: this.state.channelNameInput,
        price: this.state.priceInput,
        channelImage: this.state.imageData.id
      };
      let resp = await loginService.addChannel(payload);
      if (resp) {
        $(".close").click();
        toast.success("Channel added Successfully");
        this.cancelAll();
        this.getChannelList();
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  cancelAll = () => {
    this.setState({
      selectedBroadcast: "",
      channelNameInput: "",
      selectedRegion: "",
      selectedLanguage: "",
      selectedGenre: "",
      priceInput: "",
      imageText: "",
      imageData: {},
      modifyId: ""
    });
  };

  modifyChannel = async () => {
    if (this.validator2.allValid()) {
      let payload = {
        languageId: this.state.selectedLanguage.id,
        genreId: this.state.selectedGenre.id,
        regionId: this.state.selectedRegion.id,
        broadCasterId: this.state.selectedBroadcast.id,
        channelName: this.state.channelNameInput,
        price: this.state.priceInput,
        channelImage: this.state.imageData.id
      };
      let resp = await loginService.modifyChannel(this.state.modifyId, payload);
      if (resp) {
        $(".close").click();
        toast.success("Channel updated Successfully");
        this.cancelAll();
        this.getChannelList();
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  editLoader = item => {
    console.log(item);
    this.setState({
      modifyId: item.id,
      selectedBroadcast: {
        activeStatus: item.activeStatus,
        id: item.broadCasterId.id,
        label: item.broadCasterId.broadCasterName,
        value: item.broadCasterId.broadCasterName
      },
      channelNameInput: item.channelName,
      selectedRegion: {
        activeStatus: item.activeStatus,
        id: item.regionId.id,
        label: item.regionId.regionName,
        value: item.regionId.regionName
      },

      selectedLanguage: {
        activeStatus: item.activeStatus,
        id: item.languageId.id,
        label: item.languageId.languageName,
        value: item.languageId.languageName
      },

      selectedGenre: {
        activeStatus: item.activeStatus,
        id: item.genreId.id,
        label: item.genreId.genreName,
        value: item.genreId.genreName
      },
      priceInput: item.price,
      imageData: {
        id: item.channelImage.id
      }
    });
  };

  render() {
    if (localStorage.getItem("tokens") === null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="mian-container">
          <div className="left-menu">
            <LeftMenuPage />
          </div>
          <div className="right-menu">
            <div className="channelsinfo">
              <h5 className="main__head">
                <b>CHANNELS</b>
                <button
                  className="btn blueborder-btn"
                  data-toggle="modal"
                  data-target="#addChannelModal"
                >
                  Add Channel
                </button>
              </h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>CHANNEL NAME</th>
                    <th>BROADCASTER</th>
                    <th>REGION/CATEGORY</th>
                    <th>LANGUAGE</th>
                    <th>GENRE</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.channelList.length > 0
                    ? this.state.channelList.map((item, key) => {
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
                            <td>{item.broadCasterId.broadCasterName}</td>
                            <td>{item.regionId.regionName}</td>
                            <td>{item.languageId.languageName}</td>
                            <td>{item.genreId.genreName}</td>
                            <td>{item.price}</td>
                            <td>
                              <button
                                className="btn blueborder-btn text-red"
                                onClick={e => this.editLoader(item)}
                                data-target="#modifyChannelModal"
                                data-toggle="modal"
                              >
                                Edit
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
              className="modal fade"
              id="addChannelModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="addChannelLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content border-0 custom__modal">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addChannelLabel">
                      Add Channel
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
                  <div className="modal-body pm-30">
                    <div className="form-group">
                      <Select
                        onChange={this.handleBroadcastSelect}
                        options={this.state.broadcastOptions}
                        placeholder="Broadcaster"
                        value={this.state.selectedBroadcast}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Broadcaster",
                          this.state.selectedBroadcast.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control blue-from"
                        placeholder="Channel Name"
                        onChange={this.channelNameHandler}
                        value={this.state.channelNameInput}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Channel",
                          this.state.channelNameInput,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Select
                        onChange={this.handleRegion}
                        options={this.state.regionOptions}
                        placeholder="Select Region"
                        value={this.state.selectedRegion}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Region",
                          this.state.selectedRegion.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Select
                        onChange={this.handleLanguage}
                        options={this.state.languageOptions}
                        placeholder="Select Language"
                        value={this.state.selectedLanguage}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Language",
                          this.state.selectedLanguage.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Select
                        onChange={this.handleGenre}
                        options={this.state.genreOptions}
                        placeholder="select Genre"
                        value={this.state.selectedGenre}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Genre",
                          this.state.selectedGenre.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control blue-from"
                        onChange={this.pricehandler}
                        placeholder="Price"
                        value={this.state.priceInput}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Price",
                          this.state.priceInput,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="upload-input">
                      <input type="file" onChange={this.imageUploadHandler} />
                      <div className="help-block">
                        {this.validator.message(
                          "Channel Image ",
                          this.state.imageText,
                          "required"
                        )}
                      </div>
                      <div className="check-box">
                        <div>
                          <b>
                            {this.state.imageText !== ""
                              ? this.state.imageText
                              : "Upload Channel Photo"}
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn blue__btn"
                      onClick={this.addChannel}
                    >
                      Add Channel
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

            <div
              className="modal fade"
              id="modifyChannelModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modifyChannelLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content border-0 custom__modal">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modifyChannelLabel">
                      Modify Channel
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
                  <div className="modal-body pm-30">
                    <div className="form-group">
                      <Select
                        onChange={this.handleBroadcastSelect}
                        options={this.state.broadcastOptions}
                        placeholder="Broadcaster"
                        value={this.state.selectedBroadcast}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Broadcaster",
                          this.state.selectedBroadcast.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control blue-from"
                        placeholder="Channel Name"
                        onChange={this.channelNameHandler}
                        value={this.state.channelNameInput}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Channel",
                          this.state.channelNameInput,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Select
                        onChange={this.handleRegion}
                        options={this.state.regionOptions}
                        placeholder="Select Region"
                        value={this.state.selectedRegion}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Region",
                          this.state.selectedRegion.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Select
                        onChange={this.handleLanguage}
                        options={this.state.languageOptions}
                        placeholder="Select Language"
                        value={this.state.selectedLanguage}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Language",
                          this.state.selectedLanguage.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Select
                        onChange={this.handleGenre}
                        options={this.state.genreOptions}
                        placeholder="select Genre"
                        value={this.state.selectedGenre}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Genre",
                          this.state.selectedGenre.value,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control blue-from"
                        onChange={this.pricehandler}
                        placeholder="Price"
                        value={this.state.priceInput}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Price",
                          this.state.priceInput,
                          "required"
                        )}
                      </div>
                    </div>
                    {/* <div className="upload-input">
                  <input type="file" onChange={this.imageUploadHandler} />
                  <div className="help-block">
                    {this.validator.message(
                      "Channel Image ",
                      this.state.imageText,
                      "required"
                    )}
                  </div>
                  <div className="check-box">
                    <div>
                      <b>
                        {this.state.imageText !== ""
                          ? this.state.imageText
                          : "Upload Channel Photo"}
                      </b>
                    </div>
                  </div>
                </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn blue__btn"
                      onClick={this.modifyChannel}
                    >
                      Modify
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
      </div>
    );
  }
}
export default MainPage;
