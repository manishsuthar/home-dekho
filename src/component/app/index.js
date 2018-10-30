import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';
import Main from '../main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <p>Home Dekho</p> */}
          <div className="headerDiv">
              <div className="logoimgDiv">
                  <img className="logoimg" alt="Home Dekho" src={logo}/>
              </div>
              <div className="tabContant">
                <Link to="/">
                    <div className="tab">
                        <h5>Home</h5>
                    </div>
                </Link>
                <Link to="/contact">
                  <div className="tab">
                      <h5>Contact</h5>
                  </div>
                </Link>
                <Link to="/search">
                  <div className="tab">
                      <h5>Search</h5>
                  </div>
                </Link>
                <Link to="/test">
                  <div className="tab">
                      <h5>Test</h5>
                  </div>
                </Link>
              </div>
          </div>
        </header>
        <div>
            <Main/>
            <div className="addNew btnDiv">
                <Link to="/add">
                <div className="AddBtn">Add
                    {/* <i className=""></i> */}
                </div>
                </Link>
            </div> 
        </div>
      </div>
    );
  }
}

export default App;
