import React from "react";

function NavBar () {
    const miPrimerJsx = (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mini Petit</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MiniTips</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MiniCocina</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Baberos</a></li>
                  <li><a className="dropdown-item" href="#">Ajuares</a></li>
                  <li><a className="dropdown-item" href="#">Muñecos de apego</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
)
    return ( 
        <div>
        {miPrimerJsx}
        </div>
    );
}

export default NavBar;
