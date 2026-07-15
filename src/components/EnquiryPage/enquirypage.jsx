import React, { useState } from 'react';
import './enquirypage.css';

const EMAIL_ADDRESS = "sales@overseasbearing.com";
const WHATSAPP_NUMBER = "919494637013";

const EnquiryPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // e.g., using an API or mail service like EmailJS
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry. We will get back to you shortly!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <main className="enquiry-page">
            <section className="enquiry-hero">
                <p className="enquiry-eyebrow">Contact Delta Tech</p>
                <h1>Tell us what you're <span>working on.</span></h1>
                <p>Whether you need a specific component, a custom solution, or technical advice, our team is ready to help you find the right answer.</p>
                <div className="enquiry-hero-metrics" aria-hidden="true">
                    <span>Enquire</span>
                    <span>Specify</span>
                    <span>Deliver</span>
                </div>
            </section>

            <section className="enquiry-content">
                <div className="enquiry-info">
                    <div className="enquiry-section-heading">
                        <p>Get in touch</p>
                        <h2>Reach us directly.</h2>
                    </div>
                    <p className="enquiry-description">
                        Whether you have a question about our products, services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>

                    <div className="enquiry-contact-cards">
                        <a href={`mailto:${EMAIL_ADDRESS}`} className="enquiry-contact-card">
                            <div className="enquiry-contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="enquiry-contact-text">
                                <h3>Email Us</h3>
                                <span>{EMAIL_ADDRESS}</span>
                            </div>
                        </a>

                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="enquiry-contact-card">
                            <div className="enquiry-contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                            <div className="enquiry-contact-text">
                                <h3>WhatsApp</h3>
                                <span>Message us directly</span>
                            </div>
                        </a>
                    </div>
                </div>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                    <h2>Send a Message</h2>
                    <div className="enquiry-form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="enquiry-form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="enquiry-form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            required
                        />
                    </div>
                    <div className="enquiry-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="enquiry-submit">Send Message <span>↗</span></button>
                </form>
            </section>
        </main>
    );
};

export default EnquiryPage;
