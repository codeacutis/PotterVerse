import { Link } from "react-router-dom"
import noLoadImage from '../../../assets/noLoadImage.webp'
import './CharacterCard.css'

function CharacterCard({id, name, house, imageUrl, species}){
  return (
    <Link to={`/characters/${id}`} className="character-link">
      <div className="character-card">
        <img src={imageUrl || noLoadImage} alt={name} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = noLoadImage; }}/>

        <h2>{name}</h2>
        <p>Casa: {house}</p>
        <p>Espécie: {species}</p>
      </div>
    </Link>
  )
}

export default CharacterCard