import logoLobos from '../assets/lobosLogo.png'
import PageTransition from '../components/PageTransition'

export default function HomePage() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#F5F2EE] pt-20">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center" >
            <img src={logoLobos} alt="Lobos" />
            <p className="text-lg text-gray-600">Proximamente...a la palma de tu mano</p>
                      </div>
          </main>
        </div>
      </PageTransition>
    )
  }
  