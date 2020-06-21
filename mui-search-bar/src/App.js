import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import ProvinceListItem from './components/ProvinceListItem';
import ProvincesAndStates from './pages/ProvincesAndStates';

import './App.css';


class App extends Component {
  render(){

    return (
      <div className="App">
        <Router>
          <Route 
            exact path="/"
            render={(props) => (
              <ProvincesAndStates data={this.props.data} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
