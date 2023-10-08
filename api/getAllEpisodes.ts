

export default async function EpisodesPage() {
    const res = await fetch('https://rickandmortyapi.com/api/episode')

    if (!res.ok) throw new Error('Failed to fetch all episodes')
    const data: { info: Info, results: Episode[] } = await res.json()

    return data
}
