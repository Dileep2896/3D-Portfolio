const GradientBackground = () => {
  return (
    <div className="gradient-background">
      {/* Grid lines */}
      <div className="dev-grid-lines" />

      {/* Glow nodes with blur */}
      <div className="dev-glow-container">
        <div className="dev-node dev-node-1" />
        <div className="dev-node dev-node-2" />
        <div className="dev-node dev-node-3" />
      </div>

      {/* Horizontal scan line */}
      <div className="dev-scan-line" />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
    </div>
  );
};

export default GradientBackground;
