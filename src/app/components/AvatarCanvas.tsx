"use client"

import { Html, OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

const Avatar = () => {
	const avatar = useGLTF("/home/avatar.glb");
	// 解析动画
	const { actions, names } = useAnimations(avatar.animations, avatar.scene);
	// const [index, setIndex ] = useState(1);
	// const [clicked, setClicked ] = useState(false);
	// const [currentAnimation, setCurrentAnimation] = useState(names[0]); // 当前动画名称（默认第一个动画）
	// console.log("Animation Actions:", actions);  // 输出动画对象
	const [currentAnimation, setCurrentAnimation] = useState(names[1]); // 当前动画名称
	// const [previousAnimation, setPreviousAnimation] = useState(null); // 上一个动画
	const [previousAnimation, setPreviousAnimation] = useState<string | null>(null); // 上一个动画名称

	useEffect(() => {
		if (!actions || !currentAnimation) return;

		// 如果有上一个动画，先对上一个动画执行 fadeOut
		if (previousAnimation && actions[previousAnimation]) {
		actions[previousAnimation].fadeOut(0.5); // 0.5 秒平滑淡出
		}

		// 播放新的动画，并执行 fadeIn
		if (actions[currentAnimation]) {
		actions[currentAnimation].reset().fadeIn(0.5).play(); // 0.5 秒平滑淡入
		}

		// 更新 previousAnimation
		setPreviousAnimation(currentAnimation);
	}, [currentAnimation, actions, previousAnimation]);



	// useEffect(() => {
	// 	// actions.dance.play();

	//   }
	// );

	return (
		<group>
			<primitive
				object={avatar.scene}
				scale={[1.5, 1.5, 1.5]} // 放大 2 倍
				position={[0, -1.5, 0]} // 让模型向下移动一点
			/>

			<Html>
				{/* <button id="hero_button">
					clicker
				</button> */}

				{/* 动态生成按钮 */}
				<div
					style={{
					position: "absolute",
					top: "20px",
					left: "20px",
					display: "flex",
					gap: "10px",
					}}
				>
					{names.map((name) => (
					<button
						key={name}
						onClick={() => setCurrentAnimation(name)} // 切换动画
						style={{
						padding: "10px",
						backgroundColor: currentAnimation === name ? "#0077ff" : "#ccc",
						color: "#fff",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						}}
					>
						{name}
					</button>
					))}
				</div>
			</Html>

		</group>
	);
};

export const AvatarCanvas = () => {
	return (
		// parameter of position{[x,y,z]}
		// dpr = Device pixel Ratio 设备像素比，影响渲染清晰度
		<Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 50 }}>
			<ambientLight intensity={1} />
			<pointLight position={[0, 0, 2]} intensity={14} castShadow/>
			<OrbitControls />
			<Avatar />
		</Canvas>
	);
};
