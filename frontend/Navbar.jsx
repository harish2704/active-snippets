import React, { Component } from 'react';

export default class Navbar extends Component{

  render(){
    return (
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Active-Snippets</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#" className="">Home</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
