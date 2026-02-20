import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    type: "text",
    label: "TEXT",
    color: "#818cf8",
    content: '"The detective pushed open the creaking door..."',
    delay: 0,
  },
  {
    type: "image",
    label: "IMAGE",
    color: "#f59e0b",
    content: "Generating: dimly lit doorway, noir style",
    delay: 1.2,
  },
  {
    type: "audio",
    label: "AUDIO",
    color: "#f472b6",
    content: "Narrating with gravelly voice",
    delay: 2.0,
  },
  {
    type: "director",
    label: "DIRECTOR",
    color: "#10b981",
    content:
      '"Opening with sensory detail to build tension. Noir palette to match mystery genre."',
    delay: 2.8,
  },
  {
    type: "text",
    label: "TEXT",
    color: "#818cf8",
    content: '"Inside, the room was chaos \u2014 papers scattered..."',
    delay: 4.0,
  },
  {
    type: "image",
    label: "IMAGE",
    color: "#f59e0b",
    content: "Generating: ransacked office interior",
    delay: 5.2,
  },
  {
    type: "audio",
    label: "AUDIO",
    color: "#f472b6",
    content: "Tone shifts to urgency",
    delay: 6.0,
  },
  {
    type: "director",
    label: "DIRECTOR",
    color: "#10b981",
    content:
      '"Escalating visual disorder signals rising stakes. Withholding the payoff."',
    delay: 6.8,
  },
];

const WaveformIcon = () => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="none"
    className="inline-block ml-1"
  >
    {[2, 6, 10, 14, 18, 22].map((x, i) => (
      <rect
        key={i}
        x={x}
        y={8 - [3, 6, 4, 7, 5, 3][i]}
        width="2"
        rx="1"
        height={[6, 12, 8, 14, 10, 6][i]}
        fill="currentColor"
        opacity="0.7"
      >
        <animate
          attributeName="height"
          values={`${[6, 12, 8, 14, 10, 6][i]};${[10, 6, 14, 8, 6, 12][i]};${[6, 12, 8, 14, 10, 6][i]}`}
          dur={`${0.6 + i * 0.1}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values={`${8 - [3, 6, 4, 7, 5, 3][i]};${8 - [5, 3, 7, 4, 3, 6][i]};${8 - [3, 6, 4, 7, 5, 3][i]}`}
          dur={`${0.6 + i * 0.1}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}
  </svg>
);

const InterleaveDemo = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const timeoutsRef = useRef([]);
  const hasPlayedRef = useRef(false);

  const playSequence = () => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setVisibleSteps([]);
    setIsPlaying(true);

    steps.forEach((step, index) => {
      const id = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, index]);
        if (index === steps.length - 1) {
          setIsPlaying(false);
        }
      }, step.delay * 1000);
      timeoutsRef.current.push(id);
    });
  };

  // Auto-play on scroll into view
  useGSAP(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      once: true,
      onEnter: () => {
        if (!hasPlayedRef.current) {
          hasPlayedRef.current = true;
          playSequence();
        }
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="interleave-container">
      <div className="interleave-header">
        <span className="interleave-title">Interleaved Output Stream</span>
        <button
          onClick={playSequence}
          disabled={isPlaying}
          className="interleave-replay-btn"
        >
          {isPlaying ? "Streaming..." : "Replay"}
        </button>
      </div>

      <div className="interleave-timeline">
        {steps.map((step, index) => {
          const isVisible = visibleSteps.includes(index);
          return (
            <div
              key={index}
              className={`interleave-step ${isVisible ? "visible" : ""}`}
              style={{ "--step-color": step.color }}
            >
              {/* Timeline dot + line */}
              <div className="interleave-dot-col">
                <div
                  className="interleave-dot"
                  style={{ background: step.color }}
                />
                {index < steps.length - 1 && (
                  <div className="interleave-line" />
                )}
              </div>

              {/* Content */}
              <div className="interleave-content">
                <span
                  className="interleave-label"
                  style={{ color: step.color }}
                >
                  {step.label}
                  {step.type === "audio" && isVisible && <WaveformIcon />}
                </span>
                <p className="interleave-text">{step.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InterleaveDemo;
