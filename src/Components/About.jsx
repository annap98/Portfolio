import React from "react";

// About section component
const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-background text-white font-signature pt-10"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold border-b-4 border-gray-500 font-nav_bar text-black tracking-widest text-center p-2">
						About
					</p>
				</div>

				<p className="text-xl font-sig_three text-black tracking-widest">

					As a freelance web developer and writer, I bring a unique blend of skills to every project I work on. With a degree in psychology, I have an understanding of human behavior and how people interact with technology. This knowledge has helped me create websites that are not only visually appealing, but also intuitive and user-friendly.
				</p>

				<br />

				<p className="text-xl font-sig_three text-black tracking-widest">
					In addition to my psychology background, I have also completed a full stack web development bootcamp, where I gained expertise in programming languages such as HTML, CSS, JavaScript, and Node.js. This has enabled me to develop dynamic and responsive websites that engage users and drive business results.

					Whether you're looking for a new website, need help with a complex coding project, or require high-quality content that engages and informs your audience, I have the skills and experience to deliver exceptional results.
				</p>
			</div>
		</div>
	);
};

export default About;