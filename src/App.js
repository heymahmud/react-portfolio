import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Switch>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
