import Link from 'next/link'

export const Navbar = () => {
  return (
    <>
        <nav className="flex space-x-4">

          <div><Link href="/">Home</Link></div>

          <div><Link href="/projects">Projects</Link></div>

          <div><Link href="/contact">Contact</Link></div>

        </nav>
    </>
  )
}

export default Navbar;
