import Image from 'next/image'
import Couch from '../../public/images/couch.jpg'
import { useState } from 'react'
import RoomReservationModal from './roomResevationModal'

export default function RoomCard({ type, description }: { type: string, description: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <article
      onClick={() => setIsModalOpen(!isModalOpen)}
      className="overflow-hidden transition-all origin-center bg-white shadow-md relative rounded-2xl h-96 w-64 cursor-pointer"
    >
      <figure className="object-bottom aspect-square overflow-hidden">
        <Image priority src={Couch} alt="sofa" />
      </figure>
      <div className="p-6 text-center">
        <h2 className="uppercase">{type}</h2>
        <p>{description}</p>
      </div>
      <RoomReservationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        type={type}
      />
    </article>
  )
}
