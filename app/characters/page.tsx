import type { Metadata } from 'next'
import getAllCharacters from '@/api/getAllCharacters'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Characters'
}

export default async function CharactersPage() {
  const charactersData = await getAllCharacters()
  const users = charactersData.results

  return (
    <section>
      <h2>
        <Link href='/'>Home</Link>
      </h2>
      <br />
      {users.map(user => {
        return (
          <>
          <p key={user.id}>{user.name}</p>
          </>
          )
      })}
    </section>
  )
}
