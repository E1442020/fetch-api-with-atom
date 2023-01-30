import { atom } from "@mongez/react-atom";
type Provider =[{
    title:string,
    price:number,
    description:string,
    image:string,
    id: null | undefined 
   }]
export const productAtom= atom<Provider>({
  key: "product",
  default: [{
    title:'',
    price:0,
    image:'',
    description:'',
    id:null
  }],
});

