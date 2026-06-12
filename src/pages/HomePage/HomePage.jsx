import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Header from '../../components/staticcomponents/Header/Header'
import Navbar from '../../components/staticcomponents/Navbar/Navbar'

function HomePage() {
    const { user, signOut } = useAuth()

    return (
        <div>
            <Header />
            <Navbar />
            <h2>Bem-vindo ao universo de Harry Potter{user?.name ? `, ${user.name}` : ''}!</h2>
            <p>Explore personagens e feitiços de Harry Potter.</p>
            <nav>
                <Link to="/characters">Ver Personagens</Link>
                <Link to="/spells">Ver Feitiços</Link>
                <Link to="/about">Sobre</Link>
            </nav>
            <button onClick={signOut}>Sair</button>
        </div>
    )
}

export default HomePage