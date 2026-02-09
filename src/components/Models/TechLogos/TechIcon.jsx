import { useGSAP } from "@gsap/react";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const TechIcon = ({ model }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scene = useGLTF(model.modelPath);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {isVisible && (
        <Canvas
          style={{ touchAction: isMobile ? "auto" : "none" }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="city" />
          {!isMobile && <OrbitControls enableZoom={false} />}
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
      )}
    </div>
  );
};

export default TechIcon;
