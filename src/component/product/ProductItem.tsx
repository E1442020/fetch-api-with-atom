import { productAtom } from "../atom/atom";
import "./products.css";
interface product {
  img: string;
  title: string;
  price: number;
  description: string;
  index:number
}
export default function ProductItem(props: product) {
  return (
    <>
      <div className="product-item-container">
        <div className="product-item-img">
          <img src={props.img} alt="image" />
        </div>
        <div className="product-item-title">
          <h3>{props.title}</h3>
          <p>${props.price}</p>
        </div>
        <div className="product-item-description">
          <p>{props.description}</p>
        </div>
        <button onClick={() => productAtom.removeItem(props.index)}>Remove</button>
      </div>
    </>
  );
}
