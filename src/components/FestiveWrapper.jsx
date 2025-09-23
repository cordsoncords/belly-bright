// src/components/FestiveWrapper.jsx
import { Snowfall } from "react-snowfall";

export default function FestiveWrapper({ children }) {
  return (
    <div className="relative">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50, // above background, below content
          pointerEvents: "none",
        }}
        snowflakeCount={100}
      />
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
}
