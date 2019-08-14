import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class AssignedChannelPage extends Component {
    render() {
        return (
            <div>
                <div class="channelsinfo">
                    <h5 class="main__head">
                        <b>ASSIGNED CHANNELS</b>
                        <button class="btn blueborder-btn" data-toggle="modal" data-target="#assignChannelModal">Assign
                            Channel</button>
                    </h5>
                    <table class="table">
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
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets//assets/images/star.png" alt="" />
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
                                    <a href="#" onclick="return false;" class="text-red text-uppercase">Remove</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets//assets/images/star.png" alt="" />
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
                                    <a href="#" onclick="return false;" class="text-red text-uppercase">Remove</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets//assets/images/star.png" alt="" />
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
                                    <a href="#" onclick="return false;" class="text-red text-uppercase">Remove</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <div class="float-left small__img">
                                        <img src="/assets//assets/images/star.png" alt="" />
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
                                    <a href="#" onclick="return false;" class="text-red text-uppercase">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade assign__channel" id="assignChannelModal" tabindex="-1" role="dialog"
                    aria-labelledby="assignChannelLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content border-0 custom__modal">
                            <div class="modal-header">
                                <h5 class="modal-title" id="assignChannelLabel">Select Package</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="border-bottom pm-30 py-3">
                                    <div class="form-group mb-0">
                                        <select class="custom-select">
                                            <option selected>SubPakge</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="channel__list py-3">
                                    <input type="text" id="channelSearch" class="round__search form-control mb-4"
                                        placeholder="Search Channel"/>
                                        <ul id="channelFilter">
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        &TV </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Big Magic</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Colors Rishtey</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Colors TV </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Dangal TV </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        DD Bharati</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        DD National</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck"> Discovery Jeet</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Sony Entertainment Television </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Sony Sab Other Sab</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-checkbox mb-3 mx-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"
                                                        name="example1" />
                                                    <img width="30" height="30" src="/assets/images/star.png" class="mx-3" />
                                                    <label class="custom-control-label" for="customCheck">
                                                        Other Sab</label>
                                                </div>
                                            </li>
                                        </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn blue__btn">Assign</button>
                                    <button type="button" class="btn cancel__btn" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}