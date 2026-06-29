import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Abon Sapi Original Premium',
    slug: 'abon-sapi-original-premium',
    category: 'sapi',
    description: 'Abon sapi original berkualitas tinggi diolah dari daging sapi pilihan dengan resep warisan Nusantara.',
    ingredients: ['Daging Sapi Segar', 'Bawang Merah', 'Bawang Putih', 'Gula', 'Garam', 'Rempah-rempah'],
    image: '/images/products/abon-sapi-ori.jpg',
    gallery: ['/images/products/abon-sapi-ori.jpg', '/images/products/abon-sapi-detail.jpg'],
    variants: [
      { id: 'v1_1', weight: '100g', price: 35000, stockStatus: 'tersedia' },
      { id: 'v1_2', weight: '250g', price: 80000, stockStatus: 'tersedia' },
      { id: 'v1_3', weight: '500g', price: 155000, stockStatus: 'menipis' }
    ],
    relatedProductIds: ['2', '3']
  },
  {
    id: '2',
    name: 'Abon Sapi Pedas Gurih',
    slug: 'abon-sapi-pedas-gurih',
    category: 'sapi',
    description: 'Abon sapi pedas nikmat dipadukan dengan rempah-rempah alami pilihan untuk pecinta cita rasa pedas.',
    ingredients: ['Daging Sapi Segar', 'Cabai Segar', 'Bawang Merah', 'Bawang Putih', 'Garam', 'Rempah-rempah'],
    image: '/images/products/abon-sapi-pedas.jpg',
    gallery: ['/images/products/abon-sapi-pedas.jpg'],
    variants: [
      { id: 'v2_1', weight: '100g', price: 37000, stockStatus: 'tersedia' },
      { id: 'v2_2', weight: '250g', price: 85000, stockStatus: 'tersedia' }
    ],
    relatedProductIds: ['1', '3']
  },
  {
    id: '3',
    name: 'Abon Ayam Spesial',
    slug: 'abon-ayam-spesial',
    category: 'ayam',
    description: 'Abon ayam dengan tekstur lembut, rasa manis gurih yang pas, cocok untuk lauk makan si kecil.',
    ingredients: ['Daging Ayam Segar', 'Bawang Merah', 'Bawang Putih', 'Gula', 'Garam', 'Rempah'],
    image: '/images/products/abon-ayam.jpg',
    gallery: ['/images/products/abon-ayam.jpg'],
    variants: [
      { id: 'v3_1', weight: '100g', price: 28000, stockStatus: 'tersedia' },
      { id: 'v3_2', weight: '250g', price: 65000, stockStatus: 'tersedia' }
    ],
    relatedProductIds: ['1', '4']
  },
  {
    id: '4',
    name: 'Serundeng Kelapa Manis',
    slug: 'serundeng-kelapa-manis',
    category: 'serundeng',
    description: 'Serundeng kelapa parut tradisional dipadu bumbu rempah pilihan, beraroma harum dan renyah.',
    ingredients: ['Kelapa Parut', 'Bawang Merah', 'Bawang Putih', 'Ketumbar', 'Gula Merah', 'Garam'],
    image: '/images/products/serundeng-manis.jpg',
    gallery: ['/images/products/serundeng-manis.jpg'],
    variants: [
      { id: 'v4_1', weight: '200g', price: 18000, stockStatus: 'tersedia' }
    ],
    relatedProductIds: ['3']
  }
];
