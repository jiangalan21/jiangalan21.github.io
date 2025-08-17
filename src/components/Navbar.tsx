export const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 flex space-x-4">

          <div><a href="#top">Home</a></div> {/*make this a logo?*/}

          <div><a href="#projects">Projects</a></div>

        </nav>
    </>
  )
}

export default Navbar;
