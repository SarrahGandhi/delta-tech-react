import React from "react";
import "./service-page.css";

const reasons = [
    {
        id: 1,
        title: "Technical Expertise",
        description: "A team experienced in the design, development, and application of bearings, hydraulics, and linear automation, matched to the requirements of your applications.",
    },
    {
        id: 2,
        title: "Customized Solutions",
        description: "When a standard part isn't enough, we configure tailored components and compatible assemblies built around your operating conditions.",
    },
    {
        id: 3,
        title: "Reliable Supply",
        description: "Genuine components sourced from globally recognized manufacturers, checked against stringent quality standards before they reach you.",
    },
];

function ServicesPage() {
    return (
        <section className="service-container">
            <p className="service-eyebrow">Why choose Delta Tech</p>
            <h1>Built on expertise. Chosen for reliability.</h1>
            <div className="service-categories">
                {reasons.map((reason) => (
                    <article key={reason.id} className="service-categories-container">
                        <h2>{reason.title}</h2>
                        <p>{reason.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ServicesPage;
