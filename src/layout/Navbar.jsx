import logo from 'assets/images/logo.svg';
import { useContext, useEffect, useRef } from 'react';
import hamburger from 'assets/images/icon-hamburger.svg'
import closeMenu from 'assets/images/icon-close-menu.svg'
import NavbarContext from 'context/navbar/NavbarContext';

const Navbar = () => {
  const ref = useRef()
  var { menu, dispatch } = useContext(NavbarContext)
 
  const handleMenu = () => {
    dispatch({
      type: 'SET_MENU'
    })
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if(menu && ref.current && !ref.current.contains(e.target)) {
        handleMenu()
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menu])

  return <> 
  <div className={`bg-black w-full h-screen fixed top-0 opacity-30 z-10  ${menu ? "inline-block" : "hidden"}`}></div>
  <nav className="container mx-auto max-w-7xl px-6 mt-8 md:mt-10 flex flex-row justify-between items-center z-10 w-full">
    <img src={logo} alt="" />
    <button>
    <img src={hamburger} alt="" onClick={handleMenu} className={`h-4 md:hidden ${!menu ? "inline-block" : "hidden"}`}/>
    <img src={closeMenu} alt="" onClick={handleMenu} className={`h-4 md:hidden ${menu ? "inline-block" : "hidden"}`}/>
    </button>

      <ul className={`flex-col md:flex-row gap-x-6 text-black md:text-white md:flex absolute md:relative bg-white md:bg-transparent top-[100px] md:top-0 inset-x-0 mx-5 rounded-md  ${!menu ? "hidden" : "flex"}`} ref={ref}>
          <li className='py-6 md:py-0 px-5 md:px-0'><a href="/" className='hover:underline hover:underline-offset-1 font-bold md:font-normal text-lg md:text-base'>About</a></li>
          <li className='border-t md:border-t-0 border-slate-300 w-full md:w-auto py-6 md:py-0 px-5 md:px-0'><a href="/" className='hover:underline hover:underline-offset-1 font-bold md:font-normal text-lg md:text-base'>Discover</a></li>
          <li className='border-t border-slate-300  md:border-t-0 w-full md:w-auto py-6 md:py-0 px-5 md:px-0'><a href="/" className='hover:underline hover:underline-offset-1 font-bold md:font-normal text-lg md:text-base'>Get Started</a></li>
      </ul>
  </nav>
  <div className="bg-gradient-to-b from-black w-full h-20 absolute pb-4"></div>

  </>;
};

export default Navbar;
