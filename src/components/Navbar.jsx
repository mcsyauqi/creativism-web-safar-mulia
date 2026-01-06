import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Paket', path: '/packages' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">SM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-primary">Safar Mulia</h1>
              <p className="text-xs text-gray-500">Perjalanan Suci, Layanan Mulia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20paket%20umroh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              <Phone size={18} />
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-primary/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20paket%20umroh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-medium mt-2"
              >
                <Phone size={18} />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
