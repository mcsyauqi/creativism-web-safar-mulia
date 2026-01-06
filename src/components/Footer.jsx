import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Paket Umroh', path: '/packages' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontak', path: '/contact' },
  ];

  const packages = [
    { name: 'Umroh Reguler 9 Hari', path: '/packages' },
    { name: 'Umroh Plus Dubai', path: '/packages' },
    { name: 'Umroh Plus Turki', path: '/packages' },
    { name: 'Umroh Plus Mesir', path: '/packages' },
    { name: 'Haji Reguler', path: '/packages' },
    { name: 'Haji Furoda', path: '/packages' },
  ];

  return (
    <footer className="bg-accent text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-heading text-xl font-bold">SM</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Safar Mulia</h3>
                <p className="text-xs text-gray-300">Perjalanan Suci, Layanan Mulia</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Travel haji dan umroh terpercaya sejak 2010. Memberikan pengalaman ibadah yang khusyuk dengan layanan terbaik.
            </p>
            {/* Credentials */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Shield size={16} className="text-secondary" />
                <span className="text-xs">Izin Kemenag</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Award size={16} className="text-secondary" />
                <span className="text-xs">AMPHURI</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Paket Kami</h4>
            <ul className="space-y-3">
              {packages.map((pkg, index) => (
                <li key={index}>
                  <Link
                    to={pkg.path}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {pkg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 shrink-0" />
                <p className="text-gray-300 text-sm">
                  Jl. Raya Condet No. 123<br />
                  Kramat Jati, Jakarta Timur 13530
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">0812-SAFAR (Fast Response)</p>
                  <p className="text-gray-300 text-sm">021-555-HAJI</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <p className="text-gray-300 text-sm">info@safarmulia.co.id</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Sen - Jum: 09:00 - 17:00</p>
                  <p className="text-gray-300 text-sm">Sabtu: 09:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Safar Mulia. All rights reserved. Created by{' '}
              <a href="#" className="text-secondary hover:text-white transition-colors">
                Creativism
              </a>
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              *Harga dan jadwal dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
