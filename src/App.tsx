import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./routes/Inicio"
import ExperienciasPage from "./routes/Experiencias"
import MapaPage from "./routes/Mapa"
import FavoritosPage from "./routes/Favoritos"
import SaboresLobensesPage from "./routes/SaboresLobenses"
import Navbar from "./components/navbar"
import Header from "./components/header"

function AppLayout() {
  const { pathname } = useLocation()
  const hideHeader = pathname.startsWith('/mapa')

  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiencias" element={<ExperienciasPage />} />
        <Route path="/mapa" element={<MapaPage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/experiencias/sabores-lobenses" element={<SaboresLobensesPage />} />
      </Routes>
      <Navbar />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
