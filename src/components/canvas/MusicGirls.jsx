import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import CanvasLoader from "../Loader";


const MusicGirl = ({ isMobile }) => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("./music-girl/scene.gltf"); // Draco 디코더 모듈의 경로를 설정

  const { scene } = useGLTF("./music-girl/scene.gltf", dracoLoader);

  // const musicgirl = useGLTF("./music-girl/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
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
        object={scene}
        scale={isMobile ? 8 : 12 }
        position={isMobile ? [-0.5, -3.5, 0.5] : [0,-3,0.5]}
        rotation={[-0.01, 3, -0.1]}
      />
    </mesh>
  );
};

const MusicGirlsCanvas = () => {
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
        <MusicGirl isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MusicGirlsCanvas;