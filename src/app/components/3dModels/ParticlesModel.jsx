"use client"
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particle from "../3dObjects/Paritcle";

function generateRandomPosition() {
  const range = 5;
  return [
    Math.random() * range - range / 2,
    Math.random() * range - range / 2,
    Math.random() * range - range / 2,
  ];
}

export default function StarsModel() {
  const [boxes, setBoxes] = useState([
    { position: [0, 0, 5] },
  ]);
  const numCubes = 700;

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useState(() => {
    for (let i = 1; i < numCubes; i++) {
      setBoxes((prevBoxes) => [...prevBoxes, { position: generateRandomPosition() }]);
    }
  }, []);

  return (
    <Canvas
      camera={{ position: [2, 0, 0], fov: 15 }}
      style={{
        backgroundColor: "#121212",
        width: "100%",
        height: "92px",
        position: isMobile ? "absolute" : "fixed", // Dynamic position based on state
      }}
    >
      <ambientLight intensity={1.5} />
      {boxes.map((box, index) => (
        <Particle key={index} position={box.position} />
      ))}
      <OrbitControls autoRotate={true} OrbitControls enableZoom={false} />
    </Canvas>
  );
}
