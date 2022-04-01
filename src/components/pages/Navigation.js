import React from 'react';
import { Link } from "react-router-dom";
import { FaInfoCircle, FaHome, FaUsers, FaList } from 'react-icons/fa';

const linkStyle = {
    fontSize: "120px",
    color: "black",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "40px",
};

export default function Navigation() {
    return (
        <div className='navigation'>
            <ul className='navigation-list'>
                <li className='navigation-links'>
                    <Link to="/">
                        <FaHome style={linkStyle}/>
                    </Link>
                </li>
                <li className='navigation-links'>
                    <Link to="/about">
                        <FaInfoCircle style={linkStyle}/>
                    </Link>
                </li>
                <li className='navigation-links'>
                    <Link to="/users/1/Guest">
                        <FaUsers style={linkStyle}/>
                    </Link>
                </li>
                <li className='navigation-links'>
                    <Link to="/tasklist">
                        <FaList style={linkStyle}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
