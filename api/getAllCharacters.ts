export default async function getAllCharacters() {
    

        const res = await fetch('https://rickandmortyapi.com/api/character');

        if (!res.ok) throw new Error('Failed to fetch all characters');

        const data: { info: Info, results: Character[] } = await res.json();


  return data
}
