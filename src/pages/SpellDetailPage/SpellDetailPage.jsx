import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchAllSpells } from '../../services/potterverseAPI'
import Header from '../../components/staticcomponents/Header/Header'
import Navbar from '../../components/staticcomponents/Navbar/Navbar'

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
        <div>
            <Link to="/spells">&larr; Voltar</Link>
            {loading && <p>Carregando...</p>}
            {error && <p role="alert">{error}</p>}
            {!loading && !spell && <p>Feitiço não encontrado.</p>}
            {spell && (
                <div>
                    <h2>{spell.name}</h2>
                    <p><strong>Descrição:</strong> {spell.description || '—'}</p>
                </div>
            )}
        </div>
    )
}

export default SpellDetailPage