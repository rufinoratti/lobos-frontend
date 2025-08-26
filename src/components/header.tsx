import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logoLobos from "../assets/lobosLogo.png"
import { Button } from "@/components/ui/button" // tu Button shadcn

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const goToProfile = () => navigate("/usuario")

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#132637] text-white z-50 px-4 py-3 flex justify-between items-center">
          {/* Botón hamburguesa */}
         <Menu
           className="text-white hover:bg-white/10 rounded transition-colors"
           onClick={toggleMenu}
           aria-label="Abrir menú"
         >
           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </Menu>

        {/* Logo centrado */}
        <div className="flex-1 flex flex-col items-center">
          <img src={logoLobos} alt="Logo" className="h-10 mb-1" />
          <p className="text-sm font-normal">a la palma de tu mano</p>
        </div>

        {/* Botón perfil */}
        <Button
          variant="secondary"
          size="icon"
          className="w-10 h-10 rounded-full flex items-center justify-center"
          onClick={goToProfile}
          aria-label="Ir al perfil"
        >
          <span className="text-black text-sm font-medium">RR</span>
        </Button>
      </header>

       {/* Menú desplegable */}
       <div
         className={`fixed inset-0 bg-[#EFEADF] bg-opacity-50 z-40 transition-opacity duration-300 ease-out ${
           isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
         }`}
         onClick={toggleMenu}
       >
         <div
           className={`fixed top-0 left-0 w-64 h-full bg-[#132637] text-white z-50 pt-20 px-4 transition-transform duration-300 ease-out ${
             isMenuOpen ? "translate-x-0" : "-translate-x-full"
           }`}
           onClick={(e) => e.stopPropagation()}
         >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 p-2 text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <X size={24} />
            </Button>

            <nav className="space-y-4">
              <h2 className="text-lg font-semibold mb-6">Opciones</h2>
              <div className="space-y-3">
                <a href="/usuario" className="block py-2 px-3 hover:bg-gray-800 rounded-md">Mi cuenta</a>
                <a href="#" className="block py-2 px-3 hover:bg-gray-800 rounded-md">FeedBack</a>
                <a href="#" className="block py-2 px-3 hover:bg-gray-800 rounded-md">Configuración</a>
              </div>
            </nav>
           </div>
         </div>
    </>
  )
}
