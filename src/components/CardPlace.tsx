import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface CardPlaceProps {
  imageUrl: string;
  title: string;
  address: string;
  category: string;
  instagramUrl?: string;
  whatsappUrl?: string;
}

export default function CardPlace({
  imageUrl,
  title,
  address,
  category,
  instagramUrl,
  whatsappUrl,
}: CardPlaceProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-2xl shadow-md overflow-hidden bg-white ">
      {/* Imagen con botón favoritos */}
      <div className="relative w-full h-35">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <Heart
            className={`w-4 h-4 ${
              favorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Texto */}
      <div className="ml-3 p-2">
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Ubicación + Redes sociales en la misma fila */}
        <div className="flex items-center justify-between text-sm text-gray-700 mt-1">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{address}</span>
          </div>

          <div className="flex gap-3">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transition"
              >
                <FaInstagram size={25} />
              </a>
            )}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-500 transition"
              >
                <FaWhatsapp size={25} />
              </a>
            )}
          </div>
        </div>

        {/* Categoría */}
        <p className="text-sm text-gray-500 mt-1">{category}</p>
      </div>
    </div>
  );
}
