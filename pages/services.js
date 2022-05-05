import { SiReact, SiPython, SiJavascript } from "react-icons/si";
import { Element } from "react-scroll";

function Services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<h1 className="text-red-600 text-6xl font-bold text-center">
					My Expertise
				</h1>
				<div className="flex flex-col gap-24 md:gap-[200px] md:flex-row justify-items-start items-center mx-40 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex flex-col justify-center items-center cursor-pointer">
                            <h2 className="text-xl text-red-600 font-semibold">
								ReactJS
							</h2>
							<SiReact className="w-[100px] h-[100px] bg-yellow-400 text-black m-3 p-1 shadow-xl rounded-md" />
							
						</div>
						<a href="https://courses.learncodeonline.in/learn/certificate/4597874-53635" className="text-white px-3 py-2 text-base font-medium
						bg-red-600 transition ease-in-out duration-700 rounded-md hover:bg-white hover:text-black">
							Certification
						</a>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex flex-col justify-center items-center cursor-pointer">
                            <h2 className="text-xl text-red-600 font-semibold">
								Python
							</h2>
							<SiPython className="w-[100px] h-[100px] bg-red-400 text-black m-3 p-1 shadow-xl rounded-md" />
							
						</div>
						<a href="https://www.sololearn.com/certificates/course/en/18381996/1073/landscape/png" className="text-white px-3 py-2 text-base font-medium
						bg-red-600 transition ease-in-out duration-700 rounded-md hover:bg-white hover:text-black">
							Certification
						</a>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex flex-col justify-center items-center cursor-pointer">
                            <h2 className="text-xl text-red-600 font-semibold ">
								JavaScript
							</h2>
							<SiJavascript className="w-[100px] h-[100px] bg-green-500 text-black m-3 p-1 shadow-xl rounded-md" />
							
						</div>
						<a href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/98072/4597874_98072.pdf?1626854292" className="text-white px-3 py-2 text-base font-medium
						bg-red-600 transition ease-in-out duration-700 rounded-md hover:bg-white hover:text-black">
							Certification
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Services;