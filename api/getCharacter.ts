export default async function getCharacter(characterId: string) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)

    if (!res.ok) throw new Error('Failed to fetch character');
}