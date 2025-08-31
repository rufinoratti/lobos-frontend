import React, { useMemo, useEffect, useState } from 'react'
import { LoadScript, GoogleMap, Marker, LoadScriptNext } from '@react-google-maps/api'

// --- Coordenadas por defecto (centro de Lobos) ---------------------------------
const DEFAULT_CENTER = { lat: -35.183843935925594, lng: -59.09764759513371 }

// Props del componente
type MapaProps = {
  fullscreen?: boolean;
}

/**
 * Componente Mapa (Google Maps)
 * - Lee la API key de Vite: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
 * - Usa `LoadScript` para cargar la librería JS de Google Maps en el cliente
 * - Memoiza estilos y opciones para evitar re-renders innecesarios
 * - Muestra un mensaje claro si falta la key
 */
export default function Mapa({ fullscreen = false }: MapaProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Estado para la ubicación del usuario
  const [userLocation, setUserLocation] = useState<null | { lat: number; lng: number }>(null);

  // Intentar obtener la ubicación del usuario al montar el componente
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setUserLocation(null); // Si el usuario rechaza, se mantiene null
        }
      );
    }
  }, []);

  if (!apiKey) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-red-500 text-center mt-4">No se encontró la API Key de Google Maps</p>
      </div>
    );
  }

  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: fullscreen ? '100%' : '500px',
      borderRadius: '12px',
      overflow: 'hidden',
    }),
    [fullscreen]
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: 'greedy' as const,
    }),
    []
  );

  // Usar la ubicación del usuario si está disponible, sino el centro por defecto
  const center = userLocation || DEFAULT_CENTER;

  return (
    <div className={`w-full ${fullscreen ? 'h-full' : ''} ${fullscreen ? '' : 'max-w-5xl mx-auto'}`}>
      <LoadScriptNext googleMapsApiKey={apiKey} loadingElement={<div>Cargando mapa...</div>}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16} options={mapOptions}>
          {/* Solo mostrar el pin de la ubicación del usuario si está disponible */}
          {userLocation && <Marker position={userLocation} title="Tu ubicación" />}
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
}
