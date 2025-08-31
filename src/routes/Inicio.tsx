
import CategoryButton from "@/components/CategoryButton"
import { Utensils, Shirt, Calendar, Briefcase } from "lucide-react"
import InicioCarousel from "@/components/InicioCarousel"
import PageTransition from "@/components/PageTransition"
import InfoMap from "@/components/InfoMap"


export default function HomePage() {
  const lobosImages = [
    "/plazaLobos.png",
    "/lagunaLobos.png",
  ];



  return (
    <PageTransition>
      <div className="bg-[#F5F2EE]">
        {/* Mantener solo padding-top en main: padding horizontal se aplicará por secciones */}
        <main className="pt-25">
          <div className="px-4">

        <div className="mb-8">
          <h2 className="text-2xl font-normal mb-4" style={{ fontFamily: 'Geologica, sans-serif' }}>
            Descubre tu {["domingo 📅", "lunes 📅", "martes 📅", "miércoles 📅", "jueves 📅", "viernes 📅", "sábado 📅"][new Date().getDay()]}
          </h2>
          
          <InicioCarousel images={lobosImages} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-normal mb-4" style={{ fontFamily: 'Geologica, sans-serif' }}>Experiencias lobenses</h2>
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
        </main>
      </div>
    </PageTransition>
  )
}
