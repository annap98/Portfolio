import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-pink to-black text-white font-signature"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>

				<p className="text-xl mt-20">
				Hi, I’m Anna!

				I am passionate about all things psychology, health, and lifestyle. My curiosity about the inner workings of the mind led me to getting my Bachelors in psychology. 

				</p>

				<br />

				<p className="text-xl">
				Shortly after graduating from college, I developed an interest in web development so I decided to attend a coding bootcamp, where I gained the skills that would allow me to break into the tech field. I have professional experience in full stack development and I specialize in React and NodeJS.
				</p>
			</div>
		</div>
	);
};

export default About;