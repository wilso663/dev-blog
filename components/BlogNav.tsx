import Link from 'next/link';
import { useState } from 'react'

const BlogNav: React.FC = () => {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
    <div className="flex items-center justify-between pt-8 pb-4">
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

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-xl">
          <li className="font-bold text-gray-300 hover:text-cyan-700">
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className="hover:text-cyan-700">
            <Link href="/blog">
              <a className="font-bold">Blog</a>
            </Link>
          </li>
          <li className="font-bold text-gray-300 hover:text-cyan-700">
            <a className="flex" href="https://www.github.com/wilso663" target="_blank" rel="noreferrer">  Github          
              <svg className="mt-0.5 ml-2 fill-current" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </li>
          <li className="font-bold text-gray-300 hover:text-cyan-700">
            <a className="flex" href="https://www.linkedin.com/in/wilso663" target="_blank" rel="noreferrer">Linkedin
              <svg className="ml-2 mt-0.5 fill-current" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
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
        <li className="font-bold text-gray-300 uppercase">
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className="font-bold uppercase">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="uppercase font-bold text-gray-300">
          <a className="flex" href="https://www.github.com/wilso663" target="_blank" rel="noreferrer">Github
            <svg className="ml-2" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </li>
        <li className="uppercase font-bold text-gray-300 mb-3">
          <a className='flex' href="https://linkedin.com/in/wilso663" target="_blank" rel="noreferrer">Linkedin
            <svg className="ml-2" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </>
  );
}

export default BlogNav