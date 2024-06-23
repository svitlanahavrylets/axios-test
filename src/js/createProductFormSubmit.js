import { addNewProduct } from "../requests/products"
import{createMarkupProduct} from "../services/markupService"
import { refs } from "./refs"

export async function createProductFormSubmit(e){

try {
e.preventDefault()
  const data={}

  new FormData(e.currentTarget).forEach((value,key)=>{
    data[key]=value
  })

const newProduct=await addNewProduct(data)
const markup=createMarkupProduct(newProduct)
refs.newProductDiv.innerHTML=markup
refs.newProductForm.reset()
} catch (error) {
console.log(error)
}

}
