import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home';
import Navbar from './navbar';
import Contact from './contact';
import Create from './create';

const App = () => {
  return (
    <Router>
      <div className="box">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/contact" exact component={() => <Contact />} />
        <Route path="/create" exact component={() => <Create />} />
      </Switch>
    </Router>
  );
};

export default App;
