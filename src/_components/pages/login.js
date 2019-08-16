import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { loginService } from "./../../_services/login_service";
import { toast } from "react-toastify";
 class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleUserLogin = async () => {
        let response = await loginService.postLogin(this.state);
        if (response && response.token) {
            toast.success("Login successfully")
          localStorage.setItem("tokens", response.token);
          localStorage.setItem("userId", response.result.id);
          localStorage.setItem("role", response.result.role);
          localStorage.setItem("name", response.result.name);
          localStorage.setItem("email", response.result.email);
          this.props.history.push("/main");
        }
      };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="logininfo">
                <div className="login__box">
                    <div className="login__head">
                        <img src="/assets/images/mtpl-logo-top.svg" alt="" />
                    </div>
                    <h6 className="text-center text-uppercase"><b>Login</b></h6>
                    <div className="login__content">
                        <div className="form-group">
                            <input className="form-control blue-from" onChange={this.onChangeHandler} name="email" placeholder="Login" />
                        </div>
                        <div className="form-group">
                            <input className="form-control blue-from" onChange={this.onChangeHandler} name="password" type="password" placeholder="Password" />
                        </div>
                        <button className="btn blue__btn w-100" onClick={this.handleUserLogin}   >Login</button>
                    </div>
                </div>
                <p className="last-p text-center"><b>Logical Sorting System</b></p>
            </div>
        )
    }
}

export default withRouter(LoginPage);