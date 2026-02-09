import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, Component } from "react";
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

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [loadError, setLoadError] = useState(false);

  if (loadError) {
    return null;
  }

  return (
    <CanvasErrorBoundary fallback={null}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          powerPreference: "high-performance",
          antialias: !isMobile,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          if (!gl) setLoadError(true);
        }}
        style={{
          touchAction: isMobile ? "auto" : "none",
          pointerEvents: isMobile ? "none" : "auto",
        }}
      >
        <Suspense fallback={null}>
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
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default HeroExperience;
