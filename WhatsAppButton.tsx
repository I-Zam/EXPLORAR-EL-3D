import { MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * WhatsApp Floating Button Component
 * 
 * Displays a floating WhatsApp button that allows users to send messages
 * about 3D models they liked. The button includes a tooltip on hover
 * and opens WhatsApp with a pre-filled message.
 */

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp number: +52 464 123 1975 (Mexico)
  const whatsappNumber = "524641231975";
  
  // Pre-filled message template
  const message = encodeURIComponent(
    "Hola Translate3D 👋\n\nEncontré un modelo 3D que me encanta y me gustaría saber si pueden imprimirlo. ¿Cuál sería el costo y tiempo de entrega?\n\nGracias 🙌"
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 z-40 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Envía tu modelo favorito
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>

        {/* Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
          <MessageCircle className="w-7 h-7 text-white" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-75"></div>
        </div>

        {/* Floating Label */}
        <div
          className={`absolute bottom-0 right-0 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          Chat
        </div>
      </a>

      {/* Background Blur on Hover */}
      {isHovered && (
        <div className="fixed inset-0 z-30 pointer-events-none"></div>
      )}
    </>
  );
}
