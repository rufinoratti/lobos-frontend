import PageTransition from '../components/PageTransition'
import logoLobos from '../assets/lobosLogo.png'
export default function HomePage() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#F5F2EE] flex flex-col justify-center items-center">
          <img className='mx-auto mb-6 w-60 h-auto drop-shadow-lg' 
          src={logoLobos} alt="Lobos" />
          <p className="text-lg text-gray-700 font-medium text-center">Próximamente...<br />a la palma de tu mano</p>
        </div>
      </PageTransition>
    )
  }
  