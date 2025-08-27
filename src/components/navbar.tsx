import { Link, useLocation } from "react-router-dom"
import { Home, MapPin, Heart, Calendar } from "lucide-react"

const navItems = [
  {
    name: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    name: "Experiencias",
    href: "/experiencias",
    icon: Calendar,
  },
  {
    name: "Mapa",
    href: "/mapa",
    icon: MapPin,
  },
  {
    name: "Favoritos",
    href: "/favoritos",
    icon: Heart,
  },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 py-3 pt-0">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          const isFavoritos = item.href === "/favoritos" && isActive

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`relative flex flex-col items-center justify-center py-2 px-1 transition-all duration-500 ease-out transform ${
                isFavoritos 
                  ? "text-red-600 scale-105" 
                  : isActive 
                    ? "text-black scale-105" 
                    : "text-gray-600 hover:text-gray-800 hover:scale-105"
              }`}
            >
              {item.href === "/favoritos" ? (
                <Heart
                  className={`w-6 h-6 mb-1 transition-all duration-500 ease-out transform ${
                    isFavoritos 
                      ? "text-red-600 scale-110 fill-current" 
                      : "text-gray-600 scale-100"
                  }`}
                />
              ) : (
                <Icon
                  className={`w-6 h-6 mb-1 transition-all duration-500 ease-out transform ${
                    isActive 
                      ? "text-black scale-110" 
                      : "text-gray-600 scale-100"
                  }`}
                />
              )}
              <span
                className={`text-xs font-medium transition-all duration-500 ease-out transform ${
                  isFavoritos 
                    ? "text-red-600 scale-105" 
                    : isActive 
                      ? "text-black scale-105" 
                      : "text-gray-600 scale-100"
                }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute top-0 h-0.5 w-8 origin-center rounded-full transition-all duration-500 ease-out transform ${
                  isFavoritos ? "bg-red-600" : "bg-black"
                } ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-transparent to-current opacity-0 transition-opacity duration-500 ease-out rounded-lg ${
                  isActive ? "opacity-5" : ""
                }`}
              />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
