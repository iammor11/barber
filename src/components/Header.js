import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  state= 
  {
    myclass1: "navbar-collapse collapse my"
  }

  hideHeader = () => {
    this.setState({
      myclass1: "navbar-collapse collapse"
    })
  }
  render(){return (    
    <div>
      <header id="content" className='navbar navbar-expand-md fixed-top'>
        <button className='navbar-toggler' data-toggle="collapse" data-target='#list'>
        <span className='navbar-toggler-icon' id="myicon1"></span><br />
        <span className='navbar-toggler-icon' id="myicon2"></span><br />
        <span className='navbar-toggler-icon' id="myicon3"></span>
        </button>

        <div id="logo">
        <NavLink to="/" className='navbar-brand'><h1>HairStyler</h1></NavLink>
        </div>
      
        <div className={this.state.myclass1} id="list">
          <ul id="navBar">
            <li><NavLink to="/" onClick={this.hideHeader}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={this.hideHeader}>About</NavLink></li>
            <li><NavLink to="/services" onClick={this.hideHeader}>Services</NavLink></li>
            <li><NavLink to="/pricing" onClick={this.hideHeader}>Pricing</NavLink></li>
            <li><NavLink to="/team" onClick={this.hideHeader}>Team</NavLink></li>
            <li><NavLink to="/contact" onClick={this.hideHeader}>Contact</NavLink></li>
          </ul>
        </div>
      </header>
    </div>
);
}}

export default Header;