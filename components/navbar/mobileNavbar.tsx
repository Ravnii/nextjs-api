import NavbarLink from './navbarLink'
import { MoonIcon as SolidMoonIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/outline'


export default function MobileNav({ open, setOpen, darkMode, setMode }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-slate-700 transform z-[1] ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col ml-4 font-normal filter drop-shadow-md mt-32">
        <span className="max-w-fit" onClick={setMode}>
          {darkMode ? (
            <SolidMoonIcon className="h-6 w-6 text-blue-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-blue-500" />
          )}
        </span>
        <NavbarLink to="/" className={`text-xl my-4`} setOpen={setOpen}>
          Home
        </NavbarLink>
        <NavbarLink to="/about" className={`text-xl my-4`} setOpen={setOpen}>
          About
        </NavbarLink>
        <NavbarLink to="/projects" className={`text-xl my-4`} setOpen={setOpen}>
          Projects
        </NavbarLink>
        <NavbarLink
          to="https://shopify.jesperravn.com"
          className={`text-xl my-4`}
          setOpen={setOpen}
        >
          Shopify
        </NavbarLink>
        <NavbarLink to="/contact" className={`text-xl my-4`} setOpen={setOpen}>
          Contact
        </NavbarLink>
      </div>
    </div>
  )
}