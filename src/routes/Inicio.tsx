
import CategoryButton from "@/components/CategoryButton"
import { Utensils, Shirt, Calendar, Briefcase } from "lucide-react"
import InicioCarousel from "@/components/InicioCarousel"
import PageTransition from "@/components/PageTransition"
import InfoMap from "@/components/InfoMap"

export default function HomePage() {
  const lobosImages = [
    "/plazaLobos.png",
    "/lagunaLobos.png",
    
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F5F2EE]">
        {/* Mantener solo padding-top en main: padding horizontal se aplicará por secciones */}
        <main className="pt-25">
          <div className="px-4">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Descubre tu semana</h2>
          <InicioCarousel images={lobosImages} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">Experiencias lobenses</h2>
          <div className="grid grid-cols-4 gap-4">

            <CategoryButton title="Gastronomía" 
              icon={<Utensils size={40} />} 
              href="/experiencias/sabores-lobenses"
            />
            <CategoryButton title="Moda" 
              icon={<Shirt size={40} />}  
              href="/paseo-de-estilo"
            />
            <CategoryButton title="Eventos" 
              icon={<Calendar size={40} />} 
              href="/eventos"
            />
            <CategoryButton title="Profesionales" 
              icon={<Briefcase size={40} />} 
              href="/profesionales" 
            />
          </div>
          </div>
          </div>

          {/* InfoMap se coloca fuera del contenedor con px-4 para ser full-bleed */}
          <div>
            <InfoMap />
          </div>

          <div className="px-4">
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
