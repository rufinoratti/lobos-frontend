import CategoryCard from '@/components/CategoryCard'
import PageTransition from '../components/PageTransition'

export default function ExperienciasPage() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#F5F2EE] pt-20">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-regular text-black mb-4">experiencias</h1>
          </div>
          <div className='space-y-6'>
            <CategoryCard
              title="Sabores Lobenses"
              description="Explora experiencias emocionantes en la naturaleza, desde senderismo hasta deportes extremos."
              image="/saboresLobenses.png"
              href="/experiencias/outdoor"
              buttonText="Explorar mas"
            />
            <CategoryCard
              title="Gastronomía Local"
              description="Descubre los sabores auténticos de la región con experiencias culinarias únicas."
              image="/images/food.jpg"
              href="/experiencias/gastronomia"
              buttonText="Explorar sabores"
            />
          </div>
          </main>
        </div>
      </PageTransition>
    )
  }
  