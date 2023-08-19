
import { projectList } from "../../helpers/projectList";
import ProjectItem from "../ProjectItems";
import '../../styles/project.css'

export default function Projects() {
  return (
    <div className=" ">
      <div className="  bg-[#21325e] overflow-auto p-6 w-full h-screen projectdisplay">
        {projectList.map((project) => {
          return <ProjectItem key={project.key} name={project.name} image={project.bgimage} skill={project.skill} applink={project.applink} github={project.github} />
        })}
      </div>
    </div>
  )
}