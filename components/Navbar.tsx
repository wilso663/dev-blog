import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <header className="py-2">
      <Link href="/">
        <a href="" className="text-2xl font-bold text-green-500">The blog</a>
      </Link>

    </header>
  )
}

export default Navbar