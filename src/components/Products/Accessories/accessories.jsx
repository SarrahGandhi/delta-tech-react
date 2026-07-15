import React from "react";
import { accessoriesProducts } from "../../../bearingdata";
import ProductCatalog from "../ProductCatalog";

export default function Accessories() {
    return <ProductCatalog
        category="Accessories"
        eyebrow="Installation essentials"
        description="Purpose-built supporting components for accurate mounting, secure retention, alignment, and long-term equipment reliability."
        products={accessoriesProducts}
        basePath="/accessories"
    />;
}
