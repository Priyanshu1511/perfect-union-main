

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">NRSM</div>
              <div className="text-xs text-gray-600">Natural Resources</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact Us
            </a>
          </nav>

          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors inline-block">
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}
