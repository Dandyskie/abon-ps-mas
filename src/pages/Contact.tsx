import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
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
                  Jl. Kalimerbau RT03/RW10 Jagalan, kec. Jebres Kota Surakarta, Jawa Tengah 57162
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Nomor Telepon</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">081333182841 / (0271)661866</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Email</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">abonsapipsmas@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-text-charcoal font-heading">Jam Operasional</h4>
                <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed font-medium">Senin-Sabtu 07.00 - 16.00<br />Minggu 08.00 - 14.00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05, duration: 0.25 }}
          className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-border-warm shadow-sm flex flex-col justify-between space-y-4"
        >
          <h2 className="text-2xl font-bold font-heading text-text-charcoal border-b border-border-warm/60 pb-2">Lokasi Kami</h2>

          <div className="bg-background-warm rounded-2xl w-full h-[260px] sm:h-full min-h-[16rem] overflow-hidden shadow-inner border border-border-warm/40 relative">
            <iframe
              title="Lokasi Abon PS MAS"
              src="https://maps.google.com/maps?q=Jl.+Kalimerbau+RT03%2FRW10+Jagalan%2C+kec.+Jebres+Kota+Surakarta%2C+Jawa+Tengah+57162&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/KivubntQTycz5raZ7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-extrabold py-3 px-4 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Buka di Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
