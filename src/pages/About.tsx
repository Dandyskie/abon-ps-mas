import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart } from 'lucide-react';

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
            PS MAS lahir dari dedikasi mendalam untuk menyajikan olahan makanan tradisional Indonesia berkualitas. Kami memulai langkah kami dengan fokus memproduksi produk Abon berkualitas premium untuk seluruh keluarga Nusantara.
          </p>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium text-justify">
            Setiap racikan diproses dengan cermat secara higienis, mempertahankan cita rasa khas leluhur agar setiap suapan menghadirkan kehangatan cita rasa makan siang tradisional di meja makan Anda.
          </p>
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
