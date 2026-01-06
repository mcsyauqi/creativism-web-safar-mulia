import { useState } from 'react';
import {
  CheckCircle,
  Clock,
  Building2,
  Plane,
  MapPin,
  Star,
  Phone,
  Calendar,
  CreditCard,
  Info
} from 'lucide-react';

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'umroh', label: 'Umroh Reguler' },
    { id: 'plus', label: 'Umroh Plus' },
    { id: 'haji', label: 'Haji' },
  ];

  const packages = [
    {
      id: 1,
      category: 'umroh',
      name: 'Umroh Reguler 9 Hari',
      duration: '9 Hari',
      price: 'Rp 25.000.000',
      priceNote: 'per jamaah',
      highlight: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop',
      hotel: 'Hotel Bintang 5, 300m dari Masjidil Haram',
      airline: 'Garuda Indonesia / Saudia Airlines',
      includes: [
        'Tiket pesawat PP Jakarta - Jeddah',
        'Visa umroh',
        'Hotel bintang 5 (300m dari Masjidil Haram)',
        'Makan 3x sehari (menu Indonesia)',
        'Transportasi bus AC',
        'City tour Makkah & Madinah',
        'Air zamzam 5 liter',
        'Bimbingan manasik 5x',
        'Ustadz pembimbing',
        'Perlengkapan umroh',
        'Asuransi perjalanan',
      ],
      schedule: 'Berangkat setiap bulan',
    },
    {
      id: 2,
      category: 'plus',
      name: 'Umroh Plus Dubai 12 Hari',
      duration: '12 Hari',
      price: 'Rp 38.000.000',
      priceNote: 'per jamaah',
      highlight: 'Popular',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      hotel: 'Hotel Bintang 5 di Makkah, Madinah & Dubai',
      airline: 'Emirates Airlines',
      includes: [
        'Semua fasilitas Umroh Reguler',
        'City tour Dubai 2 hari',
        'Burj Khalifa (observation deck)',
        'Desert Safari dengan BBQ dinner',
        'Dubai Mall & Dubai Fountain',
        'Gold Souk & Spice Souk',
        'Foto di Palm Jumeirah',
        'Hotel bintang 5 di Dubai',
      ],
      schedule: 'Berangkat setiap 2 bulan',
    },
    {
      id: 3,
      category: 'plus',
      name: 'Umroh Plus Turki 14 Hari',
      duration: '14 Hari',
      price: 'Rp 42.000.000',
      priceNote: 'per jamaah',
      highlight: 'Recommended',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2018&auto=format&fit=crop',
      hotel: 'Hotel Bintang 5 di Makkah, Madinah & Istanbul',
      airline: 'Turkish Airlines',
      includes: [
        'Semua fasilitas Umroh Reguler',
        'City tour Istanbul 3 hari',
        'Hagia Sophia',
        'Blue Mosque (Sultan Ahmed)',
        'Topkapi Palace',
        'Grand Bazaar & Spice Bazaar',
        'Cappadocia tour (opsional hot air balloon)',
        'Bosphorus Cruise',
        'Hotel bintang 5 di Istanbul',
      ],
      schedule: 'Berangkat setiap 3 bulan',
    },
    {
      id: 4,
      category: 'plus',
      name: 'Umroh Plus Mesir 14 Hari',
      duration: '14 Hari',
      price: 'Rp 45.000.000',
      priceNote: 'per jamaah',
      highlight: 'Premium',
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=2070&auto=format&fit=crop',
      hotel: 'Hotel Bintang 5 di Makkah, Madinah & Cairo',
      airline: 'Egypt Air / Saudi Airlines',
      includes: [
        'Semua fasilitas Umroh Reguler',
        'City tour Cairo 3 hari',
        'Pyramids of Giza & Sphinx',
        'Egyptian Museum',
        'Khan el-Khalili Bazaar',
        'Masjid Al-Azhar',
        'Alexandria tour (1 hari)',
        'Citadel of Saladin',
        'Hotel bintang 5 di Cairo',
      ],
      schedule: 'Berangkat setiap 3 bulan',
    },
    {
      id: 5,
      category: 'haji',
      name: 'Haji Reguler',
      duration: '40 Hari (estimasi)',
      price: 'Hubungi Kami',
      priceNote: 'mengikuti ketentuan pemerintah',
      highlight: 'Waiting List',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1974&auto=format&fit=crop',
      hotel: 'Sesuai ketentuan pemerintah',
      airline: 'Garuda Indonesia',
      includes: [
        'Pendampingan pendaftaran SISKOHAT',
        'Bimbingan manasik lengkap',
        'Ustadz pembimbing berpengalaman',
        'Perlengkapan haji',
        'Pendampingan selama di tanah suci',
        'Koordinasi dengan PPIH',
        'Asuransi perjalanan',
        'Layanan after-sales',
      ],
      schedule: 'Mengikuti kuota pemerintah',
    },
    {
      id: 6,
      category: 'haji',
      name: 'Haji Furoda (Plus)',
      duration: '15-25 Hari',
      price: 'USD 15,000++',
      priceNote: 'estimasi, hubungi untuk info terbaru',
      highlight: 'Exclusive',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop',
      hotel: 'Hotel Bintang 5, dekat Masjidil Haram',
      airline: 'Saudi Airlines / Garuda Indonesia',
      includes: [
        'Keberangkatan lebih cepat (tanpa waiting list)',
        'Hotel bintang 5 sangat dekat Haram',
        'Kamar maksimal 2-4 orang',
        'Makan premium',
        'Transportasi VIP',
        'Ustadz pembimbing khusus',
        'Bimbingan manasik intensif',
        'Layanan fast track di bandara',
        'Pendampingan eksklusif',
      ],
      schedule: 'Keberangkatan fleksibel',
    },
  ];

  const inclusions = [
    'Tiket pesawat PP (Garuda/Saudia)',
    'Visa umroh',
    'Hotel bintang 5 dekat Haram',
    'Makan 3x sehari (menu Indonesia)',
    'Transportasi bus AC',
    'City tour Makkah & Madinah',
    'Air zamzam 5 liter',
    'Bimbingan manasik 5x',
    'Ustadz pembimbing',
    'Perlengkapan umroh (koper, buku doa, dll)',
    'Asuransi perjalanan',
  ];

  const filteredPackages = activeFilter === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Paket Umroh & Haji
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Pilihan paket perjalanan ibadah dengan berbagai pilihan fasilitas dan harga yang sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                {/* Image */}
                <div className="relative h-56">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {pkg.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-gray-800 mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-primary font-medium flex items-center gap-2">
                        <Clock size={16} />
                        {pkg.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-800">{pkg.price}</p>
                      <p className="text-sm text-gray-500">{pkg.priceNote}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Building2 className="text-primary shrink-0" size={18} />
                      <span className="text-sm">{pkg.hotel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Plane className="text-primary shrink-0" size={18} />
                      <span className="text-sm">{pkg.airline}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="text-primary shrink-0" size={18} />
                      <span className="text-sm">{pkg.schedule}</span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="border-t pt-4 mb-6">
                    <p className="font-semibold text-gray-800 mb-3">Termasuk:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.includes.slice(0, 6).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-primary shrink-0 mt-0.5" size={14} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    {pkg.includes.length > 6 && (
                      <p className="text-primary text-sm mt-2">
                        +{pkg.includes.length - 6} fasilitas lainnya
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone size={18} />
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Saja yang Termasuk?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Semua paket umroh kami sudah termasuk fasilitas lengkap berikut
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background p-4 rounded-lg"
              >
                <CheckCircle className="text-primary shrink-0" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-background islamic-pattern-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ketentuan Pembayaran
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
                Down Payment
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">Rp 5.000.000</p>
              <p className="text-gray-600 text-sm">
                Pembayaran awal untuk booking seat
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
                Pelunasan
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">H-30</p>
              <p className="text-gray-600 text-sm">
                Pelunasan paling lambat 30 hari sebelum keberangkatan
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
                Cicilan
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">Tersedia</p>
              <p className="text-gray-600 text-sm">
                Kerjasama dengan bank syariah
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Untuk informasi lebih lanjut mengenai pembayaran dan cicilan, silakan hubungi tim kami
            </p>
            <a
              href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20skema%20pembayaran%20umroh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              Tanya Pembayaran
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Bingung Pilih Paket?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Tim kami siap membantu memilihkan paket terbaik sesuai kebutuhan dan budget Anda
          </p>
          <a
            href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20untuk%20memilih%20paket%20umroh%20yang%20tepat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            <Phone size={24} />
            Konsultasi Gratis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Packages;
