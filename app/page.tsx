import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Characters'
}

export default async function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="./characters">Characters</Link>
      <br />
      <Link href='./episodes'>Episodes</Link>
    </main>

  )
}
