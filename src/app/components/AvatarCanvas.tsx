"use client"

import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

// Avatar 组件
const Avatar = ({ animationName }: { animationName: string | null } ) => {
	const avatar = useGLTF("/home/avatar.glb");
	const { actions } = useAnimations(avatar.animations, avatar.scene);
	const prevAnimationName = useRef<string | null>(null); // 用于存储上一次的动画名称
  
	useEffect(() => {

		// 停止之前的动画
		if (prevAnimationName.current && actions[prevAnimationName.current]) {
		  actions[prevAnimationName.current]?.fadeOut(0.5);
		}
	  
		// 播放新的动画
		if (animationName && actions[animationName]) {
		  actions[animationName]
			?.reset()
			?.setEffectiveTimeScale(1)
			?.setEffectiveWeight(1)
			?.fadeIn(0.5)
			?.play();
		}
	  
		// 更新 prevAnimationName
		prevAnimationName.current = animationName;
	  
		return () => {
		  if (animationName && actions[animationName]) {
			actions[animationName]?.fadeOut(0.5);
		  }
		};
	  }, [animationName, actions]);
	  
  
	return (
	  <group>
		<primitive
		  object={avatar.scene}
		  scale={[1.5, 1.5, 1.5]} // 放大 1.5 倍
		  position={[0, -1.5, 0]} // 让模型向下移动一点
		//   rotation={[0, -0.5, 0]}
		/>
	  </group>
	);
  };


export const AvatarCanvas = () => {
	// 动画名称列表
	const animations = ["strech", "dance", "swing"];
	// 当前动画索引
	const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

	// 切换动画
	const handleToggleAnimation = () => {
		setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
	};


	return (
		<>
			{/* // parameter of position{[x,y,z]}
			// dpr = Device pixel Ratio 设备像素比，影响渲染清晰度 */}
			<Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 50 }}>
				<ambientLight intensity={3} />
				{/* <pointLight position={[0, 0, 2]} intensity={14} castShadow/> */}
				
				<OrbitControls />
				<Avatar animationName={animations[currentAnimationIndex]}/>
			</Canvas>

			{/* 切换动画的按钮 */}
			<div style={{ position: 'absolute', top: '20px', left: '20px' }}>
				<button onClick={handleToggleAnimation}>
					Play with me ({animations[currentAnimationIndex]})
				</button>
			</div>
		</>
		
		
	);
};
