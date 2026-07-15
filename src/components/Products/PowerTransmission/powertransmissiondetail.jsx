import React from "react";
import { useParams } from "react-router-dom";
import { powerTransmissionProducts } from "../../../bearingdata";
import ProductDetail from "../ProductDetail";

export default function PowerTransmissionDetail() {
    const { id } = useParams();
    return <ProductDetail product={powerTransmissionProducts.find((item) => item.id === Number(id))} category="Power Transmission" basePath="/power-transmission" />;
}
