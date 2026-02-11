import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">NRSM</div>
                <div className="text-xs text-gray-400">Natural Resources</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional consultancy in groundwater management, regulatory compliance, and scientific studies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Groundwater NOC</li>
              <li className="text-gray-400">Compliance Advisory</li>
              <li className="text-gray-400">Technical Studies</li>
              <li className="text-gray-400">Regulatory Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  Jaipur, Rajasthan<br />India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">info@nrsm.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Disclaimer</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                NRSM provides professional regulatory and technical advisory services. The information provided
                is based on applicable regulations and expert assessment. Grant of Groundwater NOC remains subject
                to evaluation and approval by the competent authority (CGWA/State Water Authority). Clients are
                responsible for ensuring compliance with all applicable laws and regulations in their respective jurisdictions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Our Approach</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We combine scientific rigor, regulatory expertise, and practical implementation support to deliver
                comprehensive groundwater management and compliance solutions. Our advisory is designed to support
                your projects while maintaining environmental responsibility and regulatory adherence.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Natural Resource Solution and Management (NRSM). All rights reserved.
            </p>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm inline-block">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
