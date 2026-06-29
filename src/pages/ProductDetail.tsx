import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, Leaf, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-border-warm max-w-md mx-auto my-8 p-6 shadow-sm">
        <h2 className="text-2xl font-black text-primary font-heading">Produk Tidak Ditemukan</h2>
        <p className="text-text-muted text-xs mt-2 mb-6">Maaf, abon yang Anda cari tidak tersedia dalam database kami.</p>
        <button 
          onClick={() => navigate('/catalog')} 
          className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      variantId: selectedVariant.id,
      weight: selectedVariant.weight,
      price: selectedVariant.price,
    }, quantity);
    navigate('/cart');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 py-6 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-1.5 text-primary hover:text-primary-hover text-sm font-extrabold cursor-pointer active:scale-95 transition-all self-start"
      >
        <ChevronLeft className="w-5 h-5" /> Kembali
      </button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-white p-5 sm:p-8 md:p-10 rounded-[2.5rem] border border-border-warm shadow-sm items-start">
        {/* Gallery image */}
        <div className="space-y-4 w-full">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="aspect-square bg-background-warm rounded-3xl flex items-center justify-center overflow-hidden shadow-inner relative border border-border-warm"
          >
            <span className="text-text-muted text-xs font-semibold">{product.name} Preview</span>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square bg-background-warm/60 rounded-2xl border border-border-warm flex items-center justify-center text-[9px] sm:text-[10px] text-text-muted font-black uppercase text-center p-1">Tampak Depan</div>
            <div className="aspect-square bg-background-warm/60 rounded-2xl border border-border-warm flex items-center justify-center text-[9px] sm:text-[10px] text-text-muted font-black uppercase text-center p-1">Tampak Belakang</div>
            <div className="aspect-square bg-background-warm/60 rounded-2xl border border-border-warm flex items-center justify-center text-[9px] sm:text-[10px] text-text-muted font-black uppercase text-center p-1">Tekstur Abon</div>
          </div>
        </div>

        {/* Info Details */}
        <div className="space-y-6 w-full text-left">
          <div className="space-y-4">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-black tracking-wider">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-text-charcoal mt-3 font-heading leading-tight">{product.name}</h1>
            </div>

            <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium">{product.description}</p>

            {/* Product Qualities */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold text-text-charcoal bg-background-warm/60 p-3 rounded-xl border border-border-warm/60">
                <Leaf className="w-4 h-4 text-green-600 shrink-0" /> 100% Bahan Alami
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold text-text-charcoal bg-background-warm/60 p-3 rounded-xl border border-border-warm/60">
                <Sparkles className="w-4 h-4 text-accent shrink-0" /> Resep Tradisional
              </div>
            </div>

            <div className="border-t border-border-warm/60 pt-4">
              <h4 className="font-black text-xs sm:text-sm text-text-charcoal mb-2 uppercase tracking-wider font-heading">Komposisi Bahan</h4>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing, idx) => (
                  <span 
                    key={idx} 
                    className="bg-background-warm/80 text-text-charcoal text-[10px] sm:text-xs px-3 py-1.5 rounded-xl border border-border-warm font-bold"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border-warm/60 pt-4">
              <h4 className="font-black text-xs sm:text-sm text-text-charcoal mb-2 uppercase tracking-wider font-heading">Pilih Ukuran Kemasan</h4>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 sm:px-5 py-2.5 sm:py-3 border-2 rounded-2xl font-black text-[10px] sm:text-xs cursor-pointer transition-all active:scale-95 uppercase tracking-wider ${
                      selectedVariant.id === v.id
                        ? 'border-primary bg-primary text-white shadow-md shadow-red-800/10'
                        : 'border-border-warm bg-background-warm text-text-charcoal hover:border-yellow-500'
                    }`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border-warm/60">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted block font-extrabold">Total Harga</span>
                <div className="text-3xl font-black text-primary leading-tight">
                  Rp {(selectedVariant.price * quantity).toLocaleString('id-ID')}
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-background-warm p-1.5 rounded-2xl border border-border-warm shadow-inner self-start sm:self-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-white rounded-xl font-black text-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer active:scale-90"
                >
                  -
                </button>
                <span className="w-8 text-center font-black text-sm text-text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-white rounded-xl font-black text-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer active:scale-90"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-red-800/10 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
            >
              <ShoppingBag className="w-5 h-5" /> Masukkan Keranjang Belanja
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
