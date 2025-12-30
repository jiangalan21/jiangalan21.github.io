'use client';
import { useState } from 'react';

{/** add a hover effect that moves when you move mouse over */}
export const Navbar = () => {

  const [toggled, setToggled] = useState(false);

  return (
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 flex justify-between py-4 px-3 space-x-2">
          
          <div><a href="#about" className="text-base md:text-lg lg:text-xl gradient-text-yellow">Alan Jiang</a></div>
          

          <input id="menu-toggle" type="checkbox" className="peer hidden" />

          <div className="md:hidden cursor-pointer text-white" onClick={() => setToggled(!toggled)}>
            ☰
          </div>
          
          {toggled ? (

            <ul className="absolute top-10 left-0 w-full bg-black text-center space-y-2">
              <li className="md:hidden px-10 pt-4 opacity-80 hover:opacity-100 transition-opacity">
                  <a href="#about" className="text-lg" onClick={() => setToggled(!toggled)}>About</a>
              </li>
            <li className="md:hidden px-10 py-4 opacity-80 hover:opacity-100 transition-opacity">
              
              <a href="#projects" className="text-lg" onClick={() => setToggled(!toggled)}>Projects</a>
            </li>
          </ul>

          ):(
            null
          ) }
          

          <ul className="hidden md:flex space-x-4">
            <div><a href="#about" className="text-sm md:text-base">About</a></div> {/*make this a logo?*/}
            <div><a href="#projects" className="text-sm md:text-base">Projects</a></div>
            <div><a href="#stuff" className="text-sm md:text-base">Stuff</a></div>
          </ul>

        </nav>

  )
}

export default Navbar;
