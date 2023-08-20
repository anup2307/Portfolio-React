
import { projectList } from "../../utils/projectList";
import ProjectItem from "../ProjectItems";

export default function Projects() {
  return (
    <div className="bg-[#21325e] overflow-auto p-6 w-full h-screen projectdisplay">
      {projectList.map((project) => {
        return <ProjectItem key={project.key} name={project.name} image={project.bgimage} skill={project.skill} applink={project.applink} github={project.github} />
      })}
    </div>
  )
}