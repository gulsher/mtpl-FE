import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./_components/home";
import "./_assets/main.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/login" component={LoginPage} /> */}
            <Route path="/main" component={HomePage} />
            {/* <Route path="**" component={PageNotFoundPage} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
