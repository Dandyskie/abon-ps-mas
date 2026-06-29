import { describe, it, expect } from 'vitest';
import { products } from '../../src/data/products';

describe('Product Data Constraints', () => {
  it('should have unique product IDs', () => {
    const ids = products.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have unique slugs', () => {
    const slugs = products.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('should have at least one variant per product', () => {
    products.forEach(product => {
      expect(product.variants.length).toBeGreaterThan(0);
      product.variants.forEach(variant => {
        expect(variant.price).toBeGreaterThan(0);
        expect(variant.weight).toBeTruthy();
      });
    });
  });
});
