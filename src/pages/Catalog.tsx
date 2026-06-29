import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Read category from URL search params, fallback to 'all'
  const selectedCategory = searchParams.get('category') || 'all';

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'sapi', name: 'Abon Sapi' },
    { id: 'ayam', name: 'Abon Ayam' },
    { id: 'serundeng', name: 'Serundeng' }
  ];

  const handleCategoryChange = (id: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (id === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', id);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-10 py-6 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-primary">Katalog Lengkap</span>
        <h1 className="text-4xl sm:text-5xl font-black text-text-charcoal font-heading leading-tight">Pilihan Rasa Terbaik</h1>
        <p className="text-text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
          Temukan varian Abon Sapi, Abon Ayam, dan Serundeng Kelapa PS MAS berkualitas premium untuk sajian hidangan istimewa.
        </p>
      </div>
      
      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-border-warm shadow-sm">
        <div className="relative w-full lg:max-w-md">
          <input
            type="text"
            placeholder="Cari abon pilihan Anda..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background-warm/50 border border-border-warm px-11 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-xs sm:text-sm font-semibold shadow-inner"
          />
          <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-text-muted" />
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full lg:w-auto justify-start sm:justify-end">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-[10px] sm:text-xs font-black transition-all cursor-pointer active:scale-95 shadow-sm uppercase tracking-wider ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-md shadow-red-800/10'
                  : 'bg-background-warm text-text-charcoal hover:bg-yellow-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-5 border border-border-warm shadow-sm flex flex-col transition-all relative group overflow-hidden"
              >
                {/* Floating Tag */}
                <span className="absolute top-4 left-4 bg-accent text-primary font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded z-20 shadow-sm">
                  {product.category}
                </span>

                {/* Aspect ratio picture */}
                <div className="aspect-square bg-background-warm rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative border border-border-warm/40">
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <span className="text-text-muted text-xs font-semibold z-0">{product.name} Preview</span>
                </div>

                <h3 className="font-bold text-lg text-text-charcoal mb-1 font-heading group-hover:text-primary transition-colors text-left">
                  {product.name}
                </h3>
                <p className="text-text-muted text-xs mb-4 flex-grow leading-relaxed text-left font-medium">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-auto border-t border-border-warm/60 pt-4">
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block font-extrabold">Harga mulai</span>
                    <span className="text-primary font-black text-base sm:text-lg">
                      Rp {product.variants[0].price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <Link
                    to={`/catalog/${product.slug}`}
                    className="bg-accent hover:bg-yellow-500 text-primary font-extrabold text-xs px-4.5 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm"
                  >
                    Detail
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-text-muted py-20 font-bold text-sm bg-white rounded-3xl border border-border-warm"
            >
              Produk tidak ditemukan. Silakan gunakan kata kunci pencarian lainnya.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
