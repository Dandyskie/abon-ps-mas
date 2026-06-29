import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Award, Flame, ChevronRight, ChevronLeft, ShoppingBag, Send, ListOrdered } from 'lucide-react';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  // Only take first 3 products as featured popular items
  const featuredProducts = products.slice(0, 3);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0); // -1 for left, 1 for right

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const categories = [
    {
      id: 'sapi',
      name: 'Abon Sapi',
      desc: 'Olahan serat daging sapi premium bumbu rempah tradisional.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
      color: 'from-red-950/80 to-red-900/90'
    },
    {
      id: 'ayam',
      name: 'Abon Ayam',
      desc: 'Suwiran daging ayam pilihan yang gurih, renyah, dan lezat.',
      img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=80',
      color: 'from-yellow-950/80 to-yellow-900/90'
    },
    {
      id: 'serundeng',
      name: 'Serundeng',
      desc: 'Kelapa parut goreng wangi khas nusantara bertabur rempah.',
      img: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=500&auto=format&fit=crop&q=80',
      color: 'from-amber-950/80 to-amber-900/90'
    }
  ];

  const steps = [
    {
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      title: 'Pilih Produk & Varian',
      desc: 'Cari abon kesukaan Anda dan tentukan ukuran kemasan yang diinginkan.'
    },
    {
      icon: <ListOrdered className="w-5 h-5 text-primary" />,
      title: 'Isi Data Diri',
      desc: 'Tulis nama lengkap dan alamat tujuan pengiriman di keranjang belanja.'
    },
    {
      icon: <Send className="w-5 h-5 text-primary" />,
      title: 'Kirim via WhatsApp',
      desc: 'Kirim draf pesanan otomatis Anda ke admin PS MAS untuk info total ongkir.'
    }
  ];

  const testimonials = [
    {
      name: 'Ibu Ratna',
      role: 'Pelanggan Setia, Jakarta',
      comment: 'Abon sapinya benar-benar murni daging asli tanpa lemak! Anak-anak saya suka sekali untuk sarapan praktis sehari-hari.',
      rating: 5
    },
    {
      name: 'Hendry Kurniawan',
      role: 'Pembeli Oleh-oleh, Surabaya',
      comment: 'Kemasan rapi kedap udara dan rasanya tidak terlalu berminyak. Serundengnya harum bawang merah segar, sangat gurih.',
      rating: 5
    },
    {
      name: 'Siti Rahma',
      role: 'Reseller, Bandung',
      comment: 'Sangat mudah memesan lewat katalog web ini. Draf pesanannya langsung siap di WhatsApp jadi pengerjaan ordernya sangat cepat.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setSlideDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSlideDirection(-1);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16 md:space-y-24 py-4 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold">
            <Flame className="w-4 h-4 fill-primary" /> Kualitas Premium Tradisional
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-charcoal leading-[1.15] tracking-tight">
            Kehangatan Cita Rasa <span className="text-primary">Abon Asli</span> PS MAS
          </h1>
          <p className="text-text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Abon Sapi dan Ayam kualitas premium yang diolah secara higienis menggunakan rempah-rempah pilihan warisan keluarga tanpa bahan pengawet.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/catalog"
              className="bg-primary hover:bg-primary-hover text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              Belanja Sekarang <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-surface-accent text-text-charcoal border border-border-warm font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl active:scale-95 transition-all cursor-pointer"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="aspect-[4/5] w-full max-w-sm rounded-[2rem] overflow-hidden shadow-xl relative border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80" 
              alt="Abon PS MAS Premium" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] uppercase font-black tracking-widest text-accent mb-1">Kemasan Baru</span>
              <h3 className="text-xl font-bold font-heading leading-tight">PS MAS Premium Meat Floss</h3>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Visual Category Grid */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-charcoal font-heading">Kategori Produk</h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
            Temukan kelezatan khas abon sapi, ayam, dan serundeng gurih kami yang diolah dengan resep autentik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/catalog?category=${cat.id}`}
              className="group relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 flex flex-col justify-end p-6 text-white"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} mix-blend-multiply opacity-80 group-hover:opacity-85 transition-opacity`} />
              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl font-black font-heading tracking-wide">{cat.name}</h3>
                <p className="text-xs text-yellow-100/90 leading-relaxed font-medium">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-extrabold text-accent pt-1 group-hover:underline">
                  Lihat Kategori <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Value Propositions */}
      <motion.section 
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8 bg-white p-6 sm:p-10 rounded-[2.5rem] border border-border-warm shadow-sm"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4">
          <div className="bg-red-50 p-4.5 rounded-2xl">
            <ShieldCheck className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-heading text-text-charcoal">100% Daging Asli</h3>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
            Hanya diproduksi dari serat daging sapi segar murni bebas lemak dan dada ayam pilihan.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4 border-y md:border-y-0 md:border-x border-border-warm/60 py-6 md:py-0 md:px-6">
          <div className="bg-yellow-50 p-4.5 rounded-2xl">
            <Award className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold font-heading text-text-charcoal">Resep Legendaris</h3>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
            Mempertahankan teknik sangrai tradisional dan racikan bumbu khas sejak awal brand didirikan.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4">
          <div className="bg-red-50 p-4.5 rounded-2xl">
            <Flame className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-heading text-text-charcoal">Bebas Pengawet</h3>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
            Dimasak matang sempurna secara alami sehingga awet disimpan lama tanpa bahan pengawet kimia.
          </p>
        </motion.div>
      </motion.section>

      {/* Featured / Popular Products */}
      <motion.section variants={itemVariants} className="space-y-10">
        <div className="flex justify-between items-end px-1">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-charcoal font-heading">Produk Terpopuler</h2>
            <p className="text-text-muted text-xs sm:text-sm font-medium">Beberapa abon pilihan yang paling disukai pembeli.</p>
          </div>
          <Link
            to="/catalog"
            className="hidden sm:inline-flex items-center gap-1 font-extrabold text-sm text-primary hover:underline"
          >
            Lihat Semua Produk <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-5 border border-border-warm shadow-sm flex flex-col transition-shadow duration-300 relative group overflow-hidden"
            >
              {/* Product Card Image */}
              <div className="aspect-square bg-background-warm rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative border border-border-warm/40">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <span className="text-text-muted text-xs font-semibold z-0">{product.name} Preview</span>
                <span className="absolute top-3 left-3 bg-accent text-primary font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded z-20 shadow-sm">
                  {product.category}
                </span>
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
                  className="bg-accent hover:bg-yellow-500 text-primary font-extrabold text-[11px] px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm"
                >
                  Detail Ukuran
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center sm:hidden pt-2">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1 font-bold text-sm text-primary hover:underline"
          >
            Lihat Semua Produk <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>

      {/* How to Order (Cara Pemesanan) */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-charcoal font-heading">Cara Pemesanan</h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
            Ikuti 3 langkah mudah berikut untuk memesan abon PS MAS langsung ke WhatsApp kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-border-warm shadow-sm relative overflow-hidden flex flex-col items-center text-center">
              <span className="absolute top-2 right-4 text-7xl font-black text-background-warm font-heading select-none opacity-40">
                0{idx + 1}
              </span>
              <div className="bg-background-warm p-4 rounded-2xl mb-4 relative z-10 shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-text-charcoal mb-2 relative z-10 font-heading">{step.title}</h3>
              <p className="text-text-muted text-xs leading-relaxed max-w-xs relative z-10 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials sliding carousel */}
      <motion.section variants={itemVariants} className="space-y-8 max-w-2xl mx-auto px-2">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-charcoal font-heading">Ulasan Pelanggan</h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
            Apa kata mereka yang telah merasakan kehangatan rasa Abon PS MAS asli.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl border border-border-warm shadow-sm p-6 sm:p-10 flex flex-col justify-between min-h-64 sm:min-h-56">
          
          <div className="overflow-hidden relative flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={activeTestimonial}
                custom={slideDirection}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                <div className="flex gap-1 justify-center sm:justify-start">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-text-charcoal italic text-sm sm:text-base leading-relaxed text-center sm:text-left font-medium">
                  "{testimonials[activeTestimonial].comment}"
                </p>
                <div className="pt-2 text-center sm:text-left">
                  <h4 className="font-bold text-sm sm:text-base text-text-charcoal font-heading">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-text-muted font-semibold">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-end gap-3 mt-6 border-t border-border-warm/60 pt-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-background-warm hover:bg-surface-accent rounded-xl text-text-charcoal hover:text-primary transition-all active:scale-90 border border-border-warm/60 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-background-warm hover:bg-surface-accent rounded-xl text-text-charcoal hover:text-primary transition-all active:scale-90 border border-border-warm/60 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? 'w-4 bg-primary' : 'w-1.5 bg-border-warm'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
