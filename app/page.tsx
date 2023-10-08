import type { Metadata } from 'next'
import getAllCharacters from '@/api/getAllCharacters'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Characters'
}

export default async function Home() {

  return (
    <main>
      <h1>Home page</h1>
      <Link href='characters'>Characters</Link>
    </main>

  )
}
