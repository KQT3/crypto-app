import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto</title>
      </Head>
      <main>
        <Link href={"https://chaincuet.com/"}>Chaincue Technologies</Link>
      </main>
    </>
  )
}
