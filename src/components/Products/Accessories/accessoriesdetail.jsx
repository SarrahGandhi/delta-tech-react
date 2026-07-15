import React from "react";
import { useParams } from "react-router-dom";
import { accessoriesProducts } from "../../../bearingdata";
import ProductDetail from "../ProductDetail";

export default function AccessoriesDetail() {
    const { id } = useParams();
    return <ProductDetail product={accessoriesProducts.find((item) => item.id === Number(id))} category="Accessories" basePath="/accessories" />;
}
