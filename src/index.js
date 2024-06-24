import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { createProductsMarkup } from './services/markupService';
import { refs } from './js/refs';
import { onSingleProductSubmit } from './js/onSingleProductSubmit';
import { deleteProductById } from './js/deleteProductById';

async function renderProducts() {
  try {
    const data = await getProducts();
    const markup = createProductsMarkup(data.products);
    refs.allProducts.innerHTML = markup;
  } catch (error) {
    // console.log(error);
  }
}
// renderProducts();

refs.formSingleProductForm.addEventListener('submit', onSingleProductSubmit);

refs.deletionProductFormElem.addEventListener('submit', deleteProductById);
