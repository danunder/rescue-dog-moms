import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./Components/Nav";
import About from "./Components/About";
import Episodes from "./Components/Episodes";
import Home from "./Components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/episodes" component={Episodes} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
