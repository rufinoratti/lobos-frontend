import SearchBar from "@/components/SearchBar"
import CategoryButton from "@/components/CategoryButton"
import CategoryCard from "@/components/CategoryCard"
import InicioCarousel from "@/components/InicioCarousel"
import { Utensils, Shirt, Calendar, User } from "lucide-react"

export default function HomePage() {
  const lobosImages = [
    "/plazaLobos.png",
    "/lagunaLobos.png",
    
  ]

  return (
    <div className="min-h-screen bg-[#F5F2EE]">
      <main className="px-4 pt-30">
        <SearchBar placeholder="Explorar Lobos" />

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Descubre tu semana</h2>
          <InicioCarousel images={lobosImages} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">Experiencias lobenses</h2>
          <div className="grid grid-cols-4 gap-4">

            <CategoryButton title="Gastronomía" 
              image="/imagenIconos/iconoCubiertos.png" 
              href="/sabores-lobenses"
              />
            <CategoryButton title="Moda" 
              image="/imagenIconos/iconoModa.png"  
              href="/paseo-de-estilo"
               />
            <CategoryButton title="Eventos" 
             image="/imagenIconos/iconoEventos.png" 
             href="/eventos"
              />
            <CategoryButton title="Profesionales" 
              image="/imagenIconos/iconoProfesional.png" 
              href="/profesionales" 
              />
          </div>
          <div className="py-5">
            <h2 className="text-2xl text-black mb-4">Que hacer en lobos?</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
