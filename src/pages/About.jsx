import {
  Shield,
  Award,
  Users,
  Calendar,
  Plane,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Building
} from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50,000+', label: 'Jamaah Dilayani', icon: Users },
    { value: '14', label: 'Tahun Pengalaman', icon: Calendar },
    { value: '500+', label: 'Keberangkatan', icon: Plane },
    { value: '4.9/5', label: 'Rating Jamaah', icon: Award },
  ];

  const credentials = [
    {
      title: 'Izin Kemenag',
      number: 'No. 123/2024',
      description: 'Terdaftar resmi di Kementerian Agama RI sebagai Penyelenggara Perjalanan Ibadah Umroh (PPIU)',
    },
    {
      title: 'Anggota AMPHURI',
      number: 'No. Anggota: AM-2010-1234',
      description: 'Asosiasi Muslim Penyelenggara Haji dan Umroh Republik Indonesia',
    },
    {
      title: 'Anggota IATA',
      number: 'IATA Code: 12345678',
      description: 'International Air Transport Association untuk layanan tiket resmi',
    },
    {
      title: 'ISO 9001:2015',
      number: 'Certified',
      description: 'Standar manajemen mutu internasional untuk pelayanan terbaik',
    },
  ];

  const team = [
    {
      name: 'H. Ahmad Ridwan, S.Ag., M.Pd.',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      description: 'Pendiri Safar Mulia dengan pengalaman lebih dari 20 tahun di industri travel haji dan umroh.',
    },
    {
      name: 'Ustadz H. Mahmud, Lc., M.A.',
      role: 'Pembimbing Ibadah Utama',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      description: 'Lulusan Al-Azhar Cairo, berpengalaman membimbing jamaah selama 15 tahun.',
    },
    {
      name: 'Hj. Fatimah Azzahra',
      role: 'Direktur Operasional',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      description: 'Ahli manajemen operasional dengan fokus pada kepuasan jamaah.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Tentang Safar Mulia
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Perjalanan kami dimulai dari sebuah tekad untuk memberikan pengalaman ibadah yang khusyuk dan berkesan bagi setiap jamaah
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Kisah <span className="text-primary">Safar Mulia</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-800">Safar Mulia</strong> didirikan pada tahun 2010 oleh H. Ahmad Ridwan setelah pengalaman umroh yang kurang memuaskan dengan travel lain. Beliau bertekad untuk mendirikan biro perjalanan yang mengutamakan kenyamanan dan kekhusyukan ibadah jamaah.
                </p>
                <p>
                  Berawal dari sebuah kantor kecil di Jakarta Timur dengan hanya 3 orang karyawan, kini Safar Mulia telah berkembang menjadi salah satu travel umroh terpercaya di Indonesia dengan lebih dari 50 karyawan dan telah memberangkatkan lebih dari 50,000 jamaah.
                </p>
                <p>
                  Nama "Safar Mulia" diambil dari bahasa Arab yang berarti "Perjalanan yang Mulia", mencerminkan komitmen kami untuk menjadikan setiap perjalanan ibadah sebagai pengalaman yang bermakna dan penuh keberkahan.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop"
                alt="Masjidil Haram"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="font-bold text-3xl">2010</p>
                <p className="text-sm">Tahun Berdiri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Visi</h3>
              <p className="text-gray-600 text-lg">
                Menjadi travel haji dan umroh terdepan di Indonesia yang memberikan pengalaman ibadah yang khusyuk, nyaman, dan berkesan dengan layanan berkualitas tinggi serta harga yang amanah.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Misi</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                  Memfasilitasi umat Islam Indonesia untuk beribadah ke tanah suci dengan mudah dan nyaman
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                  Menyediakan bimbingan ibadah yang komprehensif dan pembimbing yang berkompeten
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                  Memberikan pelayanan prima dari pendaftaran hingga kepulangan
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                  Menjaga amanah dan kepercayaan setiap jamaah
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-secondary" size={28} />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Legalitas & Sertifikasi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Safar Mulia beroperasi secara legal dengan izin resmi dari instansi terkait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((item, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">{item.number}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background islamic-pattern-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tim Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Didukung oleh tim profesional yang berpengalaman dan berdedikasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kantor Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk konsultasi langsung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Kantor Safar Mulia"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-800">Kantor Pusat Jakarta</p>
                <p className="text-sm text-gray-600">Ruang Pelayanan Jamaah</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
                alt="Ruang Meeting"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-800">Ruang Manasik</p>
                <p className="text-sm text-gray-600">Kegiatan Bimbingan Jamaah</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                alt="Resepsionis"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-800">Tim Customer Service</p>
                <p className="text-sm text-gray-600">Siap Melayani Anda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Nilai-Nilai Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Amanah</h3>
              <p className="text-white/80">
                Menjaga kepercayaan jamaah dengan integritas dan kejujuran dalam setiap pelayanan
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Profesional</h3>
              <p className="text-white/80">
                Memberikan pelayanan terbaik dengan standar kualitas tinggi dan tim yang kompeten
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Peduli</h3>
              <p className="text-white/80">
                Mengutamakan kebutuhan dan kenyamanan jamaah dalam setiap aspek perjalanan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
