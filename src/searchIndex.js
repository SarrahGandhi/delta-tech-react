import { bearingProducts, linearAutomationProducts, powerTransmissionProducts, accessoriesProducts, hydraulicsProducts } from "./bearingdata.js";

export const searchIndex = [
    // Static Pages
    {
        title: "About Us",
        path: "/aboutus",
        content: "Delta Technologies is a trusted supplier of high-quality bearings and precision motion components. Specialists in precision spindles, bearings, ball screws, rotary tables, and comprehensive reconditioning services with 25 years of experience. We serve diverse industrial sectors with reliable and performance-driven solutions across manufacturing, automation, and heavy industry. Our locations include a manufacturing unit in Bangalore, Karnataka, and a facility in Hyderabad, Telangana."
    },
    {
        title: "Services",
        path: "/services",
        content: "We provide precision repair and reconditioning services for spindles, ball screws, rotary tables, and bearings. Our core services include Product Selection & Technical Consultation, Custom Solutions, Bearing Maintenance & Repair, and hose assembly and fluid-transfer support. Hose services include material selection, fitting and adapter matching, crimping support, and replacement guidance. Technical services include Lubrication Management, Training Services, and Condition Monitoring for predictive maintenance."
    },
    {
        title: "Home",
        path: "/",
        content: "Welcome to Delta Technologies. We are industry leaders in providing premium precision bearings, linear automation, and power transmission solutions. Explore our comprehensive product catalog or contact our experts for technical support."
    },
    {
        title: "Products",
        path: "/products",
        content: "Browse our extensive catalog of industrial solutions including Hydraulics, Linear Automation components, Power Transmission units, Bearings, and Accessories. We carry brands like SKF, TIMKEN, INA (Schaeffler Group), NSK, NACHI, and ROLLWAY."
    },
    {
        title: "Enquiry",
        path: "/enquiry",
        content: "Contact us for enquiries, technical support, or project consultations. Reach our Bangalore manufacturing unit at +91-9538613013, deltatech@outlook.com, or quickresponse@delta-tech.co.in. Reach our Hyderabad facility at +91-9494637013 or quickresponse@overseasbearing.com."
    },

    // Hydraulics
    ...hydraulicsProducts.map(p => ({
        title: p.productName,
        path: `/hydraulics/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Linear Automation
    ...linearAutomationProducts.map(p => ({
        title: p.productName,
        path: `/linear-automation/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Power Transmission
    ...powerTransmissionProducts.map(p => ({
        title: p.productName,
        path: `/power-transmission/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Bearings
    ...bearingProducts.map(p => ({
        title: p.productName,
        path: `/bearing/${p.id}`,
        content: `${p.description} Key features include: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Accessories
    ...accessoriesProducts.map(p => ({
        title: p.productName,
        path: `/accessories/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    }))
];
