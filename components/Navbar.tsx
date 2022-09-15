import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <header className="navbar--container py-4 flex flex-col md:flex-row justify-between">
      <p className="text-lg font-bold">Stephen Wilson</p>
      <div className="navbar--links flex flex-col md:flex-row">
        <Link href="/blog">
          <a href="" className="text-lg font-bold mr-3">Blog</a>
        </Link>
        <Link href="/">
          <a href="" className="text-lg font-bold text-gray-300 mr-3">Portfolio</a>
        </Link>
        <Link href="https://www.github.com/wilso663">
          <a href="" className="text-lg font-bold text-gray-300 mr-3">Github</a>
        </Link>
        <Link href="https://www.linkedin.com/in/wilso663">
          <a href="" className="text-lg font-bold text-gray-300">Linkedin</a>
        </Link>
      </div>
    </header>
  )
}

export default Navbar