import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
class NavHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" end>INFINEWS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" end>Latest News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" end>Sports</NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" end>
            ↯
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink  to='/business'    className="dropdown-item" end >Business</NavLink></li>
            <li><NavLink  to='/entertainment'  className="dropdown-item" end>Entertainment</NavLink></li>
            <li><NavLink to='/general'  className="dropdown-item" end>General</NavLink></li>
            <li><NavLink to='/health'   className="dropdown-item" end>Health</NavLink></li>
            <li><NavLink to='/science' className="dropdown-item" end>Science</NavLink></li>
            <li><NavLink  className="dropdown-item" end>Technology</NavLink></li>
            {/* <li><hr className="dropdown-divider"></hr></li> */}
            {/* <li><a className="dropdown-item" to="/about">About</a></li> */}
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default NavHeader;