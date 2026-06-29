import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Katalog', path: '/catalog' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Hubungi Kami', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-border-warm/60 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/image/Logopsmas.png" 
            alt="PS MAS Logo" 
            className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-medium items-center">
          {menuItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`relative py-2 text-text-charcoal hover:text-primary transition-colors duration-200 ${
                  isActive ? 'text-primary' : ''
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons: Cart & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link 
            to="/cart" 
            className="relative p-2.5 bg-background-warm hover:bg-yellow-100 rounded-xl text-primary transition-all duration-200 shadow-sm hover:shadow active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label="Keranjang Belanja"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 bg-primary text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm border border-white"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="p-2.5 md:hidden text-text-charcoal hover:text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-border-warm bg-white overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-sm font-bold text-text-charcoal">
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 rounded-xl transition-all ${
                    location.pathname === item.path 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-background-warm'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
