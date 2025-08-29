import React, { useMemo } from 'react'
import { LoadScript, GoogleMap, Marker, LoadScriptNext } from '@react-google-maps/api'

// --- Coordenadas por defecto (centro de Lobos) ---------------------------------
const DEFAULT_CENTER = { lat: -35.183843935925594, lng: -59.09764759513371 }

// Props del componente
type MapaProps = {
  fullscreen?: boolean // si true, el mapa ocupará el 100% del contenedor padre
}

/**
 * Componente Mapa (Google Maps)
 * - Lee la API key de Vite: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
 * - Usa `LoadScript` para cargar la librería JS de Google Maps en el cliente
 * - Memoiza estilos y opciones para evitar re-renders innecesarios
 * - Muestra un mensaje claro si falta la key
 */
export default function Mapa({ fullscreen = false }: MapaProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  // Si no hay API key, avisamos y no intentamos renderizar el mapa
  if (!apiKey) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-red-500 text-center mt-4">No se encontró la API Key de Google Maps</p>

      </div>
    )
  }

  // Estilos inline del contenedor del mapa (evita depender de clases externas)
  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: fullscreen ? '100%' : '500px',
      borderRadius: '12px',
      overflow: 'hidden',
    }),
    [fullscreen]
  )

  // Opciones del mapa memoizadas para evitar recrearlas en cada render
  const mapOptions = useMemo(() => ({
    disableDefaultUI: true, // ocultar UI por defecto
    zoomControl: true, // permitir control de zoom
    gestureHandling: 'greedy' as const, // táctil: permitir arrastre/zoom más consistente
  }), [])

  return (
    <div className={`w-full ${fullscreen ? 'h-full' : ''} ${fullscreen ? '' : 'max-w-5xl mx-auto'}`}>
      {/* LoadScript carga la librería JS de Google Maps en el cliente y expone window.google */}
      <LoadScriptNext googleMapsApiKey={apiKey} loadingElement={<div>Cargando mapa...</div>}>
        <GoogleMap mapContainerStyle={containerStyle} center={DEFAULT_CENTER} zoom={16} options={mapOptions}>
          {/* Marcador central (puedes reemplazar por tus propios marcadores) */}
          <Marker position={DEFAULT_CENTER} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  )
}
