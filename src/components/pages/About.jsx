

export default function About() {
    return (
      <div name='about' className='w-full h-screen bg-[#21325e] text-gray-300'>
      <div className='flex flex-row justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div >
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Anu Priya Govindarajan
            </p>
            <p className="pt-3"> 
                Hi, I am a <span className="font-bold">Full Stach web Developer</span>  with a passion for learning and developing. 
                I come with 8 year experience in different parts of the SDLC cycle.
                I am passionate about building excellent software that improves
                the lives of those around me. I completed my full stack web development course from UNC, chapel hill university.
            </p>
            <div className="">
                <h4>Skills</h4>
          <ul>
          <li className="">
            <h2> Front-End</h2>
           <span>
             ReactJS, HTML, CSS, BootStrap, TailwindCSS, Handlebars, 
           </span>
         </li>
         <li className="">
             <h2>Back-End</h2>
             <span>
               NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, Sequlize ORM, ODM
             </span>
          </li>
           <li className="">
            <h2>Languages</h2>
             <span>JavaScript, COBOL</span>
           </li>
       </ul>
        </div>
      
          </div>
        </div>
      </div>
    </div>
      // <div className=" w-full h-screen bg-[#21325e] text-white">
      //   <div className=" text-2xl mx-auto flex justify-center">
      //     Hi! 
      //     I am Anu Priya Govindarajan,I am a <span>Full Stach web Developer</span> Software developer with a passion for learning and developing and 
      //      with a 8 year experience in different parts of the SDLC cycle. 
      //   </div>
      //   <div className="">
      //     <h2>Skills</h2>
      //     <ol className="">
      //     <li className="">
      //       <h2> Front-End</h2>
      //       <span>
      //         ReactJS, HTML, CSS, BootStrap, TailwindCSS, Handlebars, 
      //       </span>
      //     </li>
      //     <li className="">
      //       <h2>Back-End</h2>
      //       <span>
      //         NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, Sequlize ORM, ODM
      //       </span>
      //     </li>
      //     <li className="">
      //       <h2>Languages</h2>
      //       <span>JavaScript, COBOL</span>
      //     </li>
      //   </ol>
      //   </div>
      // </div>
    )
}