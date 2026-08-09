import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FaultyTerminal from "./FaultyTerminal";

function App() {
  const [tintColor, setTintColor] = useState('#A7EF9E'); // Fallback color

  useEffect(() => {
    const globalTint = getComputedStyle(document.documentElement)
      .getPropertyValue('--background-color')
      .trim();

    if (globalTint) {
      setTintColor(globalTint);
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: "translate(-8px, -8px)",
        }}
      >
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint={tintColor}
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>
      <div
        className="overlay-content"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          color: "red",
        }}
      >
        <h1>NANI</h1>
      </div>
    </>
  );
}

export default App;
