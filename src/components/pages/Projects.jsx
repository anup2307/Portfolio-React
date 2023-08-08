
import { projectList } from "../../helpers/projectList";
import ProjectItem from "../ProjectItems";


export default function Projects() {
    return (
        <div>
          {projectList.map ((project) => {
            return <ProjectItem key = {project.key} name={project.name} image={project.bgimage}/>
          })}
          
      </div>
    )
}