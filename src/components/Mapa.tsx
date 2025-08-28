// src/components/Mapa.tsx
import React from "react"
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api"

// Coordenadas del centro de Lobos
const center = { lat: -35.183843935925594, lng: -59.09764759513371 }

const defaultContainerStyle = {
  width: '100%',
  height: '500px', // altura por defecto cuando no es fullscreen
  borderRadius: '12px',
  overflow: 'hidden',
}

const fullscreenContainerStyle = {
  width: '100%',
  height: '100%', // ocupará el 100% del contenedor padre (que será calc(100vh - navbar))
}

type MapaProps = {
  fullscreen?: boolean
}

export default function Mapa({ fullscreen }: MapaProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return (
      <p className="text-red-500 text-center mt-4">
        No se encontró la API Key de Google Maps
      </p>
    )
  }

  const style = fullscreen ? fullscreenContainerStyle : defaultContainerStyle

  return (
    <div className={`w-full ${fullscreen ? 'h-full' : ''} ${fullscreen ? '' : 'max-w-5xl mx-auto'} shadow-md border border-gray-200 rounded-xl overflow-hidden`}>
      <LoadScriptNext googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={style}
          center={center}
          zoom={14}
          options={{
            disableDefaultUI: true, // sin botones innecesarios
            zoomControl: true, // solo control de zoom
          }}
        >
          {/* Marcador central */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  )
}
