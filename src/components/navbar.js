import React from 'react';
import '../css/navbar.css';

const navbar = () => {
    return (
<div className="  navbar-section   ">
<nav className=" navbar navbar-expand-lg fixed-top" style={{backgroundColor:"white"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">VISTA
    <p className="navbar-subtitle">-ROOMS-</p>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">

       
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      Cities
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Mumbai</a>
        <a className="dropdown-item" href="#">Delhi</a>
        <a className="dropdown-item" href="#">Bangalore</a>
      </div>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
     Explore
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Beaches</a>
        <a className="dropdown-item" href="#">Hill Station</a>
        <a className="dropdown-item" href="#">Deserts</a>
      </div>
    </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Partner With Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Need Help ?</a>
        </li>
        <li className="nav-item">
        <button  className="btn btn-Offers">Offers<i className="fa fa-bell" style={{paddingLeft:'5px'}} /></button>
        </li>
        <li className="nav-item">
        <button  className="btn btn-login"><i className="fa fa-user-circle" style={{paddingRight:'5px',fontSize:'18px'}}/>Login</button>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  <div style={{backgroundColor:'maroon',height:'10px'}}></div>     
  </div>
    )
}
export default navbar;