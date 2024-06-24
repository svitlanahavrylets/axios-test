import { deleteProduct } from '../requests/products';

export async function deleteProductById(e) {
  try {
    e.preventDefault();
    const id = e.currentTarget.elements.deletionId.value.trim();
    const product = await deleteProduct(id);
    alert(`SUCCESS! delete product with name ${product.title}`);
  } catch (error) {
    alert(`ERROR ${error}`);
  }
}
