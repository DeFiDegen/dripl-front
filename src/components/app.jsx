import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home';
import Navbar from './navbar';
import Contact from './contact';
import Create from './create';

// Navbar is a CONSTANT component, therefore is NOT present within Switch
// Switch and Route components create routing paths for different pages(COMPONENTS)
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/contact" exact component={() => <Contact />} />
        <Route path="/create" exact component={() => <Create />} />
      </Switch>
    </Router>
  );
};

export default App;
