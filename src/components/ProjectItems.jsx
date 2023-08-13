


export default function ProjectItem ({name, image, skill, applink}) {
    return (
        <div className="basis-1/2 max-w-sm rounded overflow-hidden group ml-6 mb-6 h-full">
            <div style={{ backgroundImage: `url(${image})` }} className="shadow-lg shadow-[#040c16] rounded-lg group mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-1xl font bold text-black text-center tracking-wider ">
                        {skill}
                    </span>
                    <div className="pt-8 text-center ">
                        {/* eslint-disable-next-line  */}
                        <a href={applink} target="_blank">
                        <button
                            className="text-center rounded-lg px-4 py-3 m-2
                                    bg-white text-gray-700 font-bold text-lg">
                            Link
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}