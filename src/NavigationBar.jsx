import { Link } from "react-router"
import { HashLink } from "react-router-hash-link"

function NavigationBar (){
    return (
        <nav className="navbar navbar-expand-lg  sticky-top bg-body-tertiary">
  <div className="container-fluid mx-5">
    <a className="navbar-brand" href="#">
      <img src="../src/assets/Logo.svg" alt="Logo"  className="d-inline-block align-text-top" />
    </a>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <HashLink className="nav-link"  smooth to="/#home">Home</HashLink>
        </li>
        <li className="nav-item">
       {/*    <Link className="nav-link" to="/footer">About</Link> */}
          <HashLink className="nav-link"  smooth to="/#about">About</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link"  smooth to="/#Menu">Menu</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link"  smooth to="/#booking-sec">Reservations</HashLink>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order Online</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    )
}


export default NavigationBar