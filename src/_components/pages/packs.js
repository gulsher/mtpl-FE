import React, { Component } from "react";
export default class PacksPage extends Component {
    render() {
        return (
            <div>
                <div class="channelsinfo">
                    <h5 class="main__head">
                        <b>PACKS</b>
                        <button class="btn blueborder-btn" data-toggle="modal" data-target="#addPackModal">Add Pack
                        </button>
                    </h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Pack Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Broadcaster Package</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Curated Packages</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>MTPL PAckages</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="addPackModal" tabindex="-1" role="dialog"
                    aria-labelledby="addPackLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content border-0 custom__modal">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addPackLabel">Add Pack</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body pm-30">
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control blue-from" placeholder="Pack Name" />
                                </div>
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