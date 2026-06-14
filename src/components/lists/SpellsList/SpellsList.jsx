import { useState, useEffect } from 'react'
import { fetchAllSpells } from '../../../services/potterverseAPI'
import SpellCard from '../../cards/SpellCard/SpellCard'
import { FaSearch } from 'react-icons/fa'
import './SpellsList.css'

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
        <section className='spells-section'>
            <div className='spells-toolbar'>
                <div className='search-group'>
                    <FaSearch className='search-icon' />
                    <input
                        type='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Buscar por nome...'
                    />
                </div>
                <span className='spells-count'>Mostrando {filtered.length} feitiço(s)</span>
            </div>
            {loading && <p className='status-message'>Carregando feitiços...</p>}
            {error && <p className='error-message'>{error}</p>}
            {!loading && !error && filtered.length === 0 && <p className='status-message'>Nenhum feitiço encontrado.</p>}
            {!loading && !error && filtered.length > 0 && (
                <div>
                    <p className='spells-index-title'>Caderno de Feitiços e Encantamentos</p>
                    <div className='spells-columns'>
                        {filtered.map(spell => (
                            <SpellCard key={spell.id} {...spell} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default SpellsList