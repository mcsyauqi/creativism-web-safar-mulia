import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqCategories = [
    {
      title: 'Pendaftaran',
      faqs: [
        {
          question: 'Apa saja syarat pendaftaran umroh?',
          answer: 'Syarat pendaftaran umroh meliputi: (1) Fotokopi KTP yang masih berlaku, (2) Paspor dengan masa berlaku minimal 7 bulan dari tanggal keberangkatan, (3) Pas foto ukuran 4x6 dengan latar belakang putih (80%), (4) Buku nikah bagi pasangan suami istri, (5) Surat izin mahrom dari suami/ayah bagi wanita di bawah 45 tahun yang berangkat tanpa mahrom, (6) Kartu vaksin meningitis dan COVID-19.'
        },
        {
          question: 'Berapa DP yang harus dibayar?',
          answer: 'Down payment (DP) untuk semua paket umroh adalah Rp 5.000.000 per jamaah. DP ini berfungsi untuk booking seat dan memulai proses pengurusan dokumen. DP tidak dapat dikembalikan jika jamaah membatalkan keberangkatan tanpa alasan yang sah.'
        },
        {
          question: 'Apakah bisa dicicil?',
          answer: 'Ya, kami menyediakan fasilitas cicilan melalui kerjasama dengan beberapa bank syariah seperti Bank Muamalat, BSI, dan Bank BNI Syariah. Tenor cicilan mulai dari 6 hingga 24 bulan. Untuk informasi lebih lanjut, silakan hubungi tim kami.'
        },
        {
          question: 'Bagaimana jika visa ditolak?',
          answer: 'Jika visa ditolak oleh kedutaan Arab Saudi, maka jamaah akan mendapatkan refund biaya umroh dikurangi biaya administrasi dan proses yang sudah berjalan (sekitar 10-15% dari total biaya). Kami akan membantu proses pengajuan ulang visa jika diperlukan.'
        },
        {
          question: 'Kapan batas waktu pelunasan?',
          answer: 'Pelunasan biaya umroh harus dilakukan paling lambat 30 hari (H-30) sebelum tanggal keberangkatan. Jika pelunasan tidak dilakukan tepat waktu, seat dapat dialihkan ke jamaah lain.'
        },
      ]
    },
    {
      title: 'Persiapan',
      faqs: [
        {
          question: 'Kapan manasik dilaksanakan?',
          answer: 'Manasik dilaksanakan sebanyak 5 kali pertemuan, dimulai 2 bulan sebelum keberangkatan. Jadwal manasik biasanya hari Sabtu atau Minggu untuk mengakomodasi jamaah yang bekerja. Lokasi manasik di kantor Safar Mulia Jakarta atau secara online via Zoom.'
        },
        {
          question: 'Apa saja yang perlu dibawa?',
          answer: 'Perlengkapan yang perlu dibawa meliputi: (1) Dokumen perjalanan (paspor, tiket, voucher hotel), (2) Pakaian ihram (pria) / mukena (wanita), (3) Obat-obatan pribadi, (4) Uang tunai Riyal Saudi secukupnya, (5) Peralatan mandi, (6) Sandal yang nyaman. Safar Mulia akan memberikan tas koper, buku panduan, dan perlengkapan umroh lainnya.'
        },
        {
          question: 'Bagaimana dengan vaksin?',
          answer: 'Vaksin meningitis wajib dilakukan minimal 10 hari sebelum keberangkatan. Kami akan menginformasikan jadwal vaksinasi massal atau jamaah bisa vaksin mandiri di klinik/RS yang ditunjuk Kemenkes. Vaksin COVID-19 juga diperlukan sesuai ketentuan yang berlaku.'
        },
        {
          question: 'Apakah ada buku panduan umroh?',
          answer: 'Ya, setiap jamaah akan mendapatkan buku panduan umroh eksklusif dari Safar Mulia yang berisi tata cara ibadah, doa-doa, peta lokasi, dan informasi penting lainnya. Buku ini akan dibagikan saat manasik pertama.'
        },
      ]
    },
    {
      title: 'Selama Perjalanan',
      faqs: [
        {
          question: 'Berapa jarak hotel ke Masjidil Haram?',
          answer: 'Untuk paket reguler, hotel di Makkah berjarak sekitar 300-500 meter dari Masjidil Haram (sekitar 5-10 menit berjalan kaki). Di Madinah, hotel berjarak sekitar 200-400 meter dari Masjid Nabawi. Untuk paket plus dan haji furoda, jarak hotel lebih dekat.'
        },
        {
          question: 'Bagaimana dengan makanan?',
          answer: 'Jamaah mendapatkan makan 3x sehari dengan menu Indonesia. Sarapan buffet di hotel, makan siang dan malam di restoran Indonesia atau catering. Menu yang disajikan sudah dijamin halal dan sesuai selera lidah Indonesia.'
        },
        {
          question: 'Apakah ada free time untuk ibadah pribadi?',
          answer: 'Ya, jadwal perjalanan kami dirancang dengan mempertimbangkan waktu ibadah pribadi. Setiap hari ada waktu luang sekitar 3-4 jam yang bisa digunakan jamaah untuk sholat di Masjidil Haram/Nabawi, thawaf sunnah, atau ibadah lainnya.'
        },
        {
          question: 'Bagaimana jika ada jamaah yang sakit?',
          answer: 'Tim Safar Mulia termasuk tenaga medis/perawat yang siap membantu jamaah yang sakit. Kami juga menyediakan obat-obatan dasar. Jika diperlukan penanganan lebih lanjut, jamaah akan diantar ke klinik atau rumah sakit terdekat dengan didampingi tim kami.'
        },
        {
          question: 'Apakah ada tour leader dari Safar Mulia?',
          answer: 'Ya, setiap rombongan akan didampingi oleh: (1) Tour Leader dari Safar Mulia yang berpengalaman, (2) Ustadz pembimbing untuk bimbingan ibadah, (3) Muthawwif lokal di Makkah dan Madinah. Rasio pembimbing sekitar 1:25 jamaah.'
        },
      ]
    },
    {
      title: 'Haji',
      faqs: [
        {
          question: 'Berapa lama waiting list haji reguler?',
          answer: 'Waiting list haji reguler saat ini sekitar 20-25 tahun, tergantung kuota dari Kementerian Agama dan provinsi pendaftar. Untuk informasi terbaru, silakan cek di SISKOHAT Kemenag atau hubungi tim kami.'
        },
        {
          question: 'Apa bedanya haji reguler dan furoda?',
          answer: 'Perbedaan utama: (1) Waiting list: Haji reguler antrian 20-25 tahun, furoda tanpa antrian, (2) Biaya: Reguler sesuai ketentuan pemerintah (~Rp 40-50 juta), furoda sekitar USD 15.000++, (3) Akomodasi: Reguler standar pemerintah, furoda hotel bintang 5 sangat dekat Haram, (4) Durasi: Reguler ~40 hari, furoda 15-25 hari.'
        },
        {
          question: 'Apakah Safar Mulia melayani haji?',
          answer: 'Ya, Safar Mulia melayani: (1) Haji reguler: Kami membantu pendaftaran SISKOHAT dan pendampingan selama perjalanan, (2) Haji furoda/plus: Kami menyediakan paket haji furoda dengan fasilitas premium. Untuk haji reguler, keberangkatan mengikuti kuota pemerintah.'
        },
        {
          question: 'Bagaimana cara mendaftar haji?',
          answer: 'Pendaftaran haji reguler dilakukan melalui SISKOHAT di bank penerima setoran BPIH (Bank Syariah Indonesia, Bank Muamalat, dll). Safar Mulia akan membantu proses pendaftaran dan memberikan bimbingan. Untuk haji furoda, pendaftaran langsung melalui kantor kami.'
        },
      ]
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Pertanyaan Umum
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Temukan jawaban dari pertanyaan yang sering diajukan seputar umroh dan haji bersama Safar Mulia
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.faqs.map((faq, itemIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${itemIndex}`];
                  return (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`text-primary shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          size={20}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tim customer service kami siap membantu menjawab pertanyaan Anda seputar umroh dan haji
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20umroh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                Chat via WhatsApp
              </a>
              <a
                href="tel:+62215555HAJI"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                Telepon Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Berangkat Umroh?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Jangan tunda lagi impian Anda untuk beribadah ke tanah suci. Daftar sekarang!
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

export default FAQ;
