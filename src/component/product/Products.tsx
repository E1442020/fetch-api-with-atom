import { ReactNode, useEffect } from "react";
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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  // const removeItem = (itemIndex: number) => {
  //   productAtom.removeItem(itemIndex);
  // };

  return (
    <>
      <div className="products-container">
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
