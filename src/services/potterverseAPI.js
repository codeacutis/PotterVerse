import { mapCharacterFromApi, mapSpellFromApi } from '../utils/mappers'

const BASE_URL = 'https://hp-api.onrender.com/api'

async function parseResponse(res, msg) {
  if (!res.ok) throw new Error(msg)
  return res.json()
}

export async function fetchAllCharacters(limit) {
  const res = await fetch(`${BASE_URL}/characters`);
  const data = await parseResponse(res, 'Não foi possível carregar os personagens.');
  return data.slice(0, limit).map(mapCharacterFromApi);
}

export async function fetchCharactersByHouse(house) {
  const res = await fetch(`${BASE_URL}/characters/house/${house}`)
  const data = await parseResponse(res, `Não foi possível carregar personagens da casa ${house}.`)
  return data.map(mapCharacterFromApi)
}

export async function fetchStudents() {
  const res = await fetch(`${BASE_URL}/characters/students`)
  const data = await parseResponse(res, 'Não foi possível carregar os estudantes.')
  return data.map(mapCharacterFromApi)
}

export async function fetchStaff() {
  const res = await fetch(`${BASE_URL}/characters/staff`)
  const data = await parseResponse(res, 'Não foi possível carregar os professores.')
  return data.map(mapCharacterFromApi)
}

export async function fetchAllSpells() {
  const res = await fetch(`${BASE_URL}/spells`)
  const data = await parseResponse(res, 'Não foi possível carregar os feitiços.')
  return data.map(mapSpellFromApi)
}
