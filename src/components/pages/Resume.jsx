export default function Resume(){
    return  (
      <div className=' h-screen bg-[#21325e]  p-16'>
          <h1 className=' p-0 mb-3 text-2xl'>Download <a href='../../assets/Anu Priya govindarajan.docx' target="_blank">My Resume</a></h1>
          <p className='text-2xl text-white font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <div className='w-full flex flex-row mt-3'>
            <div className='sm:text-right text-2xl font-bold'>
              <h3 className="text-pink-600 font-bold text-2xl">Front-End</h3>
            </div>
            <div>
                <p className=" text-white p-2"> ReactJS, HTML, CSS, BootStrap, TailwindCSS, Handlebars</p>
            </div>
          </div>
          <div className='w-full flex flex-row mt-3'>
            <div className='sm:text-right text-2xl font-bold'>
              <h3 className="text-pink-600 font-bold text-2xl">Back-End</h3>
            </div>
            <div>
                <p className="text-white p-2"> NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB</p>
            </div>
          </div>
          <div className='w-full flex flex-row mt-3'>
            <div className='sm:text-right text-2xl font-bold'>
              <h3 className="text-pink-600 font-bold text-2xl">Languages</h3>
            </div>
            <div>
                <p className="text-white p-2"> JavaScript</p>
            </div>
          </div>
      </div>
      )
}