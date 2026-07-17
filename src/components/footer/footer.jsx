import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-contact-details">

                    <ul className="contact-details">
                        <h1>Delta Technologies</h1>
                        <li>76/3, Shed No. 11, Shardhamma Industrial Estate, Mylasandra, Begur Koppa Road, Bangalore – 560068</li>
                        <li><a href="tel:+919538613013">+91 95386 13013</a></li>
                        <li><a href="mailto:deltatech@outlook.com">deltatech@outlook.com</a></li>
                    </ul>

                    <ul className="products-list">
                        <h1>Products</h1>
                        <li><Link to="/hydraulics/1" onClick={() => window.scrollTo(0, 0)}>Hydraulic Hoses</Link></li>
                        <li><Link to="/hydraulics/11" onClick={() => window.scrollTo(0, 0)}>Hydraulic Hose Fittings</Link></li>
                        <li><Link to="/hydraulics/8" onClick={() => window.scrollTo(0, 0)}>Hydraulic Cylinders</Link></li>
                        <li><Link to="/linear-automation/1" onClick={() => window.scrollTo(0, 0)}>Linear Guideways</Link></li>
                        <li><Link to="/power-transmission/3" onClick={() => window.scrollTo(0, 0)}>Spindles</Link></li>
                        <li><Link to="/bearing/1" onClick={() => window.scrollTo(0, 0)}>Precision Bearings</Link></li>
                    </ul>
                    <ul className="products-list">
                        <h1>Services</h1>
                        <li><Link to="/services#custom-bearing-design">Custom Bearing Design</Link></li>
                        <li><Link to="/services#bearing-repair">Bearing Repair</Link></li>
                        <li><Link to="/services#condition-monitoring">Condition Monitoring</Link></li>
                        <li><Link to="/services#hose-services">Hose Assembly Services</Link></li>
                    </ul>
                    <ul className="products-list">
                        <h1>About Us</h1>
                        <li><Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>About Delta Tech</Link></li>
                        <li><Link to="/aboutus#locations" >Manufacturing Facilities</Link></li>
                        <li><Link to="/enquiry" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Delta Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
