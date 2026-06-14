import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className='home-page'>
            <div className='home-hero'>
                <h2 className='home-title'>Bem-vindo ao PotterVerse</h2>
                <p className='home-subtitle'>Explore o universo mágico de Harry Potter</p>
            </div>
            <div className='home-cards'>
                <div className='home-card' onClick={() => navigate('/characters')}>
                    <span className='home-card-icon'>⚡</span>
                    <h3>Personagens</h3>
                    <p>Conheça os bruxos e habitantes do universo mágico</p>
                </div>
                <div className='home-card' onClick={() => navigate('/spells')}>
                    <span className='home-card-icon'>🪄</span>
                    <h3>Feitiços</h3>
                    <p>Descubra os encantamentos e poderosos feitiços</p>
                </div>
                <div className='home-card' onClick={() => navigate('/about')}>
                    <span className='home-card-icon'>📜</span>
                    <h3>Sobre</h3>
                    <p>Saiba mais sobre o projeto PotterVerse</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage