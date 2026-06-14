import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from '../../services/potterverseAPI'
import './CharacterDetailPage.css'

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
        <div className='detail-page'>
            <Link to='/characters' className='back-link'>&larr; Voltar</Link>
            {loading && <p className='status-message'>Carregando...</p>}
            {error && <p className='error-message'>{error}</p>}
            {!loading && !character && <p className='status-message'>Personagem não encontrado.</p>}
            {character && (
                <div className='detail-card'>
                    <div className='detail-image-wrapper'>
                        {character.imageUrl
                            ? <img src={character.imageUrl} alt={character.name} className='detail-image' />
                            : <div className='detail-image-placeholder'>?</div>
                        }
                    </div>
                    <div className='detail-info'>
                        <h2 className='detail-name'>{character.name}</h2>
                        <div className='detail-fields'>
                            <div className='detail-field'>
                                <span className='field-label'>Casa</span>
                                <span className='field-value'>{character.house || '—'}</span>
                            </div>
                            <div className='detail-field'>
                                <span className='field-label'>Espécie</span>
                                <span className='field-value'>{character.species || '—'}</span>
                            </div>
                            <div className='detail-field'>
                                <span className='field-label'>Gênero</span>
                                <span className='field-value'>{character.gender || '—'}</span>
                            </div>
                            <div className='detail-field'>
                                <span className='field-label'>Ancestralidade</span>
                                <span className='field-value'>{character.ancestry || '—'}</span>
                            </div>
                            <div className='detail-field'>
                                <span className='field-label'>Patrono</span>
                                <span className='field-value'>{character.patronus || '—'}</span>
                            </div>
                            <div className='detail-field'>
                                <span className='field-label'>Ator</span>
                                <span className='field-value'>{character.actor || '—'}</span>
                            </div>
                            <div className='detail-field'>
                                <span className='field-label'>Status</span>
                                <span className={`field-value ${character.alive ? 'alive' : 'deceased'}`}>
                                    {character.alive ? 'Vivo' : 'Falecido'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CharacterDetailPage