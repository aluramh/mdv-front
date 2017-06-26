import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/Header'; // Import a component from another file
import LoginPage from './components/LoginPage'; // Import a component from another file
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                
                <Route path="/main" component={LoginPage}/>
            </div>
        </Router>
    );
  }
}

export default App;
