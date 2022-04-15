import React from 'react';
import './Header.css';

const Header = () => (
    <div className="HeaderCDAP">
        <a href="#default" className="Headerlogo">CDAP</a>
                <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#portal">Portal</a>
                        <a href="#staff">Staff</a>
                </div>

    </div>
)
export default Header;