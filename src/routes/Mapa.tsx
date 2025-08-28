import Mapa from '../components/Mapa'

export default function MapaPage() {
  return (
    // Mapa full-bleed: sin header y ocupando toda la pantalla menos la navbar inferior
    <div className="w-full h-[calc(100vh-64px)] bg-transparent">
      <Mapa fullscreen />
    </div>
  )
}

  