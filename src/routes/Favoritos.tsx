import PageTransition from '../components/PageTransition'

export default function FavoritosPage() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#F5F2EE] pt-20">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white-900 mb-4">Favoritos</h1>
            <p className="text-lg text-gray-600">Tus experiencias y lugares favoritos guardados.</p>
          </div>
          </main>
        </div>
      </PageTransition>
    )
  }
  