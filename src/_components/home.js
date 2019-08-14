import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftMenuPage from "./common/left-menu";
import routes from "../routes";
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="mian-container">
                        {/* <div className="row"> */}
                            <div className="left-menu">
                                <LeftMenuPage />
                            </div>
                            <div className="right-menu">
                                <Switch>
                                    {routes.map((route, key) => {
                                        return route.component ? (
                                            <Route
                                                key={key}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                children={route.children}
                                                render={props => <route.component {...props} />}
                                            />
                                        ) : null;
                                    })}
                                </Switch>
                            </div>
                        {/* </div> */}
                    </div>
                </Router>

            </div>
        )
    }
}