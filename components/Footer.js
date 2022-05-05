import { AiTwotoneHeart } from "react-icons/ai";
function Footer() {
	return (
		<div className="border-t-2 border-white w-full h-16 bg-black-50 flex justify-center items-center bg-black">
			<h1 className="text-xl text-red-600 mr-2">Made by</h1>{" "}
			<AiTwotoneHeart className="text-white" />
			<h1 className="text-xl text-red-600 ml-2">
				{" "}
				Created by{" "}
				<a
					href="#"
					className="cursor-pointer font-semibold text-red-600 hover:text-black"
				>
					Ganesh
				</a>
			</h1>
		</div>
	);
}

export default Footer;