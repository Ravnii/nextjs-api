import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Jesper Ravn Jørgensen - Projects</title>
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold dark:text-white">Projects</h1>

        <p className="mt-3 text-2xl dark:text-white">
          This is a list of all my projects
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full h-[32rem]">
          <Link
            href="https://blog.jesperravn.com"
            className="flex flex-wrap items-center justify-around w-36 h-36 bg-neutral-300 border-black rounded shadow-xl"
          >
            Angular project - testing things out
          </Link>

          <Link
            href="/projects/ss"
            className="flex flex-wrap items-center justify-around w-36 h-36 bg-neutral-300 border-black rounded shadow-xl"
          >
            Handball statistics
          </Link>

          <Link
            href="/projects/room-reservation"
            className="flex flex-wrap items-center justify-around w-36 h-36 bg-neutral-300 border-black rounded shadow-xl"
          >
            A projects that uses an Azure microservice backend
          </Link>
        </div>
      </main>
    </div>
  )
}
