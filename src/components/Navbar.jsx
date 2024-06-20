import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="navbar">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>TestInfo</Link>
            <Link to="/rankings" className={location.pathname === '/rankings' ? 'active' : ''}>Rankings</Link>
            <Link to="/user" className={location.pathname === '/user' ? 'active' : ''}>Profile</Link>
        </div>
    );
};

export default Navbar;
