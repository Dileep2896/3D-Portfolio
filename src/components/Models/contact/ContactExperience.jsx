import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useMediaQuery } from "react-responsive";
import { Coffee } from "./Coffee_for_two.jsx";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas shadows camera={{ position: [0, 0, 7], fov: isMobile ? 55 : 50 }}>
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

      <group
        scale={isMobile ? 2.2 : 3}
        position={[0, 0, 0]}
        rotation={[0.6, 0, 0]}
        castShadow
      >
        <Coffee />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
