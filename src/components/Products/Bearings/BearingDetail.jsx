import React from "react";
import { useParams } from "react-router-dom";
import { bearingProducts } from "../../../bearingdata";
import ProductDetail from "../ProductDetail";

export default function BearingDetail() {
    const { id } = useParams();
    return <ProductDetail product={bearingProducts.find((item) => item.id === Number(id))} category="Bearings" basePath="/bearing" />;
}
