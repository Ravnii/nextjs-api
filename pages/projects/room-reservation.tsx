import Head from 'next/head'
import RoomCard from '../../components/room-cards/roomCard'

type Data = {
  documentResponse: Array<any>,
}

export default function RoomReservation({ data }: { data: Data }) {
  return (
    <>
      <Head>
        <title>Bestil Værelse</title>
      </Head>
      <div className="container mx-auto pt-12 flex flex-col items-center">
        <h1 className="text-6xl pb-14 font-bold text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          Room Reservation
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <RoomCard type={'sofa'} description={'Alle bliver friske af en tur på sofaen efter en våd aften'}/>
          <RoomCard type={'daybed'} description={"Daybed'en får en hver til at sove som en lille baby, også når resten af rummet snurrer"}/>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const url = process.env.API_HOST;
  const response = await fetch(url);
  const data: Data = await response.json();

  return {
    props: { data },
  }
}
