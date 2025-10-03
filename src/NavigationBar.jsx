import { Link } from "react-router"

function NavigationBar (){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid mx-5">
    <a class="navbar-brand" href="#">
      <img src="../src/assets/Logo.svg" alt="Logo"  class="d-inline-block align-text-top" />
    </a>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/footer">About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reservations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Order Online</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    )
}


export default NavigationBar