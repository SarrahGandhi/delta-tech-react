import React from "react";
import { useParams } from "react-router-dom";
import { hydraulicsProducts } from "../../../bearingdata";
import ProductDetail from "../ProductDetail";

export default function HydraulicsDetail() {
    const { id } = useParams();
    return <ProductDetail product={hydraulicsProducts.find((item) => item.id === Number(id))} category="Hydraulics" basePath="/hydraulics" />;
}
