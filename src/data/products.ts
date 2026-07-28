import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Abon Sapi Original',
    slug: 'abon-sapi-original',
    category: 'sapi',
    description: 'Abon sapi original berkualitas tinggi yang diolah dari serat daging sapi segar murni pilihan dengan resep warisan khas PS MAS.',
    ingredients: ['Daging Sapi Segar', 'Bawang Merah', 'Bawang Putih', 'Garam', 'Rempah Pilihan'],
    image: '/assets/abon-sapi.png',
    gallery: ['/assets/abon-sapi.png'],
    variants: [
      { id: 'v1_1', weight: 'pouch 80g', price: 35000, stockStatus: 'tersedia', image: '/assets/abon-sapi/abon-sapi-original-ps-mas-80g.png' },
      { id: 'v1_2', weight: '100g', price: 45000, stockStatus: 'tersedia', image: '/assets/abon-sapi/abon-sapi-original-ps-mas-100g.png' },
      { id: 'v1_3', weight: 'toples 200g', price: 50000, stockStatus: 'tersedia', image: '/assets/abon-sapi/abon-sapi-original-ps-mas-200g.png' },
      { id: 'v1_4', weight: '250g', price: 60000, stockStatus: 'tersedia', image: '/assets/abon-sapi/abon-sapi-original-ps-mas-250g.png' },
    ],
    relatedProductIds: ['2', '3']
  },
  {
    id: '2',
    name: 'Abon Sapi Pedas',
    slug: 'abon-sapi-pedas',
    category: 'sapi',
    description: 'Abon sapi pedas lezat dengan perpaduan racikan cabai asli pilihan dan serat daging sapi murni bertekstur mantap.',
    ingredients: ['Daging Sapi Segar', 'Cabai Alami', 'Bawang Merah', 'Bawang Putih', 'Garam', 'Rempah'],
    image: '/assets/abon-sapi/abon-sapi-original-ps-mas-80g.png',
    gallery: ['/assets/abon-sapi/abon-sapi-original-ps-mas-80g.png'],
    variants: [
      { id: 'v2_1', weight: '100g', price: 37000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80' },
      { id: 'v2_2', weight: '250g', price: 85000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80' },
      { id: 'v2_3', weight: '1kg', price: 305000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&auto=format&fit=crop&q=80' },
      { id: 'v2_4', weight: '5kg', price: 1500000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=600&auto=format&fit=crop&q=80' },
      { id: 'v2_5', weight: 'pouch 80g', price: 31000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600&auto=format&fit=crop&q=80' },
      { id: 'v2_6', weight: 'toples 200g', price: 72000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1536680465769-2365207b035e?w=600&auto=format&fit=crop&q=80' }
    ],
    relatedProductIds: ['1', '4']
  },
  {
    id: '3',
    name: 'Abon Ayam Original',
    slug: 'abon-ayam-original',
    category: 'ayam',
    description: 'Abon ayam rasa original gurih manis dengan suwiran daging ayam pilihan yang lezat dan bertekstur lembut.',
    ingredients: ['Daging Ayam Pilihan', 'Bawang Merah', 'Bawang Putih', 'Gula', 'Garam', 'Rempah'],
    image: '/assets/abon-ayam/abon-ayam-original-ps-mas-80g.png',
    gallery: ['/assets/abon-ayam/abon-ayam-original-ps-mas-80g.png'],
    variants: [
      { id: 'v3_1', weight: 'pouch 80g', price: 28000, stockStatus: 'tersedia', image: '/assets/abon-ayam/abon-ayam-original-ps-mas-80g.png' },
      { id: 'v3_2', weight: '100g', price: 45000, stockStatus: 'tersedia', image: '/assets/abon-ayam/abon-ayam-original-ps-mas-100g.png' },
      { id: 'v3_3', weight: 'toples 140g', price: 65000, stockStatus: 'tersedia', image: '/assets/abon-ayam/abon-ayam-original-ps-mas-140g.png' },
      { id: 'v3_4', weight: '250g', price: 85000, stockStatus: 'tersedia', image: '/assets/abon-ayam/abon-ayam-original-ps-mas-250g.png' },
    ],
    relatedProductIds: ['4', '5']
  },
  {
    id: '4',
    name: 'Abon Ayam Pedas',
    slug: 'abon-ayam-pedas',
    category: 'ayam',
    description: 'Abon ayam dengan rasa pedas menggigit berpadu bumbu rempah pilihan yang diolah renyah dan gurih.',
    ingredients: ['Daging Ayam Pilihan', 'Cabai Alami', 'Bawang Merah', 'Bawang Putih', 'Garam', 'Rempah'],
    image: '/assets/abon-ayam/abon-ayam-original-ps-mas-80g.png',
    gallery: ['/assets/abon-ayam/abon-ayam-original-ps-mas-80g.png'],
    variants: [
      { id: 'v4_1', weight: '100g', price: 30000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=600&auto=format&fit=crop&q=80' },
      { id: 'v4_2', weight: '250g', price: 68000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80' },
      { id: 'v4_3', weight: '1kg', price: 245000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80' },
      { id: 'v4_4', weight: '5kg', price: 1180000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&auto=format&fit=crop&q=80' },
      { id: 'v4_5', weight: 'pouch 80g', price: 26000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600&auto=format&fit=crop&q=80' },
      { id: 'v4_6', weight: 'toples 140g', price: 48000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1536680465769-2365207b035e?w=600&auto=format&fit=crop&q=80' }
    ],
    relatedProductIds: ['3', '6']
  },
  {
    id: '5',
    name: 'Serundeng Original',
    slug: 'serundeng-original',
    category: 'serundeng',
    description: 'Serundeng kelapa parut tradisional dipadu bumbu rempah pilihan khas nusantara, beraroma harum dan gurih renyah.',
    ingredients: ['Kelapa Parut Pilihan', 'Bawang Merah', 'Bawang Putih', 'Gula', 'Ketumbar', 'Garam'],
    image: '/assets/serundeng/serundeng-ps-mas-100g.png',
    gallery: ['/assets/serundeng/serundeng-ps-mas-100g.png'],
    variants: [
      { id: 'v5_1', weight: '100g', price: 15000, stockStatus: 'tersedia', image: '/assets/serundeng/serundeng-ps-mas-100g.png' },
      { id: 'v5_2', weight: 'toples 220g', price: 34000, stockStatus: 'tersedia', image: '/assets/serundeng/serundeng-ps-mas-220g.png' },
      { id: 'v5_3', weight: '250g', price: 125000, stockStatus: 'tersedia', image: '/assets/serundeng/serundeng-ps-mas-250g.png' },
    ],
    relatedProductIds: ['6', '1']
  },
  {
    id: '6',
    name: 'Serundeng Kelapa Pedas',
    slug: 'serundeng-kelapa-pedas',
    category: 'serundeng',
    description: 'Serundeng kelapa parut garing bertabur bumbu pedas rempah istimewa yang menambah selera makan Anda.',
    ingredients: ['Kelapa Parut Pilihan', 'Cabai Rawit', 'Bawang Merah', 'Bawang Putih', 'Garam', 'Ketumbar'],
    image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600&auto=format&fit=crop&q=80',
    gallery: ['https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600&auto=format&fit=crop&q=80'],
    variants: [
      { id: 'v6_1', weight: '100g', price: 16000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600&auto=format&fit=crop&q=80' },
      { id: 'v6_2', weight: '250g', price: 36000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80' },
      { id: 'v6_3', weight: '1kg', price: 130000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80' },
      { id: 'v6_4', weight: '5kg', price: 610000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&auto=format&fit=crop&q=80' },
      { id: 'v6_5', weight: 'pouch 80g', price: 14000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=600&auto=format&fit=crop&q=80' },
      { id: 'v6_6', weight: 'toples 220g', price: 34000, stockStatus: 'tersedia', image: 'https://images.unsplash.com/photo-1536680465769-2365207b035e?w=600&auto=format&fit=crop&q=80' }
    ],
    relatedProductIds: ['5', '2']
  },
  {
    id: '7',
    name: 'Dendeng Sapi',
    slug: 'dendeng-sapi',
    category: 'lainnya',
    description: 'Olahan tipis daging sapi berkualitas premium yang dikeringkan dengan paduan bumbu manis gurih ketumbar tradisional.',
    ingredients: ['Daging Sapi Murni', 'Ketumbar', 'Gula Merah', 'Bawang Putih', 'Garam'],
    image: '/assets/otherproduct/dendeng-sapi-ps-mas-250g.png',
    gallery: ['/assets/otherproduct/dendeng-sapi-ps-mas-250g.png'],
    variants: [
      { id: 'v7_1', weight: '250g', price: 95000, stockStatus: 'tersedia', image: '/assets/otherproduct/dendeng-sapi-ps-mas-250g.png' }
    ],
    relatedProductIds: ['1', '8']
  },
  {
    id: '8',
    name: 'Klengkam Kentang',
    slug: 'klengkam-kentang',
    category: 'lainnya',
    description: 'Kentang mustofa/klengkam renyah berbalur bumbu caramel manis pedas wangi daun jeruk yang sangat gurih.',
    ingredients: ['Kentang Pilihan', 'Cabai', 'Bawang Merah', 'Gula Merah', 'Garam', 'Daun Jeruk'],
    image: '/assets/otherproduct/klengkam-ps-mas-100g.png',
    gallery: ['/assets/otherproduct/klengkam-ps-mas-100g.png'],
    variants: [
      { id: 'v8_1', weight: '100g', price: 22000, stockStatus: 'tersedia', image: '/assets/otherproduct/klengkam-ps-mas-100g.png' }
    ],
    relatedProductIds: ['3', '7']
  }
];
