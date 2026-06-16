import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './NotFoundPage.css'

function NotFoundPage() {
    const { login } = useAuth()

    return (
        <div className='not-found-page'>
            <h1 className='not-found-code'>4🔮4</h1>
            <h2 className='not-found-title'>Página não encontrada</h2>
            <p className='not-found-message'>Parece que você se perdeu na Floresta Proibida...</p>
            <Link className='not-found-link' to={login ? '/home' : '/login'}>Voltar para Hogwarts</Link>
        </div>
    )
}

export default NotFoundPage
