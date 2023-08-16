import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import {
  Animate,
  initTE,
} from "tw-elements";

initTE({ Animate });

export default function About() {
  return (
    <div className='w-full h-screen bg-[#21325e] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[800px] w-full'>
          <div className=' pb-8 pl-4 leading-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              About Me
            </p><br />
            <p className="mt-4">Hi, I'm <span className="text-pink-600 font-bold text-2xl">Anu priya Govindarajan, </span> </p>
            <p>I am a <span className="text-pink-400">Full Stach web Developer </span> with a passion for learning and developing.
              I come with 8 year experience in different parts of the SDLC cycle.
              I am passionate about building excellent software that improves
              the lives of those around me. I completed my full stack web development course from UNC, chapel hill university.</p><br />
            <p>My primary entry into software was as a developer, but over the years I have played many roles, a developer, tester, in production support, mentoring juniors , business analyst, MOM :).
              The Role as a Business Analyst actually made me realize how much I enjoyed coding, and being tired of the break finally i wanna do something for myself.
            </p>
            <br /><p>I've always had a love for learning, be it learning about cooking or computer programming. The quest for knowledge is never truly over.</p>
            <div className="w-64 mt-3 ">
              <a className='mr-3 shadow-lg shadow-pink-600/50' href="https://github.com/anup2307" ><GitHubIcon /></a>
              <a href='https://www.linkedin.com/' ><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}