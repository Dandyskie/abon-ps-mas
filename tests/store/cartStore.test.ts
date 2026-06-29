import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from '../../src/store/cartStore';

describe('Zustand Cart Store', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('should add products to cart', () => {
    const store = useCartStore.getState();
    store.addToCart({
      productId: '1',
      productName: 'Abon Sapi Original',
      productImage: '/test.jpg',
      variantId: 'v1_1',
      weight: '100g',
      price: 35000
    }, 2);

    const items = useCartStore.getState().items;
    expect(items.length).toBe(1);
    expect(items[0].quantity).toBe(2);
    expect(useCartStore.getState().getTotalPrice()).toBe(70000);
  });

  it('should correctly calculate total weight in grams', () => {
    const store = useCartStore.getState();
    store.addToCart({
      productId: '1',
      productName: 'Abon Sapi',
      productImage: '/test.jpg',
      variantId: 'v1_1',
      weight: '250g',
      price: 80000
    }, 2); // 500g

    store.addToCart({
      productId: '2',
      productName: 'Serundeng',
      productImage: '/test2.jpg',
      variantId: 'v2_1',
      weight: '1kg',
      price: 50000
    }, 1); // 1000g

    expect(useCartStore.getState().getTotalWeight()).toBe(1500); // 1500g
  });

  it('should update item quantities', () => {
    const store = useCartStore.getState();
    store.addToCart({
      productId: '1',
      productName: 'Abon Sapi',
      productImage: '/test.jpg',
      variantId: 'v1_1',
      weight: '100g',
      price: 35000
    }, 1);

    store.updateQuantity('v1_1', 3);
    expect(useCartStore.getState().items[0].quantity).toBe(3);

    store.updateQuantity('v1_1', 0);
    expect(useCartStore.getState().items.length).toBe(0);
  });
});
