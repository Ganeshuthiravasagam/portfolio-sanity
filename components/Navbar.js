import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div  >
			<nav className=" fixed z-20 bg-black w-full border-b">
				<div className="w-full">
					<div className="flex items-center h-20 w-full ">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<Link href="/"><p className=" text-white font-bold text-xl cursor-pointer">
									Ganesh <span className="text-red-500">uthiravasagam</span></p>
								</Link>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">

									<Link href="/" ><p

									className="cursor-pointer 
									text-white px-3 py-2 text-base font-medium
									bg-red-600 transition ease-in-out duration-700 rounded-md hover:bg-white hover:text-black
									"
									>
									
									Home
									</p>
									</Link>

									<Link href="/blog" ><p
									className="cursor-pointer 
									text-white px-3 py-2 text-base font-medium bg-red-600 transition ease-in-out duration-700 rounded-md hover:bg-white hover:text-black "
									>Blogs
									</p></Link>
								</div>
							</div>
						</div>
						<div className="mr-14 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-red-600 focus:outline-none"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-6 w-6" 
                                    fill="none" viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    stroke-width="2">
                                    <path stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-black mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
							<Link href="/" ><p

							className="cursor-pointer hover:bg-red-600 text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
							>
							
							Home
							</p>
							</Link>

							<Link href="/blog" ><p
							className="cursor-pointer hover:bg-red-600 text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
							>Blogs
							</p>
							</Link>

							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;