import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchAllSpells } from '../../services/potterverseAPI'
import './SpellDetailPage.css'

function SpellDetailPage() {
    const { id } = useParams()
    const [spell, setSpell] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        async function load() {
            try {
                const all = await fetchAllSpells()
                if (!cancelled) setSpell(all.find(s => s.id === id) ?? null)
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
        <div className='spell-detail-page'>
            <Link to='/spells' className='back-link'>&larr; Voltar</Link>
            {loading && <p className='status-message'>Carregando...</p>}
            {error && <p className='error-message'>{error}</p>}
            {!loading && !spell && <p className='status-message'>Feitiço não encontrado.</p>}
            {spell && (
                <div className='spell-detail-card'>
                    <h2 className='spell-detail-name'>{spell.name}</h2>
                    <div className='spell-detail-divider' />
                    <p className='spell-detail-description'>{spell.description || '—'}</p>
                </div>
            )}
        </div>
    )
}

export default SpellDetailPage