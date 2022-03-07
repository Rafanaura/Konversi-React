import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Konversi</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li className="nav-item">
            <Link to="/BMI" className="nav-link">
             BMI
            </Link>
        </li>
                           
        <li className="nav-item">
            <Link to="/Bank" className="nav-link">
            Bank
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/PPN" className="nav-link">
            PPN
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/Bilangan" className="nav-link">
            Bilangan
            </Link>
        </li>
    </ul>
  </div>
</nav>
           
        )
    }
}

export default Navbar;