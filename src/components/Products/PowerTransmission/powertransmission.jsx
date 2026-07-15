import React from "react";
import { powerTransmissionProducts } from "../../../bearingdata";
import ProductCatalog from "../ProductCatalog";

export default function PowerTransmission() {
    return <ProductCatalog
        category="Power Transmission"
        eyebrow="Reliable drive systems"
        description="Robust mechanical components that transfer torque, support rotating assemblies, and keep industrial equipment moving under load."
        products={powerTransmissionProducts}
        basePath="/power-transmission"
    />;
}
