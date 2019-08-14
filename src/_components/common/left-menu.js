import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class LeftMenuPage extends Component {
    render() {
        return (
            <div class="left-part">
                <img src="/assets/images/mtpl-logo-top.svg" />
                <p class="muted-p mt-4 mb-1">Navigation</p>
                <ul>
                    <li>
                        <NavLink to="/main">Channels</NavLink>
                    </li>
                    <li>
                        <NavLink to="/packages">Packages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/packs">Packs</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}