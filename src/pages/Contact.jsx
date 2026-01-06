import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    package: '',
    departureMonth: '',
    jamaahCount: '1',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `Assalamualaikum, saya ingin konsultasi umroh.

Nama: ${formData.name}
No. WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Paket yang diminati: ${formData.package}
Rencana keberangkatan: ${formData.departureMonth}
Jumlah jamaah: ${formData.jamaahCount} orang
Pesan: ${formData.message}`;

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        package: '',
        departureMonth: '',
        jamaahCount: '1',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '0812-SAFAR',
      subtext: 'Fast Response',
      href: 'https://wa.me/6281234567890',
      color: 'bg-green-500',
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '021-555-HAJI',
      subtext: 'Senin - Sabtu',
      href: 'tel:+62215555HAJI',
      color: 'bg-primary',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@safarmulia.co.id',
      subtext: 'Respon 1x24 jam',
      href: 'mailto:info@safarmulia.co.id',
      color: 'bg-accent',
    },
  ];

  const branches = [
    {
      city: 'Jakarta (Pusat)',
      address: 'Jl. Raya Condet No. 123, Kramat Jati, Jakarta Timur 13530',
      phone: '021-555-HAJI',
      hours: 'Sen-Jum: 09:00-17:00, Sab: 09:00-14:00',
    },
    {
      city: 'Surabaya',
      address: 'Jl. Diponegoro No. 45, Surabaya 60241',
      phone: '031-555-HAJI',
      hours: 'Sen-Jum: 09:00-17:00, Sab: 09:00-14:00',
    },
    {
      city: 'Bandung',
      address: 'Jl. Braga No. 78, Bandung 40111',
      phone: '022-555-HAJI',
      hours: 'Sen-Jum: 09:00-17:00, Sab: 09:00-14:00',
    },
  ];

  const packages = [
    'Umroh Reguler 9 Hari',
    'Umroh Plus Dubai 12 Hari',
    'Umroh Plus Turki 14 Hari',
    'Umroh Plus Mesir 14 Hari',
    'Haji Reguler',
    'Haji Furoda',
  ];

  const months = [
    'Januari 2025',
    'Februari 2025',
    'Maret 2025',
    'April 2025',
    'Mei 2025',
    'Juni 2025',
    'Juli 2025',
    'Agustus 2025',
    'September 2025',
    'Oktober 2025',
    'November 2025',
    'Desember 2025',
    '2026 (Belum Pasti)',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Hubungi Kami
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Konsultasi gratis untuk merencanakan perjalanan suci Anda. Tim kami siap membantu!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-background rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <method.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{method.title}</p>
                  <p className="font-bold text-gray-800 text-lg">{method.value}</p>
                  <p className="text-sm text-primary">{method.subtext}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-heading text-2xl font-bold text-gray-800 mb-2">
                Jadwalkan Konsultasi
              </h2>
              <p className="text-gray-600 mb-8">
                Isi form berikut dan tim kami akan menghubungi Anda segera
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
                    Terima Kasih!
                  </h3>
                  <p className="text-gray-600">
                    Pesan Anda sudah terkirim via WhatsApp. Tim kami akan segera merespon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        No. WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Paket yang Diminati *
                    </label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    >
                      <option value="">Pilih paket</option>
                      {packages.map((pkg, index) => (
                        <option key={index} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rencana Keberangkatan *
                      </label>
                      <select
                        name="departureMonth"
                        value={formData.departureMonth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      >
                        <option value="">Pilih bulan</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Jumlah Jamaah
                      </label>
                      <select
                        name="jamaahCount"
                        value={formData.jamaahCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} orang</option>
                        ))}
                        <option value="10+">Lebih dari 10 orang</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan Tambahan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Tulis pertanyaan atau kebutuhan khusus Anda"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold transition-colors"
                  >
                    <Send size={20} />
                    Kirim & Jadwalkan Konsultasi
                  </button>
                </form>
              )}
            </div>

            {/* Map & Office Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8301259699!2d106.86866867355964!3d-6.276879893714797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c1c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sKramat%20Jati%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Safar Mulia"
                ></iframe>
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Building className="text-primary" size={24} />
                  Kantor Pusat
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary shrink-0 mt-1" size={18} />
                    <p className="text-gray-600">
                      Jl. Raya Condet No. 123<br />
                      Kramat Jati, Jakarta Timur 13530
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary shrink-0" size={18} />
                    <p className="text-gray-600">021-555-HAJI</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary shrink-0 mt-1" size={18} />
                    <div className="text-gray-600">
                      <p>Senin - Jumat: 09:00 - 17:00</p>
                      <p>Sabtu: 09:00 - 14:00</p>
                      <p>Minggu & Libur: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Kantor Cabang
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border-2 border-transparent hover:border-primary transition-colors"
              >
                <h3 className="font-heading text-lg font-bold text-gray-800 mb-3">
                  {branch.city}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="text-primary shrink-0" size={16} />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="text-primary shrink-0" size={16} />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Respon Cepat via WhatsApp
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Untuk respon lebih cepat, langsung chat kami via WhatsApp. Tim kami online setiap hari!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20paket%20umroh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            <MessageCircle size={24} />
            Chat via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
