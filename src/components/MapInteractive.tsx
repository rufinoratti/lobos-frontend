import { useEffect, useRef, useState } from 'react'
import CardPlace from './CardPlace'

type Place = {
  id: string
  title: string
  lat: number
  lng: number
  address: string
  category: string
  imageUrl: string
}

const PLACES: Place[] = [
  {
    id: 'el-escritorio',
    title: 'El Escritorio',
    lat: -34.586,
    lng: -58.445,
    address: '9 de Julio, 57',
    category: 'RestoBar',
    imageUrl: '/imagenIconos/imagenCardPlace.png',
  },
  {
    id: 'la-portena',
    title: 'La Porteña',
    lat: -34.588,
    lng: -58.447,
    address: 'Salgado y Junin',
    category: 'Confiteria',
    imageUrl: '/imagenLugares/laPortena.png',
  },
]

export default function MapInteractive() {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const leafletRef = useRef<any>(null)
  const [selected, setSelected] = useState<Place | null>(null)
  const googleKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY
  // DEBUG: mostrar la key en consola (temporal)
  console.log('GOOGLE_KEY:', googleKey)

  // load Google Maps if key provided, otherwise Leaflet
  useEffect(() => {
    if (googleKey) {
      // load Google Maps JS
      if (!(window as any).google) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}`
        script.async = true
        script.onload = initGoogle
        document.body.appendChild(script)
      } else initGoogle()
    } else {
      // fallback to leaflet
      if (!(window as any).L) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)

        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.async = true
        script.onload = initLeaflet
        document.body.appendChild(script)
      } else initLeaflet()
    }

    function initGoogle() {
      const g = (window as any).google
      if (!mapRef.current) return
      const map = new g.maps.Map(mapRef.current, {
        center: { lat: PLACES[0].lat, lng: PLACES[0].lng },
        zoom: 15,
        disableDefaultUI: true,
      })

      // add place markers
      PLACES.forEach((p) => {
        const marker = new g.maps.Marker({ position: { lat: p.lat, lng: p.lng }, map })
        marker.addListener('click', () => setSelected(p))
      })

      // try to get device location and show user marker
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords
            map.setCenter({ lat: latitude, lng: longitude })
            new g.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map,
              title: 'Tu ubicación',
              icon: {
                path: g.maps.SymbolPath.CIRCLE,
                scale: 7,
                fillColor: '#2B8AF7',
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: '#fff',
              },
            })
          },
          (err) => console.warn('geolocation error', err),
          { enableHighAccuracy: true }
        )
      }
    }

    function initLeaflet() {
      const L = (window as any).L
      if (!mapRef.current || leafletRef.current) return

      const map = L.map(mapRef.current, {
        center: [PLACES[0].lat, PLACES[0].lng],
        zoom: 15,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map)

      PLACES.forEach((p) => {
        const marker = L.marker([p.lat, p.lng]).addTo(map)
        marker.on('click', () => setSelected(p))
      })

      // geolocation for leaflet
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords
            map.setView([latitude, longitude], 15)
            const userMarker = L.circleMarker([latitude, longitude], {
              radius: 6,
              fillColor: '#2B8AF7',
              color: '#ffffff',
              weight: 2,
              fillOpacity: 1,
            }).addTo(map)
            userMarker.bindPopup('Tu ubicación').openPopup()
          },
          (err) => console.warn('geolocation error', err),
          { enableHighAccuracy: true }
        )
      }

      map.on('moveend', () => {
        const center = map.getCenter()
        console.log('map moved to', center)
      })

      leafletRef.current = map
    }
  }, [googleKey])

  return (
    <div className="w-full">
      <div ref={mapRef} className="w-full h-[60vh] rounded-xl overflow-hidden" />

      <div className="p-4">
        {selected ? (
          <div>
            <CardPlace
              imageUrl={selected.imageUrl}
              title={selected.title}
              address={selected.address}
              category={selected.category}
              instagramUrl={undefined}
              whatsappUrl={undefined}
            />
          </div>
        ) : (
          <p className="text-center text-gray-600">Toca un marcador para ver detalles</p>
        )}
      </div>
    </div>
  )
}
