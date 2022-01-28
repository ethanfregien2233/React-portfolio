import React from 'react';
import Navigation from '../nav';

function Header () {
    return (
        <header className='border border-bottom border-dark'>
            <h1 className='col-4 py-3 m-0'>
                Ethan Fregien
            </h1>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;