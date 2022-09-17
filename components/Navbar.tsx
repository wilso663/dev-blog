import Link from "next/link"

type NavbarProps = {
  isBlogPage? : boolean;
}

const blackTextClass = 'text-black'
const grayTextClass = 'text-gray-300'

const Navbar: React.FC<NavbarProps> = ({isBlogPage}) => {
  return (
    <header className="navbar--container py-4 flex flex-col md:flex-row justify-between">
      <p className="text-lg font-bold">Stephen Wilson</p>
      <div className="navbar--links flex flex-col md:flex-row">
        <Link href="/">
          <a href="/" className={`text-lg font-bold mr-3 ${!isBlogPage? blackTextClass : grayTextClass}`}>Portfolio</a>
        </Link>
        <Link href="/blog">
          <a href="/blog" className={`text-lg font-bold mr-3 ${isBlogPage? blackTextClass : grayTextClass}`}>Blog</a>
        </Link>

        <a href="https://www.github.com/wilso663" target="_blank" className="text-lg font-bold text-gray-300 mr-3">Github</a>

        <a href="https://www.linkedin.com/in/wilso663" target="_blank" className="text-lg font-bold text-gray-300">Linkedin</a>

      </div>
    </header>
  )
}

export default Navbar