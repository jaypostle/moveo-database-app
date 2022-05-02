import React from 'react'
import { Link } from 'react-router-dom';
import NavMain from './NavMain';

export function Header(props) {
    

    return (
        <header className="App-header">
            <h1><Link to='/'>Jayson's Movie App</Link></h1>
            <NavMain />
        </header>

    )
}

export default Header