import { useGSAP } from "@gsap/react";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";

const TechIcon = ({ model }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
