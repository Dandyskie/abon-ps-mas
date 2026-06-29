import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background-warm text-text-charcoal">
      <Navbar />
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
