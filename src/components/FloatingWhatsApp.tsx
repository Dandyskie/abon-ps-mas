import { useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

export default function FloatingWhatsApp() {
  const location = useLocation();
  
  // Hide floating WA button on Cart page to prevent overlapping layout
  if (location.pathname === '/cart') return null;

  return (
    <a
      href="https://api.whatsapp.com/send?phone=6281234567890&text=Halo%20PS%20MAS%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20abon."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Hubungi WhatsApp PS MAS"
    >
      <PhoneCall className="w-6 h-6" />
    </a>
  );
}
