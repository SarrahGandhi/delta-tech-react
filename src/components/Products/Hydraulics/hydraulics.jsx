import React from "react";
import { Link } from "react-router-dom";
import { hydraulicsProducts } from "../../../bearingdata";
import "./hydraulics.css";

function Hydraulics() {
    return (
        <main className="hydraulics-container">
            <p className="hydraulics-eyebrow">Fluid power solutions</p>
            <h1>Hydraulics Products</h1>
            <p className="hydraulics-intro">
                Reliable hydraulic components for controlled motion, power transmission, and demanding industrial applications.
            </p>
            <div className="hydraulics-products">
                {hydraulicsProducts.map((product) => (
                    <article key={product.id} className="hydraulics-product-card">
                        <img src={product.img} alt={product.productName} />
                        <h2>{product.productName}</h2>
                        <Link to={`/hydraulics/${product.id}`}>Explore product</Link>
                    </article>
                ))}
            </div>
        </main>
    );
}

export default Hydraulics;
