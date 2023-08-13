
import { projectList } from "../../helpers/projectList";
import ProjectItem from "../ProjectItems";


export default function Projects() {
    return (
      <div className=" bg-[#21325e] h-screen">
        <div className=" flex flex-row justify-center flex-wrap p-6 w-full group ">
          {projectList.map ((project) => {
            return <ProjectItem key = {project.key} name={project.name} image={project.bgimage} skill={project.skill} applink={project.github}/>
          })}
       </div>   
      </div>
    )
}