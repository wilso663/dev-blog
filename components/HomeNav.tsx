import Link from "next/link"
import {useState} from 'react'


const HomeNav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
    <div className="flex items-center justify-between pt-8 pb-4 mb-4">
      <Link href="/">
        <a>
          <p className="text-lg font-bold uppercase">Stephen Wilson</p>
        </a>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-xl scroll-smooth">
          <li className="font-bold cursor-pointer">
            <Link href="#about-section">
              <a>About</a>
            </Link>
          </li>
          <li className="font-bold cursor-pointer">
            <Link href="#projects-section">
              <a>Projects</a>
            </Link>
          </li>
          <li className="font-bold cursor-pointer">
            <Link href="/blog">
              <a>Blog          
              </a>
            </Link>
          </li>
          <li className="font-bold cursor-pointer">
            <Link href="#contact-section">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: left;
      }
    `}</style>
    </div>
    <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} border-b-4 border-b-black mb-8`}>
      <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-start justify-between min-h-[125px]">
        <li className="uppercase font-bold mb-3 cursor-pointer">
            <Link href="#about-section">
              <a>About</a>
            </Link>
        </li>
        <li className="uppercase font-bold mb-3 cursor-pointer">
          <Link href="#projects-section">
            <a>Projects</a>
          </Link>
        </li>
        <li className="uppercase font-bold mb-3 cursor-pointer">
          <Link href="/blog">
            <a>Blog          
            </a>
          </Link>
        </li>
        <li className="uppercase font-bold mb-3 cursor-pointer">
          <Link href="#contact-section">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </>
  )
}

export default HomeNav