import {
    FaGithub,
} from 'react-icons/fa';


export default function ProjectItem({ name, image, skill, applink, github }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="basis-1/4 ml-6 mt-8 w-full relative rounded-lg content-div ">
            <div className="project absolute text-black font-bold text-xl ml-4 mt-16">
                <div className='flex mb-3'>
                    <a href={github} target="_blank" rel="noreferrer" className='p-2'><FaGithub size={30} /></a>
                    <a href={applink} target="_blank" rel="noreferrer" className='p-2'>{name}</a>
                </div>
                <h4 className='p-2'> {skill} </h4>
            </div>
        </div>
    )
}