import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20paket%20umroh"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg whatsapp-pulse transition-transform hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
