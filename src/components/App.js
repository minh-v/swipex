import React, { Component } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";
import Anteatery from "./Anteatery";
import Pippins from "./Pippins";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Header />

          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/anteatery" component={Anteatery} />
                <Route exact path="/pippins" component={Pippins} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }
}

export default App;
