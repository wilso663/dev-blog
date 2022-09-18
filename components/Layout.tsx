import Navbar from './HomeNav'
import Head from 'next/head'

type NavbarProps = {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<NavbarProps> = ({ children, pageTitle }: NavbarProps) => {
  return (
    <>
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle}/>
    </Head>
    <div className="max-w-prose mx-auto px-4">
      <Navbar />
      <main className="pt-4 pb-12">{children}</main>
    </div>
    </>
  )
}

export default Layout