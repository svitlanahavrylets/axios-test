import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { createProductsMarkup } from './services/markupService';
import { refs } from './js/refs';

async function renderProducts() {
  const data = await getProducts();
  const markup = createProductsMarkup(data.products);
  refs.allProducts.innerHTML = markup;
}
renderProducts();
