import GitHubIcon from "@material-ui/icons/GitHub";


export default function ProjectItem({ name, image, skill, applink }) {
    return (
        <div className=" basis-1/4 place-content-center ml-6 mb-6 ">
            <div style={{ backgroundImage: `url(${image})` }} className="rounded-lg group content-div">
                <div className="opacity-0 group-hover:opacity-100">
                    <div className="pt-8 text-center ">
                        <a href={applink} target="_blank" rel="noreferrer">
                            {name}
                        </a>
                    </div>
                    <div className="pt-8 text-center ">
                        {/* eslint-disable-next-line  */}
                        <a href={applink} target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                    </div>
                    <span className="text-1xl font bold text-black text-center tracking-wider ">
                        {skill}
                    </span>
                </div>
            </div>
        </div>
    )
}