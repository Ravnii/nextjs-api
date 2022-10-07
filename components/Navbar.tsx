import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navigationRoutes = ['about', 'projects', 'Shopify', 'contact']

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= window.innerHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  const router = useRouter();
  const path = router.asPath;

  if (router.asPath !== '/hotel') {
    return (
      <nav className={navbar ? "nav_container-effect" : "nav_container"}>
        <div className='nav_items'>
          {navigationRoutes.map((singleRoute) => {
            return (
              <NavigationLink
                key={singleRoute}
                href={`/${singleRoute}`}
                text={singleRoute}
                path={path}
                effect={navbar}
              />
            )
          })}
        </div>
      </nav>
    );
  }
  return null;
}

function NavigationLink({ href, text, path, effect }) {
  const isActive = path === (href === '/home' ? '/' : href)
  return (
    <Link href={href === '/home' ? '/' : href} passHref>
      <a
        href={href === '/home' ? '/' : href}
        className={`${isActive && 'nav_item_active'} ${effect ? 'nav_item_effect' : 'nav_item'}`}
      >
        {text}
      </a>
    </Link>
  )
}
