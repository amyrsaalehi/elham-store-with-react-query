export const PRODUCT_ENDPOINTS = {
  getProducts: () => '/products',
  getProduct: (id) => `/products/${id}`, // -> '/products/'+id;
  createProduct: () => '/products',
  updateProduct: (id) => `/products/${id}`,
  deleteProduct: (id) => `/products/${id}`,
}
