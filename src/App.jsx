import './App.css'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage'
import CharactersList from './components/lists/CharactersList/CharactersList'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage'
import SpellsList from './components/lists/SpellsList/SpellsList'
import SpellDetailPage from './pages/SpellDetailPage/SpellDetailPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './components/staticcomponents/Header/Header'
import Navbar from './components/staticcomponents/Navbar/Navbar'
import Footer from './components/staticcomponents/Footer/Footer'

import { Route, Routes, useLocation } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <div>
      {!isLoginPage && <Header />}
      {!isLoginPage && <Navbar />}
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
          <Route path="/about" element={<AboutPage />}/>
        </Route>

        <Route path="*" element={<NotFoundPage />}/>
          
      </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App
