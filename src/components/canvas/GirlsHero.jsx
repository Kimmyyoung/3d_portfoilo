import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import CanvasLoader from "../Loader";

const Girl = ({ isMobile }) => {
  // draco : 3d img optimize
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("./cute_girl/scene.gltf");

  const girl = useGLTF("./cute_girl/scene.gltf", dracoLoader);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <spotLight
        position={[0, -1, 1]}
        angle={1.5}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0} />
      <primitive
        object={girl.scene}
        scale={isMobile ? 2 : 2.7 }
        position={isMobile ? [1, -13, 0.5] : [1,-16.5,0.5]}
        rotation={[-0.1, 3, -0.1]}
      />
    </mesh>
  );
};

const GirlsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <Girl isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GirlsCanvas;