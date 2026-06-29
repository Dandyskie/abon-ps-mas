import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-8 py-6 px-4 sm:px-6 text-left"
    >
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-primary">Hubungi Kami</span>
        <h1 className="text-4xl sm:text-5xl font-black text-text-charcoal font-heading leading-tight">Hubungi PS MAS</h1>
        <p className="text-text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
          Kami siap membantu pesanan Anda. Silakan hubungi kami melalui kontak resmi di bawah ini.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05, duration: 0.25 }}
          className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm space-y-6 flex flex-col justify-between"
        >
          <h2 className="text-2xl font-bold font-heading text-text-charcoal border-b border-border-warm/60 pb-2">Informasi Kontak</h2>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Alamat Toko</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">
                  Jl. Abon Raya No. 45, Kecamatan Duren Sawit, Jakarta Timur, DKI Jakarta
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Nomor Telepon</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">0812-3456-7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Email</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">support@psmas.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Jam Operasional</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">Senin - Sabtu: 08.00 - 17.00 WIB</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05, duration: 0.25 }}
          className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm flex flex-col justify-between"
        >
          <h2 className="text-2xl font-bold font-heading text-text-charcoal border-b border-border-warm/60 pb-2 mb-4">Lokasi Kami</h2>
          <div className="bg-background-warm rounded-2xl w-full h-full min-h-[16rem] flex items-center justify-center text-text-muted font-bold text-xs shadow-inner border border-border-warm/40 p-4 text-center">
            <span>Google Maps Map Container</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
