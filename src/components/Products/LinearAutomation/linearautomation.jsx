import React from "react";
import "./linearautomation.css"
import { Link } from "react-router-dom";
import { linearAutomationProducts } from "../../../bearingdata";
function LinearAutomations() {
    return (
        <main className="linear-automation-container">
            <h1>Linear Automations</h1>
            <h2>Complete range: spindle, angular contact, tapered, thrust and slewing ring linear-automations for precision applications.</h2>
            <div className="linear-automation-products">
                {linearAutomationProducts.map((product) => (<div key={product.id}>
                    <img src={product.img} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <Link to={`/linear-automation/${product.id}`}><button>Read More</button></Link>
                </div>))}
            </div>
        </main>
    );
} export default LinearAutomations;