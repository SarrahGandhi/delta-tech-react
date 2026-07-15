import React from "react";
import { Link } from "react-router-dom";
import "./servicepage.css";

const WHATSAPP_NUMBER = "919494637013";

const productAreas = [
    {
        number: "01",
        title: "Bearings",
        detail: "Selection support for precision, high-load, and application-specific bearing systems.",
    },
    {
        number: "02",
        title: "Linear Automation",
        detail: "Guidance for guideways, ball screws, shafts, bearings, and positioning components.",
    },
    {
        number: "03",
        title: "Power Transmission",
        detail: "Component matching for dependable torque transfer and rotating machinery.",
    },
    {
        number: "04",
        title: "Hydraulics",
        detail: "Hoses, fittings, cylinders, expansion joints, and fluid-power assembly support.",
    },
];

const services = [
    {
        id: "product-selection",
        title: "Product Selection & Technical Consultation",
        description: "We help match the right component to your operating conditions, performance needs, and installation constraints.",
        points: ["Application and load review", "Product and material recommendations", "Configuration and compatibility guidance"],
    },
    {
        id: "custom-solutions",
        title: "Custom Solutions & Assembly Support",
        description: "For applications that need more than a standard part, we support tailored configurations and compatible assemblies.",
        points: ["Custom bearing and motion solutions", "Hydraulic hose and fitting assemblies", "Component integration support"],
    },
    {
        id: "maintenance",
        title: "Maintenance, Repair & Reconditioning",
        description: "Practical support to restore component performance, extend service life, and reduce avoidable replacement costs.",
        points: ["Condition assessment and diagnosis", "Bearing maintenance and repair", "Installation and removal support"],
    },
    {
        id: "reliability",
        title: "Reliability & Plant Support",
        description: "We work with your maintenance team to identify issues early and improve the reliability of critical equipment.",
        points: ["Plant surveys and damage analysis", "Lubrication management", "Condition monitoring and team training"],
    },
];

function ServicesPage() {
    const handleWhatsappClick = () => {
        const message = "Hello, I'd like to know more about Delta Tech's technical services.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="services-page">
            <section className="services-page-header">
                <p className="services-eyebrow">Delta Tech support</p>
                <h1>More than components. <span>Complete technical support.</span></h1>
                <p>From first specification to reliable operation, Delta Tech supports industrial teams with product expertise, tailored solutions, and practical after-sales service.</p>
                <div className="services-header-actions">
                    <Link to="/products">Explore Products</Link>
                    <button type="button" onClick={handleWhatsappClick}>Talk to an Expert</button>
                </div>
                <div className="services-hero-index" aria-hidden="true">
                    <span>Technical<br />services</span>
                    <strong>01—04</strong>
                </div>
                <div className="services-hero-metrics">
                    <span>Specify</span>
                    <span>Integrate</span>
                    <span>Maintain</span>
                </div>
            </section>

            <section className="product-support-section">
                <div className="services-section-heading">
                    <p>Designed around your equipment</p>
                    <h2>Support across the complete product range.</h2>
                </div>
                <div className="product-support-grid">
                    {productAreas.map((area) => (
                        <article key={area.number} className="product-support-card">
                            <span>{area.number}</span>
                            <h3>{area.title}</h3>
                            <p>{area.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="services-offerings">
                <div className="services-section-heading">
                    <p>How we help</p>
                    <h2>Technical expertise at every stage.</h2>
                </div>
                <div className="service-offerings-grid">
                    {services.map((service, index) => (
                        <article key={service.id} id={service.id} className="service-item">
                            <span className="service-item-number">0{index + 1}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul>
                                {service.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="services-contact">
                <div>
                    <p>Have an application in mind?</p>
                    <h2>Let’s find the right solution.</h2>
                </div>
                <button type="button" onClick={handleWhatsappClick}>Contact Delta Tech <span>↗</span></button>
            </section>
        </main>
    );
}

export default ServicesPage;