import apiInstance from '../services/api';
export async function getProducts() {
  const result = await apiInstance.get('/products');
  return result.data;
}
export async function getProductById(id) {
  const product = await apiInstance.get(`/products/${id}`);
  return product.data;
}

export async function deleteProduct(id) {
  const product = await apiInstance.delete(`/products/${id}`);
  return product.data;
}
