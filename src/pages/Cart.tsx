import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, MessageSquareCode, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalWeight } = useCartStore();

  const [form, setForm] = useState({
    nama: '',
    telepon: '',
    alamat: ''
  });

  const [error, setError] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.telepon || !form.alamat) {
      setError('Harap isi semua kolom formulir untuk melanjutkan pemesanan.');
      return;
    }

    // Build WhatsApp message content
    let message = `Halo PS MAS, saya ingin memesan Abon dengan detail berikut:\n\n`;
    message += `[ DAFTAR PESANAN ]\n`;
    items.forEach((item) => {
      message += `- ${item.productName} (${item.weight}) x ${item.quantity} - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
    });
    message += `------------------------------------------------\n`;
    message += `Total Belanja: Rp ${getTotalPrice().toLocaleString('id-ID')}\n`;
    message += `Total Estimasi Berat: ${getTotalWeight()} gram\n\n`;
    message += `[ DATA PENGIRIMAN ]\n`;
    message += `Nama Penerima : ${form.nama}\n`;
    message += `No. WhatsApp  : ${form.telepon}\n`;
    message += `Alamat Lengkap: ${form.alamat}\n\n`;
    message += `Mohon info total biaya beserta ongkos kirimnya ya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '6281234567890'; // Target WA Number PS MAS

    // Redirect to WhatsApp API
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, '_blank');
    
    // Clear cart after redirection
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="flex justify-center py-10 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 px-6 sm:px-8 space-y-6 bg-white rounded-[2.5rem] border border-border-warm shadow-sm max-w-lg w-full"
        >
          <div className="bg-background-warm w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-inner text-primary animate-pulse">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-text-charcoal font-heading">Keranjang Kosong</h2>
            <p className="text-text-muted text-xs sm:text-sm max-w-sm mx-auto leading-relaxed font-medium">
              Anda belum menambahkan produk. Jelajahi katalog abon lezat kami dan buat pesanan pertama Anda!
            </p>
          </div>
          <button
            onClick={() => navigate('/catalog')}
            className="bg-primary hover:bg-primary-hover text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl cursor-pointer active:scale-95 transition-all shadow-md inline-flex items-center gap-2"
          >
            Mulai Menjelajah Katalog
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 py-6 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Top back link and title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-warm/60 pb-6 text-left">
        <div>
          <button 
            onClick={() => navigate('/catalog')} 
            className="flex items-center gap-1.5 text-primary hover:text-primary-hover text-xs sm:text-sm font-extrabold cursor-pointer active:scale-95 transition-all mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Lanjutkan Belanja
          </button>
          <h1 className="text-3xl sm:text-4xl font-black text-text-charcoal font-heading leading-none">Keranjang Belanja</h1>
        </div>
        <span className="bg-primary/10 text-primary font-black text-xs px-4 py-2 rounded-xl border border-primary/20 cursor-default self-start sm:self-auto">
          {items.reduce((sum, item) => sum + item.quantity, 0)} Item Pilihan
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Cart list */}
        <div className="md:col-span-2 space-y-4 bg-white p-5 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm text-left">
          <h2 className="text-xl font-bold border-b border-border-warm pb-3 font-heading text-text-charcoal">Daftar Item Belanja</h2>
          
          <div className="divide-y divide-border-warm/60">
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.div 
                  key={item.variantId} 
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 overflow-hidden"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-grow min-w-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background-warm rounded-2xl flex items-center justify-center shrink-0 border border-border-warm shadow-inner">
                      <span className="text-text-muted text-[9px] sm:text-[10px] font-black uppercase">{item.weight}</span>
                    </div>
                    
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-sm sm:text-base text-text-charcoal truncate font-heading">{item.productName}</h4>
                      <p className="text-text-muted text-[11px] sm:text-xs font-semibold">Kemasan: {item.weight}</p>
                      <p className="text-primary font-black text-xs sm:text-sm mt-1">Rp {item.price.toLocaleString('id-ID')}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 border-t sm:border-t-0 border-border-warm/40 pt-3 sm:pt-0">
                    <div className="flex items-center gap-2 bg-background-warm p-1 rounded-xl border border-border-warm/60">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="w-8 h-8 bg-white rounded-lg font-black text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center cursor-pointer active:scale-90"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-black text-text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="w-8 h-8 bg-white rounded-lg font-black text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center cursor-pointer active:scale-90"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.variantId)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2.5 rounded-xl cursor-pointer transition-colors active:scale-90 shrink-0"
                      aria-label={`Hapus ${item.productName}`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Checkout Info Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-5 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm space-y-6 text-left"
        >
          <h2 className="text-xl font-bold border-b border-border-warm pb-3 font-heading text-text-charcoal">Form Penerima</h2>
          
          {error && <div className="text-red-600 text-xs font-bold bg-red-50 p-4 rounded-xl border border-red-200">{error}</div>}

          <form onSubmit={handleCheckout} className="space-y-4">
            <div>
              <label className="block text-[10px] sm:text-xs font-black text-text-charcoal uppercase tracking-wider mb-1.5">Nama Lengkap</label>
              <input
                type="text"
                required
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                placeholder="Contoh: Budi Santoso"
                className="w-full border border-border-warm bg-background-warm/40 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all font-semibold"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-black text-text-charcoal uppercase tracking-wider mb-1.5">Nomor WhatsApp Penerima</label>
              <input
                type="tel"
                required
                value={form.telepon}
                onChange={(e) => setForm({ ...form, telepon: e.target.value })}
                placeholder="Contoh: 08123456789"
                className="w-full border border-border-warm bg-background-warm/40 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all font-semibold"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-black text-text-charcoal uppercase tracking-wider mb-1.5">Alamat Pengiriman Lengkap</label>
              <textarea
                required
                rows={4}
                value={form.alamat}
                onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                placeholder="Contoh: Jl. Mawar No 12, RT 03 RW 04, Kec. Sukasari, Kota Bandung"
                className="w-full border border-border-warm bg-background-warm/40 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none shadow-inner transition-all font-semibold"
              />
            </div>

            <div className="border-t border-border-warm/60 pt-4 space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-text-muted font-semibold">Total Belanja:</span>
                <span className="font-black text-primary text-lg">Rp {getTotalPrice().toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-[11px] sm:text-xs text-text-muted">
                <span>Total Berat:</span>
                <span className="font-semibold">{getTotalWeight()} gram</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 sm:py-4 rounded-xl font-black flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-red-800/10 cursor-pointer transition-transform active:scale-[0.98] text-xs sm:text-sm uppercase tracking-wider"
            >
              <MessageSquareCode className="w-5 h-5" /> Pesan via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
