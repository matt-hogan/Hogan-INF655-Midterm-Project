import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <h1>Get Connected With Our Social Networks</h1>
            <div className='links'>
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaLinkedin size={30} />
            </div>
        </div>
    );
}