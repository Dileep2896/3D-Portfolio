const HeroLights = () => {
  return (
    <>
      <directionalLight position={[-5, 5, 5]} intensity={3} color="#ffffff" />
      <directionalLight position={[5, -5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[5, 5, -5]} intensity={0.2} color="#ffffff" />
    </>
  );
};

export default HeroLights;
