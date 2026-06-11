import './App.css'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage'
import CharactersList from './components/lists/CharactersList/CharactersList'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage'
import SpellsList from './components/lists/SpellsList/SpellsList'
import SpellDetailPage from './pages/SpellDetailPage/SpellDetailPage'

import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'

function App() {
  return (
    <div>
      <main>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/characters" element={<CharactersList />}/>
          <Route path="/characters/:id" element={<CharacterDetailPage />}/>
          <Route path="/spells" element={<SpellsList />}/>
          <Route path="/spells/:id" element={<SpellDetailPage />}/>
        </Route>
          
      </Routes>
      </main>
    </div>
  )
}

export default App
