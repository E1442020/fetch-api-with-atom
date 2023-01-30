import { ReactNode, useEffect, useState } from "react";
import { productAtom } from "../atom/atom";
import ProductItem from "./ProductItem";
import "./products.css";


export default function Products() {
  const [products, setProducts] = productAtom.useState();
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>{ setProducts(data);
                       setLoading(false)}
        );
  }, []);
  

  return (
    <>
      <div className="products-container">
        {loading? <h3>loading...</h3>:<>
        {products.map((product, index): ReactNode => {
          return (
            <>
              <ProductItem
                img={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                key={product.id}
                index={index}
              />
            </>
          );
        })}</>}
      </div>
    </>
  );
}
