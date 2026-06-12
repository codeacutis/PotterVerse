import { useState, useEffect } from 'react'
import { fetchAllSpells } from '../../../services/potterverseAPI'
import SpellCard from '../../cards/SpellCard/SpellCard'

function SpellsList() {
    const [spells, setSpells] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        let cancelled = false
        async function load() {
            try {
                const data = await fetchAllSpells()
                if (!cancelled) setSpells(data)
            } catch (err) {
                if (!cancelled) setError(err.message)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }
        load()
        return () => { cancelled = true }
    }, [])

    const filtered = spells.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <section>
            <label htmlFor="busca-feitico">Buscar por nome: </label>
            <input
                id="busca-feitico"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Ex.: expelliarmus"
            />
            <p>Mostrando {filtered.length} feitiço(s)</p>
            {loading && <p>Carregando feitiços...</p>}
            {error && <p role="alert">{error}</p>}
            {!loading && !error && filtered.length === 0 && <p>Nenhum feitiço encontrado.</p>}
            {!loading && !error && filtered.map(spell => (
                <SpellCard key={spell.id} {...spell} />
            ))}
        </section>
    )
}

export default SpellsList