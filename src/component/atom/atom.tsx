import { atom } from "@mongez/react-atom";
type Product =[{
    title:string,
    price:number,
    description:string,
    image:string,
    id: null | undefined 
   }]
export const productAtom= atom<Product>({
  key: "product",
  default: [{
    title:'',
    price:0,
    image:'',
    description:'',
    id:null
  }],
});

