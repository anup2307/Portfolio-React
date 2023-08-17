import GitHubIcon from "@material-ui/icons/GitHub";


export default function ProjectItem({ name, image, skill, applink }) {
    return (
        <div className=" basis-1/4 ml-6 mb-6 ">
            <div style={{ backgroundImage: `url(${image})` }} className=" relative rounded-lg content-div">
                <div className="project absolute text-black font-bold text-2xl ml-4 mt-10">
                    <a href={applink} target="_blank" rel="noreferrer" className="p-3 atag" >
                        {name}
                    </a>
                    <a href={applink} target="_blank" rel="noreferrer" className="p-3" >
                        <GitHubIcon />
                    </a>
                    <p className="text-1xl font bold tracking-wider p-3">
                        {skill}
                    </p>
                </div>
            </div>
        </div>
    )
}