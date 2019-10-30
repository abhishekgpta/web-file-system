import React from 'react';
import logo from './logo.svg';
import Index from './components/index';
import './App.css';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="*" component={Index} />
    </div>
  );
}

export default App;
