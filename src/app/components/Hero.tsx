// "use client"
// // import { Canvas } from "@react-three/fiber";
// import { AvatarCanvas } from "./AvatarCanvas";
// import "./hero.css";

// export const Hero = () => {
// 	// const avatar = useGLTF("/home/avatarbody.glb");

// 	return (
// 		<div className="hero_section">

// 			<div className="text-content">
// 				<h1 className="text-black text-7xl font-extrabold">
// 					Hi, I&apos;m <span className="text-theme">Siyi Hu</span>
// 				</h1>
// 				<p> Self introduction</p>
// 			</div>
// 			<AvatarCanvas />
// 		</div>
		
// 	);
// };

// export default Hero;
"use client";
import { AvatarCanvas } from "./AvatarCanvas";

const Hero = () => {
  return (
    // [url('/home/hero-background.jpg')]
    <section className="bg-[url('/home/hero-b.webp')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">

    {/* <section className="bg-black bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto"> */}
      <div className="px-6 absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
        {/* 介绍信息 */}
        <div>
          <h1 className="text-white text-7xl font-extrabold">
            Hi, I&apos;m <span className="text-[#E3B23C]">Maria</span>
          </h1>
          <p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
            My passion for development and creativity drives me.
            <br />
            Explore my world and see what we can create together!
          </p>
        </div>
      </div>

      <AvatarCanvas />
    </section>
  );
};

export default Hero;
