import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/global/Nav";
import Home from "./components/pages/Home";
// import About from "./components/pages/About";
import Registration from "./components/pages/Registration";
import Track from "./components/pages/Track";
import Schedule from "./components/pages/Schedule";
import Venue from "./components/pages/Venue";
import Submission from "./components/pages/Submission";
import Rules from "./components/pages/Rules";
import Faq from "./components/pages/Faq";

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
        <Nav />
          <div className="content">
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/about" component={About} /> */}
              <Route exact path="/register" component={Registration} />
              <Route exact path="/tracks" component={Track} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/venue" component={Venue} />
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/faq" component={Faq} />
          </div>
        </div>
        </BrowserRouter>
      </div>
        
    );
  }
}

export default App;
