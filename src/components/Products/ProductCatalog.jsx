import React from "react";
import { Link } from "react-router-dom";
import "./product-pages.css";

function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 10h11M11 6l4 4-4 4" />
        </svg>
    );
}

export default function ProductCatalog({ category, eyebrow, description, products, basePath }) {
    return (
        <main className="product-catalog">
            <header className="catalog-hero">
                <div className="catalog-hero-copy">
                    <p className="product-kicker">{eyebrow}</p>
                    <h1>{category}</h1>
                    <p className="catalog-intro">{description}</p>
                </div>
                <div className="catalog-index" aria-label={`${products.length} product groups`}>
                    <span>{String(products.length).padStart(2, "0")}</span>
                    <p>Product groups<br />available</p>
                </div>
            </header>

            <div className="catalog-toolbar">
                <p>Explore the range</p>
                <span>Application-ready components</span>
            </div>

            <section className="product-grid" aria-label={`${category} products`}>
                {products.map((product, index) => (
                    <Link className="product-card" to={`${basePath}/${product.id}`} key={product.id}>
                        <div className="product-card-media">
                            <img src={product.img} alt={product.productName} />
                            <span className="product-card-number">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="product-card-body">
                            <h2>{product.productName}</h2>
                            <span className="product-card-link">View specifications <ArrowIcon /></span>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    );
}
