import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./_components/home";
import LoginPage from "./_components/pages/login";
import PackagesPage from "./_components/pages/packages";
import AssignedChannelPage from "./_components/pages/assigned-channel";
import PacksPage from "./_components/pages/packs";

import "./_assets/main.min.css";
import { toast } from "react-toastify";
toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/main" component={HomePage} />
            <Route exact path="/" component={LoginPage} />
            <Route path="/packages" component={PackagesPage} />
            <Route path="/channel/:id" component={AssignedChannelPage} />
            <Route path="/packs" component={PacksPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
