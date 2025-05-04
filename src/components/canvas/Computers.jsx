import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [computer, setComputer] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadModel = useCallback(() => {
    try {
      const model = useGLTF("/desktop_pc/scene_draco.glb");
      setComputer(model);
      setLoading(false);
    } catch (error) {
      console.error("Error loading 3D model, retrying...", error);
      setTimeout(loadModel, 2000); // Retry after 2 seconds
    }
  }, []);

  useEffect(() => {
    loadModel();
  }, [loadModel]);

  return (
    <>
      {loading && <CanvasLoader />} {/* Show loader while loading */}
      {computer && (
        <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={1} />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      )}
    </>
  );
};

const ComputersCanvas = () => {
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
    <div className="relative w-full h-screen">
      {" "}
      {/* Ensure background stays visible */}
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="absolute inset-0"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
