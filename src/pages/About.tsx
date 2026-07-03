import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart, Instagram } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-8 py-6 px-4 sm:px-6 text-left"
    >
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-primary">Tentang Kami</span>
        <h1 className="text-4xl sm:text-5xl font-black text-text-charcoal font-heading leading-tight">Warisan Rasa PS MAS</h1>
        <p className="text-text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
          Mengenal lebih dekat perjalanan rasa abon premium khas keluarga Nusantara.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Story */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm space-y-4">
          <h2 className="text-2xl font-bold font-heading text-text-charcoal border-b border-border-warm/60 pb-2">Kisah Kami</h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium text-justify">
            PS MAS lahir dari dedikasi mendalam untuk menyajikan olahan makanan tradisional Indonesia berkualitas. Kami memulai langkah kami dengan focus memproduksi produk Abon berkualitas premium untuk seluruh keluarga Nusantara.
          </p>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium text-justify">
            Setiap racikan diproses dengan cermat secara higienis, mempertahankan cita rasa khas leluhur agar setiap suapan menghadirkan kehangatan cita rasa makan siang tradisional di meja makan Anda.
          </p>
          
          <div className="pt-4 border-t border-border-warm/60 space-y-3">
            <h3 className="font-bold text-xs sm:text-sm text-text-charcoal font-heading">Ikuti Media Sosial Kami</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.83.95 2.01 1.63 3.28 1.88.01 1.25.01 2.5 0 3.75-.92-.09-1.84-.4-2.65-.89-.96-.58-1.74-1.4-2.28-2.38-.03 2.76-.01 5.52-.02 8.28-.08 1.63-.58 3.26-1.57 4.54-1.28 1.65-3.32 2.66-5.4 2.68-2.64.09-5.18-1.39-6.38-3.73-1.42-2.58-1.07-5.99.88-8.2 1.49-1.74 3.86-2.58 6.13-2.14V8.13c-1.12-.22-2.32.06-3.21.78-.96.73-1.48 1.94-1.38 3.16.07 1.12.72 2.16 1.7 2.72.93.55 2.07.6 3.04.14.78-.34 1.39-.99 1.68-1.78.29-.7.31-1.48.3-2.23V.02z" />
                </svg>
                <span>Tiktok: <a href="https://tiktok.com/@abonpsmas" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover hover:underline font-extrabold">@abonpsmas</a></span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <span>Instagram: <a href="https://instagram.com/abonpsmas" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover hover:underline font-extrabold">@abonpsmas</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="md:col-span-5 bg-white p-6 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold font-heading text-text-charcoal flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" /> Visi Kami
            </h2>
            <p className="text-text-muted text-xs leading-relaxed font-medium">
              Menjadi pilihan utama produk abon olahan khas Nusantara yang lezat, bernutrisi tinggi, dan bersertifikasi aman untuk dinikmati oleh berbagai kalangan masyarakat secara instan.
            </p>
          </div>

          <div className="space-y-3 border-t border-border-warm/60 pt-4">
            <h2 className="text-xl font-bold font-heading text-text-charcoal flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary shrink-0" /> Misi Kami
            </h2>
            <ul className="space-y-2 text-xs text-text-muted font-medium">
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> 
                <span>Menjamin kualitas bahan baku murni daging segar tanpa lemak.</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Menggunakan bumbu rempah alami asli tanpa pewarna atau pengawet buatan.</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Memastikan kebersihan dan higienitas sanitasi tempat kerja produksi.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
