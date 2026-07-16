import React from "react";
import "./aboutus.css";

const competencies = [
    {
        id: 1,
        title: "Technical Expertise",
        description: "A team experienced in the design, development, and application of precision bearings, hydraulics, and linear automation across demanding industrial environments.",
    },
    {
        id: 2,
        title: "Global Sourcing",
        description: "Established supply channels with globally recognized manufacturers, giving customers dependable access to genuine, traceable components.",
    },
    {
        id: 3,
        title: "Application Engineering",
        description: "Product selection matched to real operating conditions — load, speed, temperature, and environment — not just catalogue numbers.",
    },
    {
        id: 4,
        title: "Quality Assurance",
        description: "Every product is checked against stringent performance standards for durability, accuracy, and long-term reliability before it reaches you.",
    },
    {
        id: 5,
        title: "Reconditioning Services",
        description: "Comprehensive spindle and bearing reconditioning that restores performance and extends the service life of critical machine tool assemblies.",
    },
    {
        id: 6,
        title: "After-Sales Support",
        description: "Installation guidance, maintenance support, and responsive service that continues well after the component is delivered.",
    },
];

const products = [
    {
        id: 1,
        title: "Precision Spindle Bearings",
        description: "High-speed bearings with exceptional accuracy and rigidity.",
    },
    {
        id: 2,
        title: "Ceramic Bearings",
        description: "Lightweight, low-friction bearings for high-speed performance.",
    },
    {
        id: 3,
        title: "Linear Guideways",
        description: "Smooth and precise linear motion with high load capacity.",
    },
    {
        id: 4,
        title: "Ball Screws",
        description: "Efficient conversion of rotary motion into precise linear motion.",
    },
    {
        id: 5,
        title: "Actuators",
        description: "Controlled motion systems for automation and positioning.",
    },
    {
        id: 6,
        title: "Spherical Plain Bearings",
        description: "Self-aligning bearings for handling heavy loads and misalignment.",
    },
];

const otherProducts = [
    "Precision Spindle Bearings",
    "Ceramic Bearings",
    "Needle Bearings",
    "One Way Clutch Bearings",
    "Spherical Plain Bearings",
    "Linear Guideways",
    "Ball Screws",
    "Linear Bearings",
    "Actuators",
    "Spline Shafts and Nuts",
];

const partnerBrands = ["SKF", "TIMKEN", "INA (Schaeffler Group)", "NSK", "NACHI", "ROLLWAY"];

const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "2", label: "Pan-India Locations" },
    { value: "200+", label: "Satisfied Customers" },
];

function AboutUs() {
    return (
        <main className="aboutus">
            <section className="aboutus-hero">
                <p className="aboutus-eyebrow">About Delta Tech</p>
                <h1>25 years of precision <span>engineering excellence.</span></h1>
                <p>Delta Technologies — specialists in precision spindles, bearings, ball screws, rotary tables, and comprehensive reconditioning services for the global machine tool industry.</p>
                <div className="aboutus-hero-metrics" aria-hidden="true">
                    <span>Bearings</span>
                    <span>Linear Automation</span>
                    <span>Hydraulics</span>
                </div>
            </section>

            <section className="aboutus-heritage">
                <div className="aboutus-section-heading">
                    <p>Who we are</p>
                    <h2>Our organization &amp; heritage.</h2>
                </div>
                <div className="aboutus-heritage-body">
                    <p>Delta Technologies is a trusted supplier of high-quality bearings and precision motion components, serving diverse industrial sectors with reliable and performance-driven solutions. With a strong focus on quality, consistency, and technical expertise, we provide products that support critical operations across manufacturing, automation, and heavy industry.</p>
                    <p>Our portfolio includes precision bearings, linear motion systems, and power transmission components sourced from globally recognized manufacturers. We are committed to ensuring that every product meets stringent performance standards, delivering durability, accuracy, and long-term reliability.</p>
                    <p>At Delta Technologies, we go beyond supply — we partner with our clients to understand their requirements and provide tailored solutions that optimize performance and efficiency.</p>
                </div>
            </section>

            <section className="aboutus-stats">
                {stats.map((stat) => (
                    <div key={stat.label} className="aboutus-stat">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </section>

            <section className="aboutus-competencies">
                <div className="aboutus-section-heading">
                    <p>What we do well</p>
                    <h2>Our core competencies.</h2>
                </div>
                <div className="aboutus-competencies-grid">
                    {competencies.map((competency) => (
                        <article key={competency.id} className="aboutus-competency">
                            <h3>{competency.title}</h3>
                            <p>{competency.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="aboutus-portfolio">
                <div className="aboutus-section-heading">
                    <p>What we supply</p>
                    <h2>Comprehensive product portfolio.</h2>
                </div>
                <div className="aboutus-portfolio-grid">
                    {products.map((product) => (
                        <article key={product.id} className="aboutus-portfolio-card">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </article>
                    ))}
                </div>
                <div className="aboutus-portfolio-extra">
                    <div className="aboutus-other-products">
                        <h3>Other Products</h3>
                        <p>We offer a wide range of precision engineering components and custom solutions for diverse industrial applications, including:</p>
                        <ul>
                            {otherProducts.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="aboutus-brands">
                        <h3>Brands We Work With</h3>
                        <div className="aboutus-brand-list">
                            {partnerBrands.map((brand) => (
                                <div key={brand} className="aboutus-brand">{brand}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutus-locations" id="locations">
                <div className="aboutus-section-heading">
                    <p>Where to find us</p>
                    <h2>Our locations.</h2>
                </div>
                <div className="aboutus-locations-grid">
                    <article className="aboutus-location-card">
                        <header>
                            <h3>Southern India</h3>
                            <p>Corporate Office / Works</p>
                        </header>
                        <p className="aboutus-location-address">
                            #11/2, Lakshmipura Main Road,<br />
                            Abbigere Industrial Area, Abbigere,<br />
                            Bangalore – 560090
                        </p>
                        <div className="aboutus-location-contact">
                            <p className="aboutus-contact-label">Phone</p>
                            <p>
                                Fixed: +91-80-23253148<br />
                                Mobile: +91-9591989244 / +91-9845345952<br />
                                +91-9591994067
                            </p>
                        </div>
                        <div className="aboutus-location-contact">
                            <p className="aboutus-contact-label">Email</p>
                            <p>
                                sales@overseasbearing.com<br />
                                info@overseasbearing.com
                            </p>
                        </div>
                    </article>

                    <article className="aboutus-location-card">
                        <header>
                            <h3>Hyderabad</h3>
                            <p>Regional Office</p>
                        </header>
                        <p className="aboutus-location-address">
                            60 MG Road, G-37 VaraLakshmi Market Complex,<br />
                            Hyderabad – 50003,<br />
                            Telangana State, India
                        </p>
                        <div className="aboutus-location-contact">
                            <p className="aboutus-contact-label">Phone</p>
                            <p>Mobile: +91-9494637013</p>
                        </div>
                        <div className="aboutus-location-contact">
                            <p className="aboutus-contact-label">Email</p>
                            <p>quickresponse@delta-tech.co.in</p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default AboutUs;
