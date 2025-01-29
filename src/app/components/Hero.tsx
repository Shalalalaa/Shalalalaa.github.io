"use client"
// import { Canvas } from "@react-three/fiber";
import { AvatarCanvas } from "./AvatarCanvas";
import "./hero.css";

export const Hero = () => {
	// const avatar = useGLTF("/home/avatarbody.glb");

	return (
		<div className="hero_section">

			<div className="text-content">
				<h1 className="text-black text-7xl font-extrabold">
					Hi, I&apos;m <span className="text-theme">Siyi Hu</span>
				</h1>
				<p> Self introduction</p>
			</div>
			<AvatarCanvas />
		</div>
		
	);
};

export default Hero;


