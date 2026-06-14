import { Link } from 'react-router-dom'
import './SpellCard.css'

function SpellCard({ id, name}) {
    return (
        <Link to={`/spells/${id}`} className='spell-link'>
            <div className='spell-card'>
                <h3>{name}</h3>
            </div>
        </Link>
    )
}

export default SpellCard