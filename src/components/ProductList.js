import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return <h4> Sorry no products</h4>;
  }
 
    if (grid_view) {
      return <GridView products={products} />;
    } else {
      return <ListView products={products} />;
  
  }
};

export default ProductList;
