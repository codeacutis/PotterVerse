import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function NotFoundPage() {
    const { login } = useAuth()

    return (
        <div>
            <h1>4🔮4</h1>
            <h2>Página não encontrada</h2>
            <p>Parece que você se perdeu na Floresta Proibida...</p>
            <Link to={login ? '/home' : '/login'}>Voltar para Hogwarts</Link>
        </div>
    )
}

export default NotFoundPage
