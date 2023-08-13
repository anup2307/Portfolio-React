

export default function About() {
    return (
      <div  className='w-full h-screen bg-[#21325e] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Hi, I'm <span className="text-pink-600 font-bold text-4xl">Anu priya Govindarajan</span> , nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a Full Stach web Developer  with a passion for learning and developing. 
                  I come with 8 year experience in different parts of the SDLC cycle.
                  I am passionate about building excellent software that improves
                  the lives of those around me. I completed my full stack web development course from UNC, chapel hill university.</p>  
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-4'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                Skills
              </p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <h3 className="text-pink-600 font-bold text-3xl p-2">Front-End</h3>
            </div>
            <div>
                <p className="p-3"> ReactJS, HTML, CSS, BootStrap, TailwindCSS, Handlebars</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <h3 className="text-pink-600 font-bold text-3xl p-2">Back-End</h3>
            </div>
            <div>
                <p className="p-3"> NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <h3 className="text-pink-600 font-bold text-3xl p-2">Languages</h3>
            </div>
            <div>
                <p className="p-3"> JavaScript</p>
            </div>
          </div>
          <div className='mt-8 flex justify-center pb-8 pl-4'>
              <a className='text-4xl font-bold inline border-b-4 border-pink-600' href='#'>
                Download My Resume
              </a>
            </div>
        </div>



    </div>
    )
}