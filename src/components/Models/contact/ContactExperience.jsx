import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer.jsx";
import { useMediaQuery } from "react-responsive";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas shadows camera={{ position: [0, -2, 6], fov: isMobile ? 55 : 50 }}>
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#fff" />

      <directionalLight
        position={[0, 2, 0]}
        castShadow
        intensity={2.5}
        color="#fff"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={isMobile ? 0.8 : 0.9} position={[0, -1.6, 0]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
