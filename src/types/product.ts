export type ProductCategory = 'sapi' | 'ayam' | 'serundeng' | 'lainnya';

export interface ProductVariant {
  id: string;
  weight: string;
  price: number;
  stockStatus: 'tersedia' | 'menipis' | 'habis';
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  ingredients: string[];
  image: string;
  gallery: string[];
  variants: ProductVariant[];
  relatedProductIds: string[];
}
