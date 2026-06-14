import CharacterCard from '../../cards/CharacterCard/CharacterCard'
import { useState, useEffect } from 'react'
import { fetchAllCharacters, fetchCharactersByHouse } from '../../../services/potterverseAPI'
import { FaSearch } from 'react-icons/fa'
import './CharactersList.css'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refine, setRefine] = useState('')
  const [selectedHouse, setSelectedHouse] = useState('')
  const [selectedType, setSelectedType] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      try {
        setLoading(true)
        setError(null)
        const data = (selectedHouse) ? await fetchCharactersByHouse(selectedHouse) : await fetchAllCharacters(40)
        if (!cancelled) setCharacters(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    loadCharacters()
    return () => { cancelled = true }
  }, [selectedHouse])

  const refineList = characters
      .filter(p => selectedType === 'students' ? p.isStudent : selectedType === 'staff' ? p.isStaff : true)
      .filter(p => p.name.toLowerCase().includes(refine.toLowerCase()))

  return (
    <section className='characters-section'>
      <div className='characters-toolbar'>
        <div className='search-group'>
          <FaSearch className='search-icon' />
          <input
            type='search'
            value={refine}
            onChange={(e) => setRefine(e.target.value)}
            placeholder='Buscar por nome...'
          />
        </div>
        <span className='characters-count'>Mostrando {refineList.length} personagem(ns)</span>
      </div>
    <div className='select-area'>
      <div>
        <select className='house-select' value={selectedHouse} onChange={(e) => setSelectedHouse(e.target.value)}>
          <option value=''>Casa</option>
          <option value='Gryffindor'>Grifinória</option>
          <option value='Hufflepuff'>Lufa-Lufa</option>
          <option value='Ravenclaw'>Corvinal</option>
          <option value='Slytherin'>Sonserina</option>
        </select>
      </div>
      <div>
        <select className='house-select' value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value=''>Tipo</option>
          <option value='students'>Estudantes</option>
          <option value='staff'>Funcionários</option>
        </select>
      </div>
    </div>

      {loading && <p className='status-message'>Carregando personagens...</p>}
      {error && <p className='error-message'>{error}</p>}
      {!loading && !error && refineList.length === 0 && (
        <p className='status-message'>Nenhum personagem encontrado.</p>
      )}
      {!loading && !error && refineList.length > 0 && (
        <div className='characters-grid'>
          {refineList.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CharacterList