import React from "react";
import { Link } from "react-router-dom";
import ProductStickyBar from "../ProductStickyBar/ProductStickyBar";
import "./product-pages.css";

export default function ProductDetail({ product, category, basePath }) {
    if (!product) {
        return (
            <main className="product-not-found">
                <p className="product-kicker">Product catalogue</p>
                <h1>Product not found</h1>
                <Link to={basePath}>Return to {category}</Link>
            </main>
        );
    }

    return (
        <main className="product-detail">
            <nav className="product-breadcrumb" aria-label="Breadcrumb">
                <Link to="/products">Products</Link><span>/</span>
                <Link to={basePath}>{category}</Link><span>/</span>
                <span aria-current="page">{product.productName}</span>
            </nav>

            <header className="detail-heading">
                <p className="product-kicker">{category}</p>
                <h1>{product.productName}</h1>
            </header>

            <div className="detail-layout">
                <div className="detail-visual">
                    <span className="detail-visual-label">Component profile</span>
                    <img src={product.img} alt={product.productName} />
                </div>

                <div className="detail-content">
                    <p className="detail-lede">{product.description}</p>
                    <div className="detail-specs">
                        <section>
                            <p className="detail-section-label">Performance</p>
                            <h2>Key features</h2>
                            <ul>{product.keyFeatures?.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                        </section>
                        <section>
                            <p className="detail-section-label">Use cases</p>
                            <h2>Applications</h2>
                            <ul>{product.applications?.map((application) => <li key={application}>{application}</li>)}</ul>
                        </section>
                    </div>
                </div>
            </div>
            <ProductStickyBar productName={product.productName} />
        </main>
    );
}
