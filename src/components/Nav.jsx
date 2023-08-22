import { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#21325e] text-gray-300'>
      <div>
        <h2 className='text-2xl text-pink-600'>AG</h2>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li><Link to="/" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          About Me
        </Link></li>
        <li><Link to="/skills" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Skills
        </Link></li>
        <li><Link to="/projects" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Projects
        </Link></li>
        <li><Link to="/experience" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Experience
        </Link></li>
        <li><Link to="/contact" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Contact
        </Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#21325e] flex flex-col justify-center items-center opacity-100'
        }>
        <li className='py-6 text-3xl'><Link onClick={handleClick} to="/" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          About Me
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} to="/skills" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Skills
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} to="/projects" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Projects
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} to="/experience" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Experience
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} to="/contact" style={{ color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
          Contact
        </Link></li>
      </ul>
    </div>
  );
};

export default Navbar;