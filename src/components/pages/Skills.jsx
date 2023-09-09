import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="h-screen bg-[#21325e] flex flex-col justify-center items-center">
      <div className="fadeInRight">
        <h1 className=' p-0 mb-8 text-2xl text-white'>Download <a href='/AnuPriyaGovindarajan.docx' download target="_blank" className="border-b-4 border-pink-600 font-bold">My Resume</a></h1>
        <h2 className='inline border-b-4 border-pink-600 text-2xl text-white font-bold '> Skills </h2>
        <div className='w-full flex flex-row mt-3'>
          <div className='sm:text-right text-2xl '>
            <h3 className="text-pink-600 font-bold text-2xl">Front-End - </h3>
          </div>
          <div>
            <p className=" text-white p-1 text-xl ">ReactJS, HTML, CSS, BootStrap, TailwindCSS, Handlebars</p>
          </div>
        </div>
        <div className='w-full flex flex-row mt-3'>
          <div className='sm:text-right text-2xl font-bold'>
            <h3 className="text-pink-600  text-2xl">Back-End - </h3>
          </div>
          <div>
            <p className="text-white p-1 text-xl"> NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, Sequelize ORM, MongoDB, Mongoose ODM</p>
          </div>
        </div>
        <div className='w-full flex flex-row mt-3'>
          <div className='sm:text-right text-2xl font-bold'>
            <h3 className="text-pink-600  text-2xl">Languages - </h3>
          </div>
          <div>
            <p className="text-white p-1 text-xl"> JavaScript</p>
          </div>
        </div>
        <br /><p className='text-1xl text-white '>
          Skills from Past Experience : AccentR/Cobol, VAX/VMS, Mysql
        </p>
      </div>
    </div>
  )
}
