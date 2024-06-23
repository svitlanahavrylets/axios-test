import { refs } from './refs';
import { getProductById } from '../requests/products';
import { createMarkupProduct } from '../services/markupService';
export async function onSingleProductSubmit(e) {
  try {
    e.preventDefault();
    const id = e.currentTarget.elements.id.value.trim();
    const product = await getProductById(id);
    const markup = createMarkupProduct(product);
    refs.divSingleProduct.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}
