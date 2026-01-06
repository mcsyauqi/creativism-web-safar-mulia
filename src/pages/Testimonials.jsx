import { Star, Users, Award, TrendingUp, Quote } from 'lucide-react';

const Testimonials = () => {
  const stats = [
    { value: '50,000+', label: 'Jamaah', icon: Users },
    { value: '4.9/5', label: 'Rating', icon: Star },
    { value: '95%', label: 'Repeat/Referral', icon: TrendingUp },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'H. Bambang Suryadi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2023',
      rating: 5,
      text: 'Alhamdulillah, umroh bersama Safar Mulia sangat berkesan. Hotel dekat dengan Masjidil Haram, bimbingan ibadahnya lengkap, dan Ustadz pendampingnya sangat membantu. Insya Allah akan berangkat lagi bersama keluarga besar.',
    },
    {
      id: 2,
      name: 'Ibu Siti Aminah',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      package: 'Umroh Plus Turki',
      year: '2024',
      rating: 5,
      text: 'Pelayanan sangat memuaskan dari awal pendaftaran sampai pulang. City tour di Istanbul juga sangat bagus, guide-nya ramah dan informatif. Terima kasih Safar Mulia!',
    },
    {
      id: 3,
      name: 'Bpk. Ahmad Fauzi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2024',
      rating: 5,
      text: 'Ustadz pembimbingnya sangat sabar dan ilmunya luas. Manasiknya juga lengkap jadi pas di tanah suci sudah paham tata caranya. Recommended banget untuk yang pertama kali umroh.',
    },
    {
      id: 4,
      name: 'Hj. Fatimah Zahra',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      package: 'Umroh Plus Dubai',
      year: '2023',
      rating: 5,
      text: 'Ini umroh kedua saya bersama Safar Mulia. Sebelumnya umroh reguler, sekarang ambil yang plus Dubai. Sama-sama memuaskan! Desert safari-nya seru banget.',
    },
    {
      id: 5,
      name: 'Bpk. Hendra Wijaya',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2024',
      rating: 5,
      text: 'Awalnya ragu karena banyak travel umroh bermasalah. Tapi setelah baca review dan konsultasi langsung, saya yakin dengan Safar Mulia. Dan memang tidak mengecewakan!',
    },
    {
      id: 6,
      name: 'Ibu Dewi Kartini',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      package: 'Umroh Plus Mesir',
      year: '2023',
      rating: 5,
      text: 'Pengalaman yang tidak terlupakan! Selain umroh yang khusyuk, bisa sekalian ziarah ke Mesir dan melihat kebesaran peradaban Islam. Highly recommended!',
    },
    {
      id: 7,
      name: 'H. Ridwan Abdullah',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2022',
      rating: 5,
      text: 'Sudah 3x umroh dengan Safar Mulia. Konsisten dengan pelayanan yang baik. Tim-nya profesional dan selalu responsif. Tahun depan insya Allah berangkat lagi.',
    },
    {
      id: 8,
      name: 'Ibu Ratna Sari',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2024',
      rating: 5,
      text: 'Berangkat bersama ibu saya yang sudah sepuh. Tim Safar Mulia sangat perhatian dan membantu. Kursi roda tersedia, prioritas hotel dekat masjid. Terima kasih!',
    },
    {
      id: 9,
      name: 'Bpk. Agus Santoso',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Plus Turki',
      year: '2023',
      rating: 5,
      text: 'Best travel untuk umroh! Cappadocia-nya amazing, balon udaranya pengalaman sekali seumur hidup. Plus ibadah di tanah suci yang khusyuk. Perfect combination!',
    },
    {
      id: 10,
      name: 'Hj. Nurul Hidayah',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2024',
      rating: 4,
      text: 'Overall sangat puas dengan pelayanan Safar Mulia. Hanya sedikit delay saat city tour, tapi tim langsung handle dengan baik. Tetap recommended!',
    },
    {
      id: 11,
      name: 'Bpk. Irfan Hakim',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Reguler',
      year: '2023',
      rating: 5,
      text: 'Pertama kali umroh dan sangat bersyukur memilih Safar Mulia. Semua sudah diurus dengan baik, saya tinggal fokus ibadah. Jazakallah khair!',
    },
    {
      id: 12,
      name: 'Ibu Ani Wulandari',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop',
      package: 'Umroh Plus Dubai',
      year: '2024',
      rating: 5,
      text: 'Honeymoon umroh plus Dubai! Suami saya dan saya sangat puas. Romantic dinner di desert safari, shopping di Dubai Mall. Memorable banget!',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Pengalaman Jamaah Kami
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Testimoni nyata dari ribuan jamaah yang telah mempercayakan perjalanan suci mereka kepada Safar Mulia
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote size={40} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < item.rating ? 'text-secondary fill-secondary' : 'text-gray-300'}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">"{item.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-primary">
                      {item.package} {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Lihat Video Testimoni
          </h2>
          <p className="text-gray-600 mb-8">
            Tonton cerita lengkap pengalaman jamaah kami di channel YouTube
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Kunjungi YouTube Kami
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Jadilah Bagian dari Cerita Kami
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Bergabunglah bersama ribuan jamaah yang telah merasakan pengalaman umroh yang berkesan bersama Safar Mulia
          </p>
          <a
            href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20mendaftar%20umroh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
