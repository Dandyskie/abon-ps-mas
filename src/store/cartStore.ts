import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  variantId: string;
  weight: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getTotalWeight: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToCart: (newItem, quantity) => {
        const items = get().items;
        const existingItem = items.find(item => item.variantId === newItem.variantId);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.variantId === newItem.variantId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...newItem, quantity }] });
        }
      },
      
      removeFromCart: (variantId) => {
        set({ items: get().items.filter(item => item.variantId !== variantId) });
      },
      
      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(variantId);
          return;
        }
        set({
          items: get().items.map(item =>
            item.variantId === variantId ? { ...item, quantity } : item
          ),
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      
      getTotalWeight: () => {
        return get().items.reduce((sum, item) => {
          const weightNum = parseInt(item.weight) || 0;
          const isKg = item.weight.toLowerCase().includes('kg');
          const multiplier = isKg ? 1000 : 1;
          return sum + (weightNum * multiplier * item.quantity);
        }, 0);
      }
    }),
    {
      name: 'ps-mas-cart-storage',
    }
  )
);
