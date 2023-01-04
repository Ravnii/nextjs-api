import { useState } from 'react'
import Link from 'next/link'
import NavbarLink from './navbarLink'
import Image from 'next/image'
import { useRouter } from 'next/router'
import profilePicture from '../../public/images/profile.jpg'
import { MoonIcon as SolidMoonIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/outline'
import MobileNavbar from './mobileNavbar'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const home = useRouter().pathname === '/'

  function setMode(event) {
    let toggle = document
      .getElementsByTagName('html')[0]
      .classList.toggle('dark')

    setDarkMode(toggle)
  }

  return (
    <nav
      className={`${'flex filter drop-shadow-md px-4 py-4 h-20 items-center justify-between sm:justify-around'} ${
        home ? 'bg-transparent md:text-white' : 'bg-white dark:bg-slate-700'
      }`}
    >
      <MobileNavbar
        open={open}
        setOpen={setOpen}
        darkMode={darkMode}
        setMode={setMode}
      />

      <Link href="/" className="text-2xl font-semibold">
        <div className="flex flex-row cursor-pointer">
          <Image
            src={profilePicture}
            className="mr-3 rounded-full z-[2]"
            alt="profile picture"
            height={55}
            width={55}
            onClick={() => {
              setOpen(false)
            }}
          />
          <span className="hidden md:block self-center whitespace-nowrap text-xl font-semibold ml-4">
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
            className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5 bg-black' : ''
            } ${home && !open ? 'bg-white' : 'bg-black'} ${
              home && open ? 'dark:bg-white' : ''
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            } ${home && !open ? 'bg-white' : 'bg-black'} ${
              home && open ? 'dark:bg-white' : ''
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            } ${home && !open ? 'bg-white' : 'bg-black'} ${
              home && open ? 'dark:bg-white' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavbarLink to="/" className={`text-xl m-4`} setOpen={setOpen}>
            Home
          </NavbarLink>
          <NavbarLink to="/about" className={`text-xl m-4`} setOpen={setOpen}>
            About
          </NavbarLink>
          {/*<NavbarLink to="/projects" className={`text-xl m-4`} setOpen={setOpen}>
            Projects
          </NavbarLink>*/}
          <NavbarLink
            to="https://shopify.jesperravn.com"
            className={`text-xl m-4`}
            setOpen={setOpen}
          >
            Shopify
          </NavbarLink>
          <NavbarLink to="/contact" className={`text-xl m-4`} setOpen={setOpen}>
            Contact
          </NavbarLink>
          <span className="max-w-fit m-4 cursor-pointer" onClick={setMode}>
            {darkMode ? (
              <SolidMoonIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </span>
        </div>
      </div>
    </nav>
  )
}
