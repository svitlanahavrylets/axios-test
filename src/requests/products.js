import apiInstance from '../services/api';
export async function getProducts() {
  const result = await apiInstance.get('/products');
  return result.data;
}
