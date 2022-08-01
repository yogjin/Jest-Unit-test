function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network error');
  }
  return Promise.resolve({ item: 'AirPods Pro', price: 230 });
}

module.exports = fetchProduct;
