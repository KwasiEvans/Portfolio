import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <h2 className ="logo">OWUSU BOATENG EVANS</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item active">
         <a className="nav-link " aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">about me</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">services</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">what i do</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">portfolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">contact</a>
    </li>
    </ul>
  </div>
 </div>
</nav>
</div>
)

}

export default Navbar
