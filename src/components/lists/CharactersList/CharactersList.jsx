import CharacterCard from '../../cards/CharacterCard/CharacterCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllCharacters } from '../../../services/potterverseAPI'


function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchAllCharacters(20)
        if (!cancelled) setCharacters(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadCharacters()
    return () => { cancelled = true }
  }, [])


  const [refine, setRefine] = useState('');
  const refineList = characters.filter((p) => p.name.toLowerCase().includes(refine.toLowerCase()))
  return (
    <section>
      <label htmlFor="busca">Buscar por nome: </label>
      <input
        id="busca"
        type="search"
        value={refine}
        onChange={(e) => setRefine(e.target.value)}
        placeholder="Ex.: harry"
      />
      <p className="mensagem-info">
        Mostrando {refineList.length} Personagens(s)
      </p>

      {loading && <p>Carregando Personagem...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && refineList.length === 0 && (
        <p>Nenhum Personagem encontrado</p>
      )}
      {!loading && !error && refineList.length > 0 && (
        <div>
          {refineList.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CharacterList