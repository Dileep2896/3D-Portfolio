import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Desktop } from "./Desktop";
import HeroLights from "./HeroLights";

const FloatingDesktop = ({ scale }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.position.y = -3 + Math.sin(t * 0.8) * 0.3;
    groupRef.current.rotation.y = -(Math.PI / 4) + Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      position={[0, -3, 0]}
      rotation={[0, -(Math.PI / 4), 0]}
    >
      <Desktop />
    </group>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{
        touchAction: isMobile ? "auto" : "none",
        pointerEvents: isMobile ? "none" : "auto",
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        enableRotate={!isMobile}
        enabled={!isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />

      <FloatingDesktop scale={isMobile ? 0.7 : 1} />
    </Canvas>
  );
};

export default HeroExperience;
