export function mapCharacterFromApi(apiData) {
  const HOUSE_LABELS = {
    Gryffindor: 'Grifinória', Slytherin: 'Sonserina',
    Hufflepuff: 'Lufa-Lufa',  Ravenclaw: 'Corvinal',
  }

  const house = HOUSE_LABELS[apiData.house] ?? apiData.house ?? 'Sem casa'

  return {
    id: apiData.id,
    name: apiData.name,
    house,
    species: apiData.species,
    gender: apiData.gender,
    ancestry: apiData.ancestry,
    patronus: apiData.patronus,
    actor: apiData.actor,
    alive: apiData.alive,
    imageUrl: apiData.image || '',
  }
}

export function mapSpellFromApi(apiData) {
  return {
    id: apiData.id,
    name: apiData.name,
    description: apiData.description,
  }
}
