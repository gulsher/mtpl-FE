import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter, Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import { loginService } from "./../../_services/login_service";
import { toast } from "react-toastify";


 class LeftMenuPage extends Component {

    logout =  async() =>{
        let response = await loginService.postLogout();
        if(response.statusCode === 200){
            toast.success("Logout successfully")            
            localStorage.removeItem("tokens");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        this.props.history.push("/");

        } 
    }

    render() {
        let menu = localStorage.getItem('tokens')
          ? (<div class="left-part">
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
              <li>
                  <button className="btn" onClick={this.logout} > Logout </button>
              </li>
          </ul>
      </div>) 
          : null;
        return (
            <div>
                {menu}
            </div>
        )
    }
}

export default withRouter(LeftMenuPage);