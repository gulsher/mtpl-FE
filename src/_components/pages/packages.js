import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { loginService } from "../../_services/login_service";
import Select from "react-select";
import { async } from "q";
import { toast } from "react-toastify";
import uuid from "uuid";
import SimpleReactValidator from "simple-react-validator";
import $ from "jquery";
import LeftMenuPage from "../common/left-menu";

export default class PackagesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageList: [],
      regionOptions: [],
      languageOptions: [],
      genreOptions: [],
      //add package
      packageName: "",
      selectedRegion: "",
      selectedLanguage: "",
      selectedGenre: "",
      price: "",
      allPoints: [],
      currentPoint: "",
      //modify
      modifyId: ""
    };
    this.validator = new SimpleReactValidator();
    this.validator2 = new SimpleReactValidator();
  }

  componentDidMount() {
    this.getPackageList();
    this.getRegionList();
    this.getLanguageList();
    this.getGenreList();
  }

  cancelAll = () => {
    this.setState({
      packageName: "",
      selectedRegion: "",
      selectedLanguage: "",
      selectedGenre: "",
      price: "",
      allPoints: [],
      currentPoint: "",
      modifyId: ""
    });
  };

  getPackageList = async () => {
    let resp = await loginService.getPackageList();
    if (resp.result) {
      this.setState({
        packageList: resp.result
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

  handlePackageName = e => {
    this.setState({
      packageName: e.target.value
    });
  };
  handlerPrice = e => {
    this.setState({
      price: e.target.value
    });
  };
  addPoint = e => {
    let uiData = {
      id: uuid.v4(),
      point: ""
    };
    let allPoints = [...this.state.allPoints];
    allPoints.push(uiData);
    this.setState({ allPoints });
  };

  pointHandler = (e, data) => {
    let allPoints = [...this.state.allPoints];
    allPoints.find(item => item.id === data.id).point = e.target.value;
    this.setState({
      currentPoint: e.target.value,
      allPoints
    });
  };
  commaIncludingFunction = arr => {
    let commaArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
      commaArray.push(arr[i] + ",");
    }
    commaArray.push(arr[arr.length - 1]);
    return commaArray;
  };

  addPackage = async () => {
    if (this.validator.allValid()) {
      let sendPoints = [...this.state.allPoints];
      let points = [];
      sendPoints.forEach(item => {
        points.push(item.point);
      });

      let payload = {
        packageName: this.state.packageName,
        regionId: this.state.selectedRegion.id,
        languageId: this.state.selectedLanguage.id,
        genreId: this.state.selectedGenre.id,
        price: this.state.price,
        points: points
      };

      let resp = await loginService.addPackage(payload);
      if (resp) {
        $(".close").click();
        toast.success("Package added Successfully");
        this.cancelAll();
        this.getPackageList();
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  modifyPackage = async () => {
    if (this.validator2.allValid()) {
      let payload = {
        packageName: this.state.packageName,
        regionId: this.state.selectedRegion.id,
        languageId: this.state.selectedLanguage.id,
        genreId: this.state.selectedGenre.id,
        price: this.state.price,
        points: [...this.state.allPoints]
      };
      let resp = await loginService.modifyPackage(this.state.modifyId, payload);
      if (resp) {
        $(".close").click();
        toast.success("Package updated Successfully");
        this.cancelAll();
        this.getPackageList();
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  editLoader = item => {
    this.setState({
      packageName: item.packageName,
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
      price: item.price,
      allPoints: item.points,
      modifyId: item.id
    });
  };

  pointEditHandler = (e, data, i) => {
    let curr = e.target.value;
    let allPoints = [...this.state.allPoints];
    allPoints[i] = curr;
    this.setState({ allPoints });
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
                <b>PACKAGES</b>
                <button
                  className="btn blueborder-btn"
                  data-toggle="modal"
                  data-target="#addPackageModal"
                >
                  Add Package
                </button>
              </h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PACKAGE NAME</th>
                    <th>REGION/CATEGORY</th>
                    <th>PRIMARY LANGUAGE</th>
                    <th>PRIMARY GENRE</th>
                    <th>CHANNELS ASSIGNED</th>
                    <th>PACKAGE POINTS</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.packageList.length > 0
                    ? this.state.packageList.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.packageName}</td>
                            <td>{item.regionId.regionName}</td>
                            <td>{item.languageId.languageName}</td>
                            <td>{item.genreId.genreName}</td>
                            <td>
                              <NavLink
                                to={`/channel/${item.id}`}
                                className="text-red"
                              >
                                VIEW
                              </NavLink>
                            </td>
                            <td>{this.commaIncludingFunction(item.points)}</td>
                            <td>{item.price}</td>
                            <td>
                              <button
                                href="#"
                                className="btn blueborder-btn text-red"
                                onClick={e => this.editLoader(item)}
                                data-target="#modifyPackageModal"
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
              id="addPackageModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="addPackageLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content border-0 custom__modal">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addPackageLabel">
                      Add Package
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
                      <input
                        className="form-control blue-from"
                        placeholder="Package Name"
                        value={this.state.packageName}
                        onChange={this.handlePackageName}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Package",
                          this.state.packageName,
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
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.handlerPrice}
                      />
                      <div className="help-block">
                        {this.validator.message(
                          "Price",
                          this.state.price,
                          "required"
                        )}
                      </div>
                    </div>
                    {this.state.allPoints.map((item, key) => {
                      return (
                        <div key={key} className="form-group">
                          <input
                            className="form-control blue-from"
                            placeholder={`Point ${key + 1}`}
                            onChange={e => this.pointHandler(e, item)}
                          />
                        </div>
                      );
                    })}
                    <button
                      className="text-danger btn btn--ntg"
                      onClick={this.addPoint}
                    >
                      Add Point
                    </button>
                    {/* <a href="#" class="text-danger">Add Point</a>  */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      onClick={this.addPackage}
                      className="btn blue__btn"
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

            <div
              className="modal fade"
              id="modifyPackageModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modifyPackageLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content border-0 custom__modal">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modifyPackageLabel">
                      Modify Package
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
                      <input
                        className="form-control blue-from"
                        placeholder="Package Name"
                        value={this.state.packageName}
                        onChange={this.handlePackageName}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Package",
                          this.state.packageName,
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
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.handlerPrice}
                      />
                      <div className="help-block">
                        {this.validator2.message(
                          "Price",
                          this.state.price,
                          "required"
                        )}
                      </div>
                    </div>
                    {this.state.allPoints.map((item, key) => {
                      return (
                        <div key={key} className="form-group">
                          <input
                            className="form-control blue-from"
                            placeholder={`Point ${key + 1}`}
                            onChange={e => this.pointEditHandler(e, item, key)}
                            value={this.state.allPoints[key]}
                          />
                        </div>
                      );
                    })}
                    {/* <a href="#" class="text-danger">Add Point</a>  */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      onClick={this.modifyPackage}
                      className="btn blue__btn"
                    >
                      Modify Package
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
