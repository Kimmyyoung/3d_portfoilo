import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import CanvasLoader from "../Loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Girl = ({ isMobile }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const scene = new THREE.Scene();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/path/to/draco_decoder/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load('./cute_girl/output.gltf', (gltf) => {
      const girlModel = gltf.scene;
      scene.add(girlModel);
      setModel(girlModel);
    }, undefined, (err) => {
      console.error(err);
    });
  }, []);

  if (!model) {
    return null; 
  }

  return (
    <group>
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
        object={model}
        scale={isMobile ? [2, 2, 2] : [2.7, 2.7, 2.7]}
        position={isMobile ? [1, -10, 0.5] : [1, -12, 0.5]}
        rotation={[0, -2, 0]}
      />
    </group>
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
      camera={{ position: [24, 10, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }}
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