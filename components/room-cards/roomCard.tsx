import Image from 'next/image'
import Couch from '../../public/images/couch.jpg'
import { useState } from 'react'
import RoomReservationModal from './roomResevationModal'

export default function RoomCard({ type, describtion }: { type: string, describtion: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <article
      onClick={() => setIsModalOpen(!isModalOpen)}
      className="overflow-hidden transition-all origin-center bg-white shadow-none relative rounded-2xl h-96 w-64 cursor-pointer"
    >
      <figure className="object-bottom aspect-square overflow-hidden">
        <Image priority src={Couch} alt="sofa" />
      </figure>
      <div className="p-6 text-center">
        <h2 className="uppercase">{type}</h2>
        <p>{describtion}</p>
      </div>
      <RoomReservationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        type={type}
      />
    </article>
  )
}
