import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Ballon = ({ ...props }) => {
  const ballon = useGLTF('/glb/Ballon.glb');
  
  return (
    <group {...props} dispose={null}>
      <group name="Ballon3D">
        <primitive object={ballon.scene} />
      </group>
    </group>
  )
}

export default Ballon;
