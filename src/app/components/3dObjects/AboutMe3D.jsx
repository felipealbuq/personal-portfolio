import React, { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const AboutMe3D = ({ ...props }) => {
  const about = useGLTF('/glb/AboutMe3D.glb');
  const mixer = useRef();
  const { camera } = useThree();
  let clock = new THREE.Clock()

  useFrame(() => {
    if (mixer.current) mixer.current.update(clock.getDelta() * 0.8);
  });

  if (about.animations.length && !mixer.current) {
    mixer.current = new THREE.AnimationMixer(about.scene);
    about.animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }

  return (
    <group {...props} dispose={null}>
      <group name="AboutME3D">
        <primitive object={about.scene} />
      </group>
    </group>
  )
}

export default AboutMe3D;
