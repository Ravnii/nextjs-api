import Link from "next/link"
import { useRouter } from "next/router"

export default function NavLink({ to, className, setOpen, children }) {
  const router = useRouter()
  const isActive = router.pathname === to

  return (
    <Link
      href={to}
      className={`${className} ${
        isActive
          ? 'underline decoration-sky-500'
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