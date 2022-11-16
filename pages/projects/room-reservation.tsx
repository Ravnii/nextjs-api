import Head from 'next/head'
import RoomCard from '../../components/room-cards/roomCard'

export default function RoomReservation() {
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
          <RoomCard type={'sofa'} describtion={'Alle bliver friske af en tur på sofaen efter en våd aften'}/>
          <RoomCard type={'daybed'} describtion={"Daybed'en får en hver til at sove som en lille baby, også når resten af rummet snurrer"}/>
        </div>
      </div>
    </>
  )
}
