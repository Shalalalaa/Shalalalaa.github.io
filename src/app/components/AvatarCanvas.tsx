// "use client"

// import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useRef, useEffect, useState } from "react";

// // Avatar 组件
// const Avatar = ({ animationName }: { animationName: string | null } ) => {
// 	const avatar = useGLTF("/home/avatar.glb");
// 	const { actions } = useAnimations(avatar.animations, avatar.scene);
// 	const prevAnimationName = useRef<string | null>(null); // 用于存储上一次的动画名称
  
// 	useEffect(() => {

// 		// 停止之前的动画
// 		if (prevAnimationName.current && actions[prevAnimationName.current]) {
// 		  actions[prevAnimationName.current]?.fadeOut(0.5);
// 		}
	  
// 		// 播放新的动画
// 		if (animationName && actions[animationName]) {
// 		  actions[animationName]
// 			?.reset()
// 			?.setEffectiveTimeScale(1)
// 			?.setEffectiveWeight(1)
// 			?.fadeIn(0.5)
// 			?.play();
// 		}
	  
// 		// 更新 prevAnimationName
// 		prevAnimationName.current = animationName;
	  
// 		return () => {
// 		  if (animationName && actions[animationName]) {
// 			actions[animationName]?.fadeOut(0.5);
// 		  }
// 		};
// 	  }, [animationName, actions]);
	  
  
// 	return (
// 	  <group>
// 		<primitive
// 		  object={avatar.scene}
// 		  scale={[1.5, 1.5, 1.5]} // 放大 1.5 倍
// 		  position={[0, -1.5, 0]} // 让模型向下移动一点
// 		//   rotation={[0, -0.5, 0]}
// 		/>
// 	  </group>
// 	);
//   };


// export const AvatarCanvas = () => {
// 	// 动画名称列表
// 	const animations = ["strech", "dance", "swing"];
// 	// 当前动画索引
// 	const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

// 	// 切换动画
// 	const handleToggleAnimation = () => {
// 		setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
// 	};


// 	return (
// 		<>
// 			{/* // parameter of position{[x,y,z]}
// 			// dpr = Device pixel Ratio 设备像素比，影响渲染清晰度 */}
// 			<Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 50 }}>
// 				<ambientLight intensity={3} />
// 				{/* <pointLight position={[0, 0, 2]} intensity={14} castShadow/> */}
				
// 				<OrbitControls />
// 				<Avatar animationName={animations[currentAnimationIndex]}/>
// 			</Canvas>

// 			{/* 切换动画的按钮 */}
// 			<div style={{ position: 'absolute', top: '20px', left: '20px' }}>
// 				<button  
// 					onClick={handleToggleAnimation}
// 					className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#E3B23C] hover:bg-[#D4A12D] text-black font-bold py-2 px-4 rounded-md shadow-md transition"
// 				>
// 					Play with me ({animations[currentAnimationIndex]})
// 				</button>
// 			</div>
// 		</>
		
		
// 	);
// };
"use client";
import {
  OrbitControls,
  Preload,
  Html,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { Canvas,  useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { MyLoader } from "./MyLoader";

const Avatar = () => {
  const [index, setIndex] = useState(0);
  const avatar = useGLTF("/home/avatar.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (names.length > 0) {
      actions[names[index]]?.reset().fadeIn(0.5).play();
    }

    return () => {
      if (names.length > 0) {
        actions[names[index]]?.fadeOut(0.5);
      }
    };
  }, [index, actions, names]);

  return (
    <group>
      <primitive object={avatar.scene} 
	  	scale={[2, 2, 2]} // 放大 1.5 倍
 		position={[0, -2, 0]} // 让模型向下移动一点 
		/>

      {/* 按钮放置在 3D 空间 */}
      <Html position={[-3.7, 0.3, 0]}>
        <button
          className="bg-theme-button text-black w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-theme-buttonHover hover:scale-110 duration-500"
          onClick={() => {
            setIndex((index + 1) % names.length);
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Check out my moves" : "Play with me!"}
        </button>
      </Html>
    </group>
  );
};


const Box = () => {
  // ✅ 指定 useRef 类型为 `<THREE.Mesh | null>`，确保 `boxRef.current` 有 `rotation`
  const boxRef = useRef<HTMLElement | null>(null);

  useFrame(() => {
    if (boxRef.current) {
      (boxRef.current as any).rotation.y += 0.01; // ✅ 使用类型断言避免 TS 报错
    }
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} position={[-3, -2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={"#698C64"} />
    </mesh>
  );
};

const GeometricShapes = () => {
  return (
    <>
      <Box />

      {/* 球体（Sphere） - 添加高光反射效果 */}
      <mesh position={[2, -1, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhysicalMaterial
          color={"#F2B90F"} // 金黄色
          clearcoat={1} // 增加光泽度
          roughness={0.1} // 低粗糙度，使其反光
          metalness={0.7} // 提高金属质感
        />
      </mesh>
        {/* 添加一个浮动的圆环 */}
      <mesh position={[0, 3, 0]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color={"#4A594E"} />
      </mesh>
    </>
  );
};

export const AvatarCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 7], fov: 50 }}>
      <ambientLight intensity={2} />
      <pointLight position={[1, 1, 1]} />
      <OrbitControls enabled={false} />
      <Suspense fallback={<MyLoader />}>
        <Avatar />
      </Suspense>
      <Preload all />
      {/* 添加几何体 */}
      <GeometricShapes />
    </Canvas>
  );
};



