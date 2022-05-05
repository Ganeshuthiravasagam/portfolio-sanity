import React from "react";
import Image from "next/image";
import heroImage from '../public/images/heroimage.png';

import { Element } from "react-scroll";

function homePage() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-[600px] shadow-xl rounded-full relative px-10 md:block">
						<Image
						src={heroImage}
						alt="heroImage"
						layout="fill"
						objectFit="cover"
						className="object-scale-down rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-white text-7xl text-left mb-5">
							Hello, I am <span className="text-red-600">Ganesh</span>
						</h1>
						<p className="text-left text-white text-3xl font mb-5 flex-wrap">
						Talks about #ieee, #finance, and #webdevelopment
						</p>
						<a
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-red-600 transition ease-in-out duration-700 rounded-md w-65 h-16 text-lg"
						>
						Check my portfolio and Blogs
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default homePage;