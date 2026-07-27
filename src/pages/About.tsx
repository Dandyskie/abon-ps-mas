import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart, Instagram, ShoppingBag } from 'lucide-react';

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
        <h1 className="text-4xl sm:text-5xl font-black text-text-charcoal font-heading leading-tight">Warisan Rasa <br />PS MAS</h1>
        <p className="text-text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
          Mengenal lebih dekat perjalanan rasa abon premium khas keluarga Nusantara.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Story */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm space-y-4">
          <h2 className="text-2xl font-bold font-heading text-text-charcoal border-b border-border-warm/60 pb-2">Kisah Kami</h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium text-justify">
            Abon Sapi PS MAS berdiri sejak tahun 1993, Bergerak di bidang pengolahan daging, PS MAS berdedikasi mendalam untuk menyajikan olahan makanan tradisional berkualitas premium untuk seluruh keluarga Nusantara.
            Setiap racikan diproses dengan cermat dan higienis, <b>"MEMPERTAHANKAN CITA RASA LINTAS GENERASI"</b> agar menghadirkan kehangatan disetiap suapannya.
          </p>
          {/* <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium text-justify">
            Setiap racikan diproses dengan cermat secara higienis, mempertahankan cita rasa khas leluhur agar setiap suapan menghadirkan kehangatan cita rasa makan siang tradisional di meja makan Anda.
          </p> */}

          <div className="pt-4 border-t border-border-warm/60 space-y-3">
            <h3 className="font-bold text-xs sm:text-sm text-text-charcoal font-heading">Ikuti Media Sosial Kami</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2 text-text-muted">
                <ShoppingBag className="w-4 h-4 text-primary shrink-0" />
                <span>Shopee: <a href="https://shopee.co.id/hammamabdurrasyid" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover hover:underline font-extrabold">@hammamabdurrasyid</a></span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <span>Instagram: <a href="https://instagram.com/psmas.official" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover hover:underline font-extrabold">@psmas.official</a></span>
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
              Visi yang diterapkan oleh Abon sapi merk PS Mas adalah menjadi salah satu perusahaan terbaik di industri makanan berupa abon dengan kualitas produk yang tinggi dan aman untuk dikonsumsi oleh masyarakat.
            </p>
          </div>

          <div className="space-y-3 border-t border-border-warm/60 pt-4">
            <h2 className="text-xl font-bold font-heading text-text-charcoal flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary shrink-0" /> Misi Kami
            </h2>
            <p className="text-text-muted text-xs leading-relaxed font-medium">
              Sedangkan untuk misinya adalah memuaskan konsumen dengan cara:
            </p>
            <ul className="space-y-2 text-xs text-text-muted font-medium">
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Menjaga standar kualitas makanan yang diproduksi (abon sapi) dengan menggunakan mesin yang dapat menghasilkan abon sapi yang baik.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Melaksanakan sistem pengolahan untuk kualitas dan keamanan produk yang diproduksi.</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Mengembangkan kapasitas untuk memenuhi permintaan konsumen.</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Mengutamakan pengembangan bisnis untuk menciptakan daya saing dalam industri pangan.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
