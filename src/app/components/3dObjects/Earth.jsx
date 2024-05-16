import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Earth = ({ ...props }) => {
  const group = useRef();

  const earth = useGLTF(
    "glb/planet/scene.gltf"
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Earth">
        <primitive object={earth.scene} />
      </group>
    </group>
  )
}
useGLTF.preload("glb/planet/scene.gltf");
export default Earth

