const fetchProduct = require('../async');

describe('async', () => {
  describe('async - await', () => {
    it('resolve', async () => {
      const product = await fetchProduct();
      expect(product).toEqual({ item: 'AirPods Pro', price: 230 });
    });
    it('reject', async () => {
      try {
        await fetchProduct('error');
      } catch (e) {
        expect(e).toBe('network error');
      }
    });
  });
  describe('Promise', () => {
    it('resolve', () => {
      return fetchProduct().then((data) => {
        expect(data).toEqual({ item: 'AirPods Pro', price: 230 });
      });
    });
    it('reject', () => {
      return fetchProduct('error').catch((data) => {
        expect(data).toBe('network error');
      });
    });
  });
});
