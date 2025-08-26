import CategoryCard from '@/components/CategoryCard'
import PageTransition from '../components/PageTransition'

export default function ExperienciasPage() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#F5F2EE] pt-20">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className='space-y-6'>
            {/* Categoria Sabores Lobenses */}
            <CategoryCard
              title="Sabores Lobenses"
              description="Sabores locales, bodegones con historia y nuevas propuestas para disfrutar."
              image="/saboresLobenses.png"
              href="/experiencias/sabores-lobenses"
              buttonText="Explorar mas"
            />
            {/* Categoria Paseo de Estilo */}
            <CategoryCard
              title="Paseo de Estilo"
              description="Ropa, deco y estilo con identidad propia. El paseo ideal para inspirarte y llevarte algo."
              image="/paseoDeEstilo.png"
              href="/experiencias/paseo-de-estilo"
              buttonText="Explorar mas"
            />
            {/* Categoria Escena Local */}
            <CategoryCard
              title="Escena Local"
              description="Todo lo que está pasando en Lobos, en un solo lugar."
              image="/eventos.png"
              href="/experiencias/alojamientos"
              buttonText="Explorar mas"
            />  
            {/* Categoria Profesionales */}
            <CategoryCard
              title="Profesionales"
              description="Encuentra el lugar perfecto para tu estadía en Lobos, desde acogedores B&B hasta hoteles boutique."
              image="/profesionales.png"
              href="/experiencias/escena-local"
              buttonText="Explorar mas"
            />
          </div>
          </main>
        </div>
      </PageTransition>
    )
  }
  