import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import '../style/header.css';

const Header = () => {

return (
        <div className="header">
            <div className="lan-button">
            <Link to='/en'>
            <Button className="lan-button-en" variant="outline-danger">English</Button>
            </Link>
            <Link to='/we'>
            <Button variant="outline-info">Welsh</Button>
            </Link>
            </div>
        </div>
    );
};

export default Header;