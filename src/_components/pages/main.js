import React, { Component } from "react";
import LeftMenuPage from "../common/left-menu";
class MainPage extends Component {
    render() {
        return (
            <div>
                <div class="channelsinfo">
                    <h5 class="main__head">
                        <b>CHANNELS</b>
                        <button class="btn blueborder-btn" data-toggle="modal" data-target="#addChannelModal">Add
                            Channel</button>
                    </h5>
                    <table class="table">
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
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets/images/STAR_Sports_1_logo.png" alt="" />
                                    </div>
                                    <div class="right">Star Sports 1 Hindi</div>
                                    <div class="clearfix"></div>
                                </td>
                                <td>Star</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets/images/STAR_Sports_1_logo.png" alt="" />
                                    </div>
                                    <div class="right">Star Sports 1 Hindi</div>
                                    <div class="clearfix"></div>
                                </td>
                                <td>Star</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets/images/STAR_Sports_1_logo.png" alt="" />
                                    </div>
                                    <div class="right">Star Sports 1 Hindi</div>
                                    <div class="clearfix"></div>
                                </td>
                                <td>Star</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets/images/STAR_Sports_1_logo.png" alt="" />
                                    </div>
                                    <div class="right">Star Sports 1 Hindi</div>
                                    <div class="clearfix"></div>
                                </td>
                                <td>Star</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="addChannelModal" tabindex="-1" role="dialog" aria-labelledby="addChannelLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content border-0 custom__modal">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addChannelLabel">Add Channel</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body pm-30">
                                <div class="form-group">
                                    <select class="custom-select">
                                        <option selected>Broadcaster</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input class="form-control blue-from" placeholder="Channel Name" />
                                </div>
                                <div class="form-group">
                                    <select class="custom-select">
                                        <option selected>Region/Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="custom-select">
                                        <option selected>Language</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="custom-select">
                                        <option selected>Genre</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input class="form-control blue-from" placeholder="Price" />
                                </div>
                                <div class="upload-input">
                                    <input type="file" />
                                    <div class="check-box">
                                        <div><b>Upload Channel Photo</b></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn blue__btn">Add Channel</button>
                                <button type="button" class="btn cancel__btn" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainPage;