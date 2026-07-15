import React from "react";
import { linearAutomationProducts } from "../../../bearingdata";
import ProductCatalog from "../ProductCatalog";

export default function LinearAutomations() {
    return <ProductCatalog
        category="Linear Automation"
        eyebrow="Controlled motion"
        description="Precision linear motion components built for repeatable positioning, smooth travel, and efficient power transfer in automated equipment."
        products={linearAutomationProducts}
        basePath="/linear-automation"
    />;
}
