import logo from 'assets/images/logo.svg';
import { useState } from 'react';
import hamburger from 'assets/images/icon-hamburger.svg'
import closeMenu from 'assets/images/icon-close-menu.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    console.log('test')
    setMenu(!menu);
  }
  return <nav className="container mx-auto max-w-7xl px-3 mt-10 flex flex-row justify-between items-center z-10 ">
    <img src={logo} alt="" />
    <button>
    <img src={hamburger} alt="" onClick={handleMenu} className={`h-4 md:hidden ${!menu ? "inline-block" : "hidden"}`}/>
    <img src={closeMenu} alt="" onClick={handleMenu} className={`h-4 md:hidden ${menu ? "inline-block" : "hidden"}`}/>
    </button>
    <ul className={`flex-col md:flex-row gap-x-6 text-black md:text-white md:flex absolute md:relative bg-white md:bg-transparent top-[100px] md:top-0 inset-x-0 mx-5 rounded-md  ${!menu ? "hidden" : "flex"}`}>
        <li><a href="/" className='hover:underline hover:underline-offset-1'>About</a></li>
        <li><a href="/" className='hover:underline hover:underline-offset-1'>Discover</a></li>
        <li><a href="/" className='hover:underline hover:underline-offset-1'>Get Started</a></li>
    </ul>
  </nav>;
};

export default Navbar;
