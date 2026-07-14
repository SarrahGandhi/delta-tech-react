import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductStickyBar.css';

const WHATSAPP_NUMBER = '919494637013';

const ProductStickyBar = ({ productName }) => {
    const navigate = useNavigate();

    const handleRequestQuote = () => {
        const message = productName
            ? `Hello, I'd like to request a quote for "${productName}". Please share the details.`
            : `Hello, I'd like to request a quote. Please share the details.`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="product-sticky-bar">
            <div className="sticky-bar-container">
                <button
                    className="sticky-btn secondary"
                    onClick={() => navigate('/enquiry')}
                >
                    Quick Enquiry
                </button>
                <button
                    className="sticky-btn primary"
                    onClick={handleRequestQuote}
                >
                    Request Quote
                </button>
            </div>
        </div>
    );
};

export default ProductStickyBar;
