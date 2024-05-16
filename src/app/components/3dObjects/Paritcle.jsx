import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Star = (props) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.05));
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[0.04, 0.04, 0.04]} />
      <meshStandardMaterial color={"#c084fc"} />
    </mesh>
  );
}

export default Star