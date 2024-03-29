import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftMenuPage from "./common/left-menu";
import routes from "../routes";
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            token : localStorage.getItem("tokens")
        }
    }

    

    render() {
        return (
            <div>
                <Router>
                    <div className="mian-container">
                        <div className="left-menu">
                           {(this.state.token === null)? null :<LeftMenuPage /> }                        
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
                    </div>
                </Router>

            </div>
        )
    }
}