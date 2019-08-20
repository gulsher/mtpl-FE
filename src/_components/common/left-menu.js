import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
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
        this.setState({loggedIn: false})
        this.props.history.push("/");

        } 
    }

    render() { 
        return (
            <div>
                <div className="left-part">
          <img src="/assets/images/mtpl-logo-top.svg" />
          <p className="muted-p mt-4 mb-1">Navigation</p>
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
                  <button className="btn btn-logout" onClick={this.logout} > Logout </button>
              </li>
          </ul>
      </div>
            </div>)
            
        
    }
}

export default withRouter(LeftMenuPage);