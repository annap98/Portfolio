import React from "react";

// About section component
const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-background text-white font-signature pt-48"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold border-b-4 border-gray-500 font-nav_bar text-black tracking-widest text-center p-2">
						About
					</p>
				</div>

				<p className="text-xl font-sig_three text-black tracking-widest">

					As a web developer, I bring a unique blend of skills to every project I work on. With a degree in psychology, I have an understanding of human behavior and how people interact with technology. This knowledge has helped me create websites that are not only visually appealing, but also intuitive and user-friendly.
				</p>

				<br />

				<p className="text-xl font-sig_three text-black tracking-widest">
					In addition to my psychology background, I have also completed a full stack web development bootcamp, where I gained expertise in technologies such as HTML, CSS, JavaScript, and Node.js. 
				</p>
			</div>
		</div>
	);
};

export default About;