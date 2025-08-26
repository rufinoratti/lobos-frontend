import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./routes/Inicio"
import ExperienciasPage from "./routes/Experiencias"
import MapaPage from "./routes/Mapa"
import FavoritosPage from "./routes/Favoritos"
import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-16 bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiencias" element={<ExperienciasPage />} />
          <Route path="/mapa" element={<MapaPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  )
}

export default App
