import React from 'react';
import logo from '../assets/logo.jpeg'
import '../Pages/style.css'
import {Link} from 'react-router-dom'


function Navbar(){

    document.addEventListener('DOMContentLoaded', () => {
        const M = window.M;
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

    return(
        <>
         
         <nav className='nav'>
            
            <Link to="/home" className="brand-logo"><img src={logo} className='logo responsive-img'></img></Link>
            <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"><h3>menu</h3></i></a>
            <ul className="right hide-on-med-and-down menu">
            <li className='item-menu'><Link to="/produtos">Produtos</Link></li>
            <li className='item-menu'><Link to="/">Sair</Link> </li>
            </ul>
            
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li className='item-menu-responsivo'><Link to="/produtos"><h3>Produtos</h3></Link></li>
            <li className='item-menu-responsivo'><Link to="/"><h3>Sair</h3></Link></li>
        </ul>
      </>
    )
}

export default Navbar;