import { ReactNode, useEffect, useState } from "react";
import { productAtom } from "../atom/atom";
import ProductItem from "./ProductItem";
import "./products.css";

// interface Provider {
//  title:string,
//  price:number,
//  description:string,
//  image:string,
//  id: Key | null | undefined
// }
export default function Products() {
  // const [products,setProducts]=useState<Provider[]>([])
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
  // console.log(products);

  // const removeItem = (itemIndex: number) => {
  //   productAtom.removeItem(itemIndex);
  // };

  return (
    <>
      <div className="products-container">
        {loading&& <h3>loading...</h3>}
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
        })}
      </div>
    </>
  );
}
