import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Felipe from '../3dObjects/Felipe'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
};

const FelipeModel = () => {
  const [lightIntensity, setLightIntensity] = useState(5);
  const [lightColor, setLightColor] = useState('#fff')
  const audioRef = useRef(null);


  const handleClick = () => {
    setLightIntensity(10.0)

    audioRef.current && audioRef.current.play();
  }

  useEffect(() => {
    let colorInterval
    lightIntensity === 10.0 && (colorInterval = setInterval(() => {
      setLightColor(getRandomColor())
    }, 100));    
    return () => clearInterval(colorInterval)
  }, [lightIntensity])

  return (
    <>
      <audio ref={audioRef} src="/music/sitBack.mp3" loop />
      <Canvas
        shadows
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
        }}
        onClick={handleClick}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <DirectionalLightWithState intensity={lightIntensity} color={lightColor} />
          <Felipe scale={1.65} position={[-0.38, -1.3, 1]} />
        </Suspense>
      </Canvas>
    </>
  )
}

const DirectionalLightWithState = ({ intensity, color }) => {
  return <directionalLight color={color} intensity={intensity} position={[0, 8, 10]} />
};

export default FelipeModel
