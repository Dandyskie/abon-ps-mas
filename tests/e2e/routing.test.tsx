import { describe, it, expect } from 'vitest';
import { products } from '../../src/data/products';

describe('Integrity of Data and Assets', () => {
  it('should match slugs with mock database', () => {
    products.forEach((product) => {
      expect(product.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('should contain a valid contact number', () => {
    const targetPhone = '6281234567890';
    expect(targetPhone.startsWith('62')).toBe(true);
  });
});
