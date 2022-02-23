import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className= 'justify-content-center'>
            <ul className='row justify-content-center'>
                <li className='nav-link col-md-2 col-sm-6 mb-2'>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/projects"}
                        to = "/projects"
                    >
                    Portfolio
                    </NavLink>
                </li>
                <li className='nav-link col-md-2 col-sm-6 mb-2'>
                    <NavLink 
                        activeClassName = "active"
                        isActive={() => window.location.pathname === "/about"}
                        to = "/about"
                    >
                    About Me
                    </NavLink>
                </li>
                <li className='nav-link col-md-2 col-sm-6 mb-2'>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/contact"}
                        to = "/contact"
                    >
                    Contact
                    </NavLink>
                </li>
                <li className='nav-link col-md-2 col-sm-6 mb-2'>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/resume"}
                        to = "/resume"
                    >
                    Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;