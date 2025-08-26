import { Link, useLocation } from "react-router-dom"
import { Home, MapPin, Heart, Calendar } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Experiencias", href: "/experiencias", icon: Calendar },
  { name: "Mapa", href: "/mapa", icon: MapPin },
  { name: "Favoritos", href: "/favoritos", icon: Heart },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.href
          const isFavoritos = item.href === "/favoritos" && isActive

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`relative flex flex-col items-center justify-center py-2 px-1 transition-colors duration-300 ease-out 
                ${
                  isFavoritos
                    ? "text-red-600"
                    : isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <Icon
                className={`w-6 h-6 mb-1 transition-colors duration-300 ease-out ${
                  isFavoritos
                    ? "text-red-600"
                    : isActive
                    ? "text-black"
                    : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs font-medium transition-colors duration-300 ease-out ${
                  isFavoritos
                    ? "text-red-600"
                    : isActive
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute top-0 h-px w-6 origin-center rounded-b-full transition-all duration-300 ease-out 
                  ${isFavoritos ? "bg-red-600" : "bg-black"}
                  ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
              />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
