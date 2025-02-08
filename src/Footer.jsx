import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="outfooter">
            <div className="footer">
                <div className="footer-section">
                <Link to='/' className="link-style"><img src="logo.jpg" alt="" className='footerimg' /></Link>
                    <p className="footer-para">
                        Experience the best flavors and hospitality at our restaurant. We serve delicious meals with passion and care.
                    </p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Pages</h3>
                    <ul className="footer-list">
                        <Link to='/' className="link-style"><li>Home</li></Link>
                        <Link to='/menu' className="link-style"><li>Menu</li></Link>
                        <Link to='/book' className="link-style"><li>Book</li></Link>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Address</h3>
                    <p className="footer-text">123 Food Street, Anna nager City, XYZ</p>
                    <p className="footer-text"><strong>Mobile:</strong> +91 1234567890</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Follow Us On</h3>
                    <div className="footer-icons">
                        <FaFacebookF className="footer-icon" style={{height:'29px'}}/>
                        <FaInstagram className="footer-icon" />
                        <FaTwitter className="footer-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © 2025 Restaurant. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
