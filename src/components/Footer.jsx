import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';

  export default function Footer() {
    return <div>
            <div className="bg-[#21325e] flex justify-center items-center text-gray-300">
              <a className='mr-3 p-3 hover:scale-150 hover:shadow-lg hover:shadow-pink-600 ' href="https://github.com/anup2307" > <FaGithub size={30} /></a>
              <a className=' hover:scale-150 hover:shadow-lg hover:shadow-pink-600' href='www.linkedin.com/in/anu-priya-govindarajan-29506877' > <FaLinkedin size={30} /></a>
            </div>
         </div>

  }