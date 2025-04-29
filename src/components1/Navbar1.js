import React from 'react'
//import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
//import {Outlet} from "react-router";
export default function Navbar(props) {

  
  return (
        
       <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">{props.About}</a>
            </li> */}
           </ul>
             
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <button type="button" class="btn btn-primary mx-2" onClick={props.toggleMode1}>Primary</button>

<button type="button" class="btn btn-success mx-2"  onClick={props.toggleMode2}>Success</button>
<button type="button" class="btn btn-danger mx-2"  onClick={props.toggleMode3}>Danger</button>
<button type="button" class="btn btn-warning mx-3"  onClick={props.toggleMode4}>Warning</button>


          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label " htmlFor="switchCheckDefault">{props.mode==="dark"?"Enable light mode":"Enable dark mode"}</label>  
</div>
        </div>
      </div>
      {/* <Outlet/> */}
    </nav>)

}