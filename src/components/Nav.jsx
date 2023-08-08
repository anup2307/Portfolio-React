import { Link } from 'react-router-dom';
import '../styles/nav.css'

export default function Nav() {

 var links=[
        <Link key={1}  to="/" style = {{textDecoration: 'none', color:'white', padding:'10px'}}>
          About Me
        </Link>,
        <Link key={2}  to="/projects" style = {{textDecoration: 'none', color:'white', padding:'10px'}}>
          Projects
        </Link>,
        <Link key={3}  to="/experience" style = {{textDecoration: 'none', color:'white', padding:'10px'}}>
        Experience
        </Link>,
        <Link key={4}  to="/contact" style = {{textDecoration: 'none', color:'white', padding:'10px'}}>
            Contact
        </Link>,
        <Link key={5}  to="/resume" style = {{textDecoration: 'none', color:'white', padding:'10px'}}>
            Resume
        </Link>,
           ]

  return (
    <nav>
        <h1>Anu Priya Govindarajan</h1>
        <ul className="links">
          {links.map((link) => link)}
        </ul>  
  </nav>
  );
}