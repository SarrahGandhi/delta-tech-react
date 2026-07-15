import React from "react";
import { bearingProducts } from "../../../bearingdata";
import ProductCatalog from "../ProductCatalog";

export default function Bearings() {
    return <ProductCatalog
        category="Bearings"
        eyebrow="Precision rotation"
        description="High-accuracy bearing solutions engineered for speed, rigidity, harsh environments, and dependable service in critical industrial applications."
        products={bearingProducts}
        basePath="/bearing"
    />;
}
