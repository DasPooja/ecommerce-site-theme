import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Ekomart from './pages/Ekomart'
import Marketpro from './pages/Marketpro'
import Electro from './pages/Electro'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Top Theme Switcher */}
        <div className="bg-gray-800 text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <span className="text-sm font-semibold">Select Theme:</span>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white text-sm font-semibold">Ekomart</Link>
              <Link to="/marketpro" className="text-gray-300 hover:text-white text-sm font-semibold">Marketpro</Link>
              <Link to="/electro" className="text-gray-300 hover:text-white text-sm font-semibold">Electro</Link>
            </nav>
          </div>
        </div>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Ekomart />} />
            <Route path="/marketpro" element={<Marketpro />} />
            <Route path="/electro" element={<Electro />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App