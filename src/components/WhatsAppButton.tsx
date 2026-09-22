import { FaWhatsapp } from "react-icons/fa6";
import { getWhatsAppLink } from "@/lib/whatsapp";

/**
 * Floating WhatsApp chat button shown on every page.
 * Uses the standard wa.me click-to-chat link — no backend required.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Infinite Solutions on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
