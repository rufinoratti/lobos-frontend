import { Link } from 'react-router-dom'

const InfoMap = () => {
  // Para hacer el bloque full-bleed (sin márgenes a izquierda/derecha) usamos
  // un contenedor con width:100vw y margin-left calculado para centrar correctamente
  const fullBleedStyle: React.CSSProperties = {
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
  }

  return (
    <div style={fullBleedStyle} className="shadow-lg border overflow-hidden flex flex-row h-60">
      {/* Panel izquierdo: información y acción */}
      <div className="w-1/2 bg-white p-4 flex flex-col justify-center">
        <h1 className="text-2xl font-bold">🌎 Tu guia en lobos</h1>
        <p className="text-gray-600 mt-2">Descubrí tiendas y lugares cercanos.</p>

          {/* Botón: diseño más minimalista y redondeado */}
          <Link
            to="/mapa"
            className="mt-4 w-28 text-center px-4 py-2 bg-[#CCB999] text-black rounded-full shadow-sm self-center font-medium tracking-wide text-sm transition-colors duration-150 hover:brightness-95"
          >
            Explorar
          </Link>
      </div>

  {/* Contenedor derecho - Mapa (embed de Google Maps) */}
  <div className="w-1/2 h-full">
        <iframe
          title="Mapa - Centro de Lobos"
          className="w-full h-full"
          src="https://maps.google.com/maps?q=-35.1838439,-59.0976476&z=15&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default InfoMap;
