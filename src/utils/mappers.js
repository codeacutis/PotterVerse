export function mapCharacterFromApi(apiData) {
  const HOUSE_LABELS = {
    Gryffindor: 'Grifinória', Slytherin: 'Sonserina',
    Hufflepuff: 'Lufa-Lufa',  Ravenclaw: 'Corvinal',
  }

  const GENDER_LABELS = {
    male: 'Masculino', female: 'Feminino',
  }

  const SPECIES_LABELS = {
    human: 'Humano', 'half-giant': 'Meio-gigante', werewolf: 'Lobisomem',
    ghost: 'Fantasma', vampire: 'Vampiro', goblin: 'Goblin',
    cat: 'Gato', 'half-human': 'Meio-humano',
  }

  const ANCESTRY_LABELS = {
    'pure-blood': 'Sangue puro', 'half-blood': 'Mestiço',
    'muggle-born': 'Nascido trouxa', muggle: 'Trouxa',
    squib: 'Squib', 'half-blood, possibly pure-blood': 'Mestiço',
  }

  const capitalize = (str) => str
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : ''

  const house = HOUSE_LABELS[apiData.house] ?? apiData.house ?? 'Sem casa'
  const gender = GENDER_LABELS[apiData.gender] ?? capitalize(apiData.gender) ?? '—'
  const species = SPECIES_LABELS[apiData.species] ?? capitalize(apiData.species) ?? '—'
  const ancestry = ANCESTRY_LABELS[apiData.ancestry] ?? capitalize(apiData.ancestry) ?? '—'
  const patronus = apiData.patronus ? capitalize(apiData.patronus) : '—'

  return {
    id: apiData.id,
    name: apiData.name,
    house,
    species,
    gender,
    ancestry,
    patronus,
    actor: apiData.actor || '—',
    alive: apiData.alive,
    imageUrl: apiData.image || '',
    isStudent: apiData.hogwartsStudent ?? false,
    isStaff: apiData.hogwartsStaff ?? false,
  }
}

export function mapSpellFromApi(apiData) {
  return {
    id: apiData.id,
    name: apiData.name,
    description: apiData.description,
  }
}
