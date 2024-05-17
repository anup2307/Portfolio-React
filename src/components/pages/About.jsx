import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';


export default function About() {
  return (
    <div className=' w-full h-screen bg-[#21325e] text-gray-300 overflow-auto nvopacity'>
      <div className='flex justify-center items-center w-full'>
        <div className='max-w-[900px] mt-32 fadeInRight'>
          <div className=' pb-3 pl-4 leading-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              About Me
            </p><br />
            <p className="mt-4">Hi, I'm <span className="text-pink-600 font-bold text-3xl">Anu priya Govindarajan, </span> </p>
            <p>I am a <span className="text-pink-400">Full Stach web Developer </span> with a passion for learning and developing.
              I come with 7+ years of experience in different parts of the SDLC cycle.
              I am passionate about building excellent software that improves
              the lives of those around me. I completed my full stack web development course from UNC, chapel hill university.</p><br />
            <p>My primary entry into software was as a developer, over the years I have played many roles, a developer, tester, production support, mentoring juniors , business analyst, MOM.
              Currently, I have evolved into a full-stack developer, showcasing my versatility by offering solutions that span both client and server-side development.
              My commitment to learning and embracing new challenges makes me a good candidate in creating innovative web solutions.
            </p>
            <br /><p>I always love to learn new things, be it learning about cooking or computer programming. The quest for knowledge is never truly over.</p>
          </div>
          <div className="bg-[#21325e] flex items-center text-gray-300 ">
            <a className='mr-3 p-3 hover:scale-150 hover:shadow-lg hover:shadow-pink-600 ' href="https://github.com/anup2307" > <FaGithub size={30} /></a>
            <a className=' hover:scale-150 hover:shadow-lg hover:shadow-pink-600' href='https://www.linkedin.com/in/anu-priya-govindarajan-29506877' > <FaLinkedin size={30} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}