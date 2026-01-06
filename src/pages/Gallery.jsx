import { useState } from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'makkah', label: 'Makkah' },
    { id: 'madinah', label: 'Madinah' },
    { id: 'manasik', label: 'Manasik' },
    { id: 'keberangkatan', label: 'Keberangkatan' },
    { id: 'tour', label: 'City Tour' },
  ];

  const photos = [
    {
      id: 1,
      category: 'makkah',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop',
      title: 'Masjidil Haram',
      description: 'Jamaah Safar Mulia di depan Ka\'bah',
    },
    {
      id: 2,
      category: 'makkah',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop',
      title: 'Tawaf di Masjidil Haram',
      description: 'Momen tawaf jamaah kami',
    },
    {
      id: 3,
      category: 'makkah',
      image: 'https://images.unsplash.com/photo-1575709527184-11f744e57017?q=80&w=2070&auto=format&fit=crop',
      title: 'Ka\'bah di Malam Hari',
      description: 'Keindahan Ka\'bah di malam hari',
    },
    {
      id: 4,
      category: 'madinah',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1974&auto=format&fit=crop',
      title: 'Masjid Nabawi',
      description: 'Jamaah di depan Masjid Nabawi',
    },
    {
      id: 5,
      category: 'madinah',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop',
      title: 'Interior Masjid Nabawi',
      description: 'Keindahan interior Masjid Nabawi',
    },
    {
      id: 6,
      category: 'madinah',
      image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1974&auto=format&fit=crop',
      title: 'Raudhah',
      description: 'Area Raudhah yang berkah',
    },
    {
      id: 7,
      category: 'manasik',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
      title: 'Bimbingan Manasik',
      description: 'Kegiatan manasik umroh di kantor',
    },
    {
      id: 8,
      category: 'manasik',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
      title: 'Praktek Manasik',
      description: 'Praktek tata cara umroh',
    },
    {
      id: 9,
      category: 'manasik',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      title: 'Sesi Tanya Jawab',
      description: 'Jamaah bertanya kepada Ustadz',
    },
    {
      id: 10,
      category: 'keberangkatan',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
      title: 'Keberangkatan Jamaah',
      description: 'Jamaah siap berangkat ke tanah suci',
    },
    {
      id: 11,
      category: 'keberangkatan',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop',
      title: 'Check-in Bandara',
      description: 'Proses check-in di bandara',
    },
    {
      id: 12,
      category: 'keberangkatan',
      image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=2069&auto=format&fit=crop',
      title: 'Foto Bersama',
      description: 'Foto bersama sebelum keberangkatan',
    },
    {
      id: 13,
      category: 'tour',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      title: 'Dubai - Burj Khalifa',
      description: 'City tour Dubai',
    },
    {
      id: 14,
      category: 'tour',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2018&auto=format&fit=crop',
      title: 'Istanbul - Hagia Sophia',
      description: 'Kunjungan ke Hagia Sophia',
    },
    {
      id: 15,
      category: 'tour',
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=2070&auto=format&fit=crop',
      title: 'Mesir - Pyramids',
      description: 'Foto di depan Piramida Giza',
    },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop',
      title: 'Testimoni Ibu Siti - Umroh Plus Turki 2024',
      duration: '5:32',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1974&auto=format&fit=crop',
      title: 'Perjalanan Umroh Bersama Safar Mulia',
      duration: '8:15',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      title: 'Testimoni Bpk. Ahmad - Umroh Plus Dubai',
      duration: '4:48',
    },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeFilter);

  const currentIndex = selectedImage
    ? filteredPhotos.findIndex(p => p.id === selectedImage.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredPhotos[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedImage(filteredPhotos[currentIndex + 1]);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Dokumentasi Perjalanan
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Momen suci jamaah Safar Mulia di tanah suci dan destinasi wisata religi
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

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-800 mb-8">
            Galeri Foto
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedImage(photo)}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold">{photo.title}</p>
                    <p className="text-white/70 text-sm">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-800 mb-8">
            Video Testimoni
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <div className="aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-primary ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold">{video.title}</p>
                  <p className="text-white/70 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Next Button */}
          {currentIndex < filteredPhotos.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Image */}
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold text-lg">{selectedImage.title}</p>
              <p className="text-white/70">{selectedImage.description}</p>
              <p className="text-white/50 text-sm mt-2">
                {currentIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin Momen Seperti Ini?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Bergabunglah bersama Safar Mulia dan ciptakan momen berkesan di tanah suci
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

export default Gallery;
