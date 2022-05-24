import React from 'react'
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import moveoLogo from   '../images/logo-moveo4xgreen.png';

export function Header(props) {
    


    return (
        <header className="App-header">
            <h1><Link to='/'><img src={moveoLogo} alt='moveo logo'/></Link></h1>
            
            <NavMain />
        </header>

    )
}

export default Header