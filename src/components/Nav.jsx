import { Link } from 'react-router-dom';
import '../styles/nav.css'

export default function Nav() {

  var links = [
    <Link key={1} to="/" style={{color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
      About Me
    </Link>,
    <Link key={5} to="/skills" style={{color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
      Skills
    </Link>,
    <Link key={2} to="/projects" style={{color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
      Projects
    </Link>,
    <Link key={3} to="/experience" style={{color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
      Experience
    </Link>,
    <Link key={4} to="/contact" style={{color: 'white', padding: '10px' }} className="hover:underline hover:decoration-pink-600 ">
      Contact
    </Link>,

  ]

  return (
    <nav className='sticky top-0'>
      <h1 >Anu Priya Govindarajan</h1>
      <ul className="links">
        {links.map((link) => link)}
      </ul>
    </nav>
  );
}