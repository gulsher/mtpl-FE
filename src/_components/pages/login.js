import React, { Component } from "react";
export default class LoginPage extends Component {
    render() {
        return (
            <div class="logininfo">
                <div class="login__box">
                    <div class="login__head">
                        <img src="/assets/images/mtpl-logo-top.svg" alt="" />
                    </div>
                    <h6 class="text-center text-uppercase"><b>Login</b></h6>
                    <div class="login__content">
                        <div class="form-group">
                            <input class="form-control blue-from" placeholder="Login" />
                        </div>
                        <div class="form-group">
                            <input class="form-control blue-from" placeholder="Password" />
                        </div>
                        <button class="btn blue__btn w-100" onclick="window.location.href='index.html'">Login</button>
                    </div>
                </div>
                <p class="last-p text-center"><b>Logical Sorting System</b></p>
            </div>
        )
    }
}