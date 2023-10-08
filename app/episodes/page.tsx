import React from 'react'
import getAllEpisodes from '@/api/getAllEpisodes'
import Link from 'next/link';

export default async function page() {

    const episodesData = await getAllEpisodes();
    const episodes = episodesData.results

    const content = (
        <section>
            <h2>
                <Link href='/'>Home</Link>
            </h2>

            <br />
            {episodes.map(episode => {
                return (
                    <>
                        <p key={episode.id}>{episode.name}</p>
                    </>
                )
            })}

        </section>
    )
    return content
}
