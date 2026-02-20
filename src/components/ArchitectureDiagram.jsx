const AgentBox = ({ label, sublabel, color, className = "" }) => (
  <div
    className={`arch-agent-box ${className}`}
    style={{ borderColor: color, "--glow": color }}
  >
    <span className="arch-agent-label">{label}</span>
    {sublabel && <span className="arch-agent-sublabel">{sublabel}</span>}
  </div>
);

const ServiceBox = ({ label, sublabel }) => (
  <div className="arch-service-box">
    <span className="arch-service-label">{label}</span>
    {sublabel && <span className="arch-service-sublabel">{sublabel}</span>}
  </div>
);

const Arrow = ({ direction = "down", label }) => (
  <div className={`arch-arrow arch-arrow-${direction}`}>
    <div className="arch-arrow-line" />
    <div className="arch-arrow-head" />
    {label && <span className="arch-arrow-label">{label}</span>}
  </div>
);

const ArchitectureDiagram = () => {
  return (
    <div className="arch-container">
      <h3 className="arch-title">System Architecture</h3>

      {/* User Input */}
      <div className="arch-row">
        <AgentBox
          label="User Input"
          sublabel="Text / Voice / Genre"
          color="rgba(148, 163, 184, 0.6)"
        />
      </div>

      <Arrow direction="down" label="prompt" />

      {/* Sequential Phase */}
      <div className="arch-phase">
        <span className="arch-phase-label">Sequential Phase</span>
        <div className="arch-row">
          <AgentBox
            label="Narrator Agent"
            sublabel="Gemini 2.0 Flash"
            color="rgba(129, 140, 248, 0.6)"
          />
        </div>
      </div>

      <Arrow direction="down" label="scene text" />

      {/* Parallel Phase */}
      <div className="arch-phase arch-phase-parallel">
        <span className="arch-phase-label">Parallel Phase (ADK)</span>
        <div className="arch-row-parallel">
          <AgentBox
            label="Illustrator Agent"
            sublabel="Imagen 3"
            color="rgba(245, 158, 11, 0.6)"
          />
          <AgentBox
            label="Director Agent"
            sublabel="Gemini 2.0 Flash"
            color="rgba(16, 185, 129, 0.6)"
          />
          <AgentBox
            label="TTS Agent"
            sublabel="Cloud TTS"
            color="rgba(244, 114, 182, 0.6)"
          />
        </div>
      </div>

      <Arrow direction="down" label="interleaved stream" />

      {/* Output */}
      <div className="arch-row">
        <div className="arch-output-row">
          <ServiceBox label="Text" sublabel="Narrative" />
          <ServiceBox label="Images" sublabel="Illustrations" />
          <ServiceBox label="Audio" sublabel="Narration" />
          <ServiceBox label="Analysis" sublabel="Director Mode" />
        </div>
      </div>

      {/* Divider */}
      <div className="arch-divider" />

      {/* Google AI Services */}
      <div className="arch-services-section">
        <span className="arch-services-title">Google AI Services</span>
        <div className="arch-services-row">
          <ServiceBox label="Gemini 2.0 Flash" sublabel="Vertex AI" />
          <ServiceBox label="Imagen 3" sublabel="Vertex AI" />
          <ServiceBox label="Cloud TTS" sublabel="Text-to-Speech" />
        </div>
      </div>

      {/* Infrastructure */}
      <div className="arch-services-section">
        <span className="arch-services-title">Infrastructure</span>
        <div className="arch-services-row">
          <ServiceBox label="Cloud Run" sublabel="Backend" />
          <ServiceBox label="Cloud Firestore" sublabel="Persistence" />
          <ServiceBox label="Cloud Storage" sublabel="Images" />
          <ServiceBox label="Firebase" sublabel="Auth + Hosting" />
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
