import React, { Component } from "react";
import { loginService } from "../../_services/login_service";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import $ from "jquery";
import { async } from "q";
import { Redirect } from "react-router";

export default class PacksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packList: [],
      inputPack: ""
    };
    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.getPackList();
  }

  getPackList = async () => {
    let resp = await loginService.getPackList();
    if (resp.result) {
      this.setState({
        packList: resp.result
      });
    }
  };
  addPack = async () => {
    if (this.validator.allValid()) {
      let payload = {
        packName: this.state.inputPack
      };
      let resp = await loginService.addPack(payload);
      if (resp) {
        $(".close").click();
        toast.success("Pack added Successfully");
        this.cancelAll();
        this.getPackList();
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  cancelAll = () => {
    this.setState({
      inputPack: ""
    });
  };
  inputHandler = e => {
    this.setState({
      inputPack: e.target.value
    });
  };

  render() {
    if (localStorage.getItem("tokens") === null) {
      return <Redirect to="/" />;
    }
    return localStorage.getItem("tokens") === null ? (
      " "
    ) : (
      <div>
          
        <div className="channelsinfo">
          <h5 className="main__head">
            <b>PACKS</b>
            <button
              className="btn blueborder-btn"
              data-toggle="modal"
              data-target="#addPackModal"
            >
              Add Pack
            </button>
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Pack Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.packList.length > 0
                ? this.state.packList.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{item.packName}</td>
                      </tr>
                    );
                  })
                : "No data Found"}
            </tbody>
          </table>
        </div>
        <div
          className="modal fade"
          id="addPackModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addPackLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 custom__modal">
              <div className="modal-header">
                <h5 className="modal-title" id="addPackLabel">
                  Add Pack
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
                <div className="form-group mb-0">
                  <input
                    type="text"
                    className="form-control blue-from"
                    placeholder="Pack Name"
                    onChange={this.inputHandler}
                    value={this.state.inputPack}
                  />
                  <div className="help-block">
                    {this.validator.message(
                      "Pack",
                      this.state.inputPack,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn blue__btn"
                  onClick={this.addPack}
                >
                  Add Package
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
    );
  }
}
