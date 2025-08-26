import logoLobos from '../assets/logoLobos.jpg'
export default function HomePage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={logoLobos} alt="Lobos" />
            <p className="text-lg text-gray-600">Proximamente...a la palma de tu mano</p>
          </div>
        </main>
      </div>
    )
  }
  