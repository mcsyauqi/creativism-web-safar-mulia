import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Users,
  BookOpen,
  Building2,
  Star,
  ChevronRight,
  Phone,
  CheckCircle,
  Calendar,
  MapPin,
  Award,
  Plane
} from 'lucide-react';

const Home = () => {
  const credentials = [
    { icon: Shield, text: 'Izin Kemenag', subtext: 'No. 123/2024' },
    { icon: Clock, text: '14 Tahun', subtext: 'Pengalaman' },
    { icon: Users, text: '50,000+', subtext: 'Jamaah' },
    { icon: BookOpen, text: 'Bimbingan', subtext: 'Ustadz' },
    { icon: Building2, text: 'Hotel Dekat', subtext: 'Masjidil Haram' },
  ];

  const packages = [
    {
      name: 'Umroh Reguler',
      duration: '9 Hari',
      price: 'Rp 25.000.000',
      highlight: 'Best Seller',
      features: ['Hotel Bintang 5', 'Manasik 5x', 'Ustadz Pembimbing'],
    },
    {
      name: 'Umroh Plus Turki',
      duration: '12 Hari',
      price: 'Rp 35.000.000',
      highlight: 'Popular',
      features: ['Istanbul & Cappadocia', 'Hagia Sophia', 'Blue Mosque'],
    },
    {
      name: 'Haji Furoda',
      duration: 'Estimasi',
      price: 'Info Lebih Lanjut',
      highlight: 'Premium',
      features: ['Keberangkatan Cepat', 'Akomodasi Premium', 'Full Service'],
    },
  ];

  const whyUs = [
    {
      icon: Shield,
      title: 'Izin Resmi & Terpercaya',
      description: 'Terdaftar di Kemenag dengan No. Izin 123/2024, anggota resmi AMPHURI dan IATA.',
    },
    {
      icon: Building2,
      title: 'Hotel Bintang 5 Dekat Haram',
      description: 'Akomodasi premium dengan jarak kurang dari 500 meter ke Masjidil Haram.',
    },
    {
      icon: BookOpen,
      title: 'Bimbingan Manasik Lengkap',
      description: '5x pertemuan manasik intensif, buku panduan eksklusif, dan Ustadz pendamping selama perjalanan.',
    },
    {
      icon: CheckCircle,
      title: 'All-Inclusive Package',
      description: 'Visa, tiket pesawat, hotel, makan 3x sehari, transportasi, guide, dan perlengkapan umroh.',
    },
  ];

  const testimonials = [
    {
      name: 'H. Bambang Suryadi',
      package: 'Umroh Reguler 2023',
      text: 'Alhamdulillah, umroh bersama Safar Mulia sangat berkesan. Hotel dekat dengan Masjidil Haram, bimbingan ibadahnya lengkap. Insya Allah akan berangkat lagi.',
      rating: 5,
    },
    {
      name: 'Ibu Siti Aminah',
      package: 'Umroh Plus Turki 2024',
      text: 'Pelayanan sangat memuaskan dari awal pendaftaran sampai pulang. City tour di Istanbul juga sangat bagus. Terima kasih Safar Mulia!',
      rating: 5,
    },
    {
      name: 'Bpk. Ahmad Fauzi',
      package: 'Umroh Reguler 2024',
      text: 'Ustadz pembimbingnya sangat sabar dan ilmunya luas. Manasiknya juga lengkap jadi pas di tanah suci sudah paham tata caranya.',
      rating: 5,
    },
  ];

  const departures = [
    { date: '15 Februari 2025', package: 'Umroh Reguler 9 Hari', seats: 12, price: 'Rp 25.000.000' },
    { date: '1 Maret 2025', package: 'Umroh Plus Dubai 12 Hari', seats: 8, price: 'Rp 38.000.000' },
    { date: '20 Maret 2025', package: 'Umroh Plus Turki 14 Hari', seats: 15, price: 'Rp 42.000.000' },
    { date: '5 April 2025', package: 'Umroh Reguler 9 Hari', seats: 20, price: 'Rp 25.000.000' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="text-secondary" size={18} />
              <span className="text-white text-sm font-medium">Izin Resmi Kemenag No. 123/2024</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Wujudkan Ibadah Suci Bersama{' '}
              <span className="text-secondary">Safar Mulia</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Travel haji dan umroh terpercaya sejak 2010. Bimbingan ibadah lengkap, akomodasi premium, dan pendampingan dari keberangkatan hingga kepulangan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Lihat Paket Umroh
                <ChevronRight size={20} />
              </Link>
              <a
                href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20paket%20umroh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone size={20} />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {credentials.map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{item.text}</p>
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Paket Unggulan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan paket umroh dan haji dengan fasilitas terbaik untuk perjalanan ibadah Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                {/* Highlight Badge */}
                <div className="bg-secondary text-white text-center py-2 text-sm font-semibold">
                  {pkg.highlight}
                </div>

                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{pkg.duration}</p>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-gray-800">{pkg.price}</p>
                    <p className="text-sm text-gray-500">per jamaah</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="text-primary shrink-0" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/packages"
                    className="block text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Detail & Daftar
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg"
            >
              Lihat Semua Paket
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Safar Mulia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mengapa Memilih <span className="text-primary">Safar Mulia</span>?
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                Kami berkomitmen memberikan pengalaman ibadah yang khusyuk dan berkesan dengan layanan profesional dan terpercaya.
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1974&auto=format&fit=crop"
                alt="Masjid Nabawi"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Award size={32} />
                  <div>
                    <p className="font-bold text-2xl">4.9/5</p>
                    <p className="text-sm">Rating Jamaah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-alt islamic-pattern-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Jamaah Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengalaman nyata dari jamaah yang telah berangkat bersama Safar Mulia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg gold-border-left"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={18} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{item.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-primary">{item.package}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg"
            >
              Lihat Semua Testimoni
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Departures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Jadwal Keberangkatan Terdekat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Segera daftarkan diri Anda, seat terbatas!
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-4 px-6 text-left font-semibold rounded-tl-lg">Tanggal</th>
                  <th className="py-4 px-6 text-left font-semibold">Paket</th>
                  <th className="py-4 px-6 text-center font-semibold">Seat Tersisa</th>
                  <th className="py-4 px-6 text-right font-semibold">Harga</th>
                  <th className="py-4 px-6 text-center font-semibold rounded-tr-lg">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {departures.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-primary" size={18} />
                        {item.date}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Plane className="text-secondary" size={18} />
                        {item.package}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        item.seats < 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {item.seats} seat
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-semibold text-gray-800">
                      {item.price}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <a
                        href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20tertarik%20dengan%20paket%20umroh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Daftar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Jadwalkan Konsultasi Gratis
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Tim kami siap membantu merencanakan perjalanan suci Anda. Konsultasikan kebutuhan dan budget Anda, kami carikan paket terbaik.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20menjadwalkan%20konsultasi%20untuk%20paket%20umroh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            <Phone size={24} />
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
