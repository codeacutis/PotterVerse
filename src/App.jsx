import './App.css'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import CharactersList from './components/lists/CharactersList'
import CharacterDetailPage from './pages/CharacterDetailPage'
import HousesList from './components/lists/HousesList'
import HouseDetailPage from './pages/HouseDetailPage'
import SpellsList from './components/lists/SpellsList'
import SpellDetailPage from './pages/SpellDetailPage'

import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'

function App() {
  return (
    <div>
      <main>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/characters" element={<CharactersList />}/>
          <Route path="/characters/:id" element={<CharacterDetailPage />}/>
          <Route path="/houses" element={<HousesList />}/>
          <Route path="/houses/:id" element={<HouseDetailPage />}/>
          <Route path="/spells" element={<SpellsList />}/>
          <Route path="/spells/:id" element={<SpellDetailPage />}/>
        </Route>
          
      </Routes>
      </main>
    </div>
  )
}

export default App
