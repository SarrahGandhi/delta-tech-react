import React from "react";
import { hydraulicsProducts } from "../../../bearingdata";
import ProductCatalog from "../ProductCatalog";

export default function Hydraulics() {
    return <ProductCatalog
        category="Hydraulics"
        eyebrow="Fluid power"
        description="Reliable hydraulic components for controlled motion, efficient power delivery, and demanding industrial operating environments."
        products={hydraulicsProducts}
        basePath="/hydraulics"
    />;
}
