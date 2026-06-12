import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from '../../services/potterverseAPI'
import Header from '../../components/staticcomponents/Header/Header'
import Navbar from '../../components/staticcomponents/Navbar/Navbar'

function CharacterDetailPage() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        async function load() {
            try {
                const all = await fetchAllCharacters()
                if (!cancelled) setCharacter(all.find(c => c.id === id) ?? null)
            } catch (err) {
                if (!cancelled) setError(err.message)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }
        load()
        return () => { cancelled = true }
    }, [id])

    return (
        <div>
            <Header />
            <Navbar />
            <Link to="/characters">&larr; Voltar</Link>
            {loading && <p>Carregando...</p>}
            {error && <p role="alert">{error}</p>}
            {!loading && !character && <p>Personagem não encontrado.</p>}
            {character && (
                <div>
                    {character.imageUrl && <img src={character.imageUrl} alt={character.name} />}
                    <h2>{character.name}</h2>
                    <p><strong>Casa:</strong> {character.house}</p>
                    <p><strong>Espécie:</strong> {character.species}</p>
                    <p><strong>Gênero:</strong> {character.gender}</p>
                    <p><strong>Ancestralidade:</strong> {character.ancestry || '—'}</p>
                    <p><strong>Patrono:</strong> {character.patronus || '—'}</p>
                    <p><strong>Ator:</strong> {character.actor || '—'}</p>
                    <p><strong>Status:</strong> {character.alive ? 'Vivo' : 'Falecido'}</p>
                </div>
            )}
        </div>
    )
}

export default CharacterDetailPage