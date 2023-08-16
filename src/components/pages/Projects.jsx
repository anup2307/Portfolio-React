
import { projectList } from "../../helpers/projectList";
import ProjectItem from "../ProjectItems";


export default function Projects() {
  return (
    <div className=" ">
      <div className="  bg-[#21325e] flex flex-row place-content-center flex-wrap p-6 w-full ">
        {projectList.map((project) => {
          return <ProjectItem key={project.key} name={project.name} image={project.bgimage} skill={project.skill} applink={project.github} />
        })}
      </div>
    </div>
  )
}