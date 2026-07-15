import React from "react";
import { useParams } from "react-router-dom";
import { linearAutomationProducts } from "../../../bearingdata";
import ProductDetail from "../ProductDetail";

export default function LinearAutomationDetail() {
    const { id } = useParams();
    return <ProductDetail product={linearAutomationProducts.find((item) => item.id === Number(id))} category="Linear Automation" basePath="/linear-automation" />;
}
