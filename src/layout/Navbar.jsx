import logo from 'assets/images/logo.svg';

const Navbar = () => {
  return <nav className="container mx-auto max-w-7xl px-3 mt-10 flex flex-row justify-between items-center z-10">
    <img src={logo} alt="" />
    <ul className="flex flex-row gap-x-6 text-white">
        <li><a href="/" className='hover:underline hover:underline-offset-1'>About</a></li>
        <li><a href="/" className='hover:underline hover:underline-offset-1'>Discover</a></li>
        <li><a href="/" className='hover:underline hover:underline-offset-1'>Get Started</a></li>
    </ul>
  </nav>;
};

export default Navbar;
