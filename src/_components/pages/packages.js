import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class PackagesPage extends Component {
    render() {
        return (
            <div>
                <div class="channelsinfo">
                    <h5 class="main__head">
                        <b>PACKAGES</b>
                        <button class="btn blueborder-btn" data-toggle="modal" data-target="#addPackageModal">Add
                            Package</button>
                    </h5>
                    <table class="table">
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
                            <tr>
                                <td>1</td>
                                <td>Star Sports 1 Hindi</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td> <NavLink to="/channel" class="text-red">VIEW</NavLink></td>
                                <td>20 Kannada Channels..</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Star Sports 1 Hindi</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td> <a href="#" onclick="return false;" class="text-red">VIEW</a></td>
                                <td>20 Kannada Channels..</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Star Sports 1 Hindi</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td> <a href="#" onclick="return false;" class="text-red">VIEW</a></td>
                                <td>20 Kannada Channels..</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Star Sports 1 Hindi</td>
                                <td>North Indian</td>
                                <td>Hindi</td>
                                <td>Entertainment</td>
                                <td> <a href="#" onclick="return false;" class="text-red">VIEW</a></td>
                                <td>20 Kannada Channels..</td>
                                <td>20</td>
                                <td>
                                    <a href="#" onclick="return false;" class="text-red">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="modal fade" id="addPackageModal" tabindex="-1" role="dialog" aria-labelledby="addPackageLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content border-0 custom__modal">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addPackageLabel">Add Package</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body pm-30">
                                <div class="form-group">
                                    <input class="form-control blue-from" placeholder="Package Name" />
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
                                        <option selected>Primary Language</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="custom-select">
                                        <option selected>Primary Genre</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input class="form-control blue-from" placeholder="Price" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control blue-from" placeholder="Point 1" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control blue-from" placeholder="Point 2" />
                                </div>
                                <button class="text-danger btn btn--ntg">Add Point</button>
                                {/* <a href="#" class="text-danger">Add Point</a>  */}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn blue__btn">Add Package</button>
                                <button type="button" class="btn cancel__btn" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}