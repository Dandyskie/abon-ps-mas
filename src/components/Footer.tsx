export default function Footer() {
  return (
    <footer className="bg-surface-accent border-t border-border-warm py-8 mt-12 text-center text-text-muted text-sm">
      <p>&copy; {new Date().getFullYear()} PS MAS. Hak Cipta Dilindungi.</p>
      <p className="mt-2 text-xs">Cita Rasa Abon Nusantara Asli & Higienis</p>
    </footer>
  );
}
