import PageTransition from '../components/PageTransition'

export default function UsuarioPage() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#F5F2EE] pt-20 p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">U</span>
            </div>
          </div>
  
          <h1 className="text-2xl font-bold text-center mb-4">Mi Perfil</h1>
  
          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="font-semibold text-gray-700">Nombre</h3>
              <p className="text-gray-600">Rufino Ratti</p>
            </div>
  
            <div className="border-b pb-2">
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">usuario@ejemplo.com</p>
            </div>
  
            <div className="border-b pb-2">
              <h3 className="font-semibold text-gray-700">Configuración</h3>
              <p className="text-gray-600">Ajustes de la cuenta</p>
            </div>
                      </div>
          </div>
        </div>
      </PageTransition>
    )
  }
  