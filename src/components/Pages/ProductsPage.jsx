import React from "react";
import { Link } from "react-router-dom";
import "../Home/products/products.css";

function ProductsPage() {
    return (
        <main className="products-container products-page">
            <h1>Our Products</h1>
            <p className="products-page-intro">Precision components and motion solutions for demanding industrial applications.</p>
            <div className="product-categories">
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Bearings</h2>
                    <p className="product-description">High-quality industrial bearings for all your needs.</p>
                    <Link className="link" to="/bearing">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/linearautomation.png" alt="bearing" />
                    <h2>Linear Automation</h2>
                    <p className="product-description">Precision linear motion control systems.</p>
                    <Link className="link" to="/linear-automation">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/powertransmission.png" alt="bearing" />
                    <h2>Power Transmission & Mechanical Components</h2>
                    <p className="product-description">Reliable and durable industrial components.</p>
                    <Link className="link" to="/power-transmission">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/accessories.png" alt="bearing" />
                    <h2>Accessories & Supporting Components</h2>
                    <p className="product-description">Engineered for maximum efficiency.</p>
                    <Link className="link" to="/accessories">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/hydraulics.png" alt="Hydraulic components" />
                    <h2>Hydraulics</h2>
                    <p className="product-description">Fluid power components for precise, reliable industrial motion.</p>
                    <Link className="link" to="/hydraulics">Read More</Link>
                </div>

            </div>
        </main>
    );


}

export default ProductsPage;
