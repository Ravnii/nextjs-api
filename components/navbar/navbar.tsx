import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import profilePicture from '../../public/images/profile.jpg'

function NavLink({ to, className, setOpen, children }) {
  const router = useRouter()
  const isActive = router.pathname === to

  return (
    <Link
      href={to}
      className={`${className} ${
        isActive
          ? 'underline decoration-sky-500 uppercase'
          : 'hover:underline hover:decoration-sky-500'
      }`}
      onClick={() => {
        setOpen(false)
      }}
    >
      {children}
    </Link>
  )
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col ml-4 font-normal filter drop-shadow-md mt-32">
        <NavLink to="/" className={`text-xl my-4`} setOpen={setOpen}>
          Home
        </NavLink>
        <NavLink to="/about" className={`text-xl my-4`} setOpen={setOpen}>
          About
        </NavLink>
        <NavLink to="/projects" className={`text-xl my-4`} setOpen={setOpen}>
          Projects
        </NavLink>
        <NavLink
          to="https://shopify.jesperravn.com"
          className={`text-xl my-4`}
          setOpen={setOpen}
        >
          Shopify
        </NavLink>
        <NavLink to="/contact" className={`text-xl my-4`} setOpen={setOpen}>
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const home = useRouter().pathname === '/'

  return (
    <nav
      className={`${'flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center justify-between sm:justify-around'} ${
        home ? 'bg-transparent text-white' : ''
      }`}
    >
      <MobileNav open={open} setOpen={setOpen} />

      <Link href="/" className="text-2xl font-semibold">
        <div className="flex flex-row cursor-pointer">
          <Image
            src={profilePicture}
            className="mr-3 rounded-full"
            alt="profile picture"
            height={55}
            width={55}
          />
          <span className="hidden md:block self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-4">
            Jesper Ravn Jørgensen
          </span>
        </div>
      </Link>

      <div className="flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/" className={`text-xl m-4`} setOpen={setOpen}>
            Home
          </NavLink>
          <NavLink to="/about" className={`text-xl m-4`} setOpen={setOpen}>
            About
          </NavLink>
          <NavLink to="/projects" className={`text-xl m-4`} setOpen={setOpen}>
            Projects
          </NavLink>
          <NavLink
            to="https://shopify.jesperravn.com"
            className={`text-xl m-4`}
            setOpen={setOpen}
          >
            Shopify
          </NavLink>
          <NavLink to="/contact" className={`text-xl m-4`} setOpen={setOpen}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
