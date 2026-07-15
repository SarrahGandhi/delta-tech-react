import React from "react";
import { useParams } from "react-router-dom";
import { hydraulicsProducts } from "../../../bearingdata";
import ProductStickyBar from "../../ProductStickyBar/ProductStickyBar";
import "./hydraulics.css";

function HydraulicsDetail() {
    const { id } = useParams();
    const product = hydraulicsProducts.find((item) => item.id === Number(id));

    if (!product) {
        return <main className="hydraulics-not-found"><h1>Product not found</h1></main>;
    }

    return (
        <main className="hydraulics-detail">
            <p className="hydraulics-eyebrow">Hydraulics</p>
            <h1>{product.productName}</h1>
            <div className="hydraulics-detail-layout">
                <img src={product.img} alt={product.productName} />
                <div className="hydraulics-detail-content">
                    <p>{product.description}</p>
                    <section>
                        <h2>Key Features</h2>
                        <ul>
                            {product.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h2>Applications</h2>
                        <ul>
                            {product.applications.map((application) => <li key={application}>{application}</li>)}
                        </ul>
                    </section>
                </div>
            </div>
            <ProductStickyBar productName={product.productName} />
        </main>
    );
}

export default HydraulicsDetail;
