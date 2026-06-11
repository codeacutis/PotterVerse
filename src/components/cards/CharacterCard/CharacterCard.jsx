import { Link } from "react-router-dom"

function CharacterCard({id, name, house, imageUrl, species}){
  return (
    <Link to={`/character/${id}`} className="character-link">
      <div className="character-card">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>House: {house}</p>
        <p>Espécie: {species}</p>

      </div>
    </Link>
  )
}

export default CharacterCard