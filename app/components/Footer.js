export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black transition-colors duration-500 py-8 border-t border-gray-200 dark:border-doom-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-heading font-bold text-xl tracking-widest text-gray-900 dark:text-white uppercase mb-4 transition-colors">
          <span className="text-doom-greenDark dark:text-doom-green transition-colors">ACM</span> Weekend
        </div>
        <p className="text-gray-600 dark:text-doom-silver text-[10px] font-tech uppercase tracking-widest transition-colors">
          &copy; 2026 ACM Chapter • Theme: Avengers Doomsday
        </p>
      </div>
    </footer>
  );
}
