import Image from 'next/image'
import frontpageBanner from '../public/images/frontpage_banner.jpg'

export default function Home() {
  return (
    <>
      <Image
        priority
        src={frontpageBanner}
        alt="Frontpage banner"
        className="object-cover w-full h-[83vh] absolute top-0 -z-10"
      />
      <div className='absolute bg-black/60 top-0 left-0 right-0 bottom-0 -z-[5] h-[83vh]'></div>
      <div className='text-white relative top-[21vh] md:top-[32vh] -z-[1]'>
        <h1 className='text-5xl font-light tracking-[5.5px] uppercase text-center leading-tight pb-[10px]'>Jesper Ravn Jørgensen</h1>
        <p className='text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2 pb-[5px]'>Software Developer : Scrum master : Azure Dev</p>
        <p className='text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2'>PHP - C# - Next.js - Node.js - TypeScript</p>
      </div>
    </>
  )
}
