import React from 'react'
import {Link} from 'react-router-dom'


function Navbar({toggle}) {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-sans" role='navigation'>
            <Link className="pl-8" to="/">RAFADAN</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
       
         
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/Menu">Menu</Link>
                <Link className="p-4" to="/About">About</Link>
                <Link className="p-4" to="/Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
