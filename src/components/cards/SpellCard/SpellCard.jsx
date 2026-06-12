import { Link } from 'react-router-dom'

function SpellCard({ id, name, description }) {
    return (
        <Link to={`/spells/${id}`}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default SpellCard