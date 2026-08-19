import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FaultyTerminal from "./FaultyTerminal";
import ScrambledText from "./ScrambledText";
import BorderGlow from "./BorderGlow";

function App() {
  const [tintColor, setTintColor] = useState("#A7EF9E"); // Fallback color

  useEffect(() => {
    const globalTint = getComputedStyle(document.documentElement)
      .getPropertyValue("--background-color")
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
        {
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
        }
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
        }}
      >
        <div className="div-main">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={true}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
            style={{ className: "div-menu" }}
          >
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                viewBox="0 -960 960 960"
                width="2rem"
                fill="var(--text-color)"
              >
                <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
              </svg>
            </a>
            <ScrambledText
              className="scrambled-text-demo"
              radius={10}
              duration={2}
              speed={0.1}
              scrambleChars="_$X"
              style={{ paddingLeft: "1.5rem" }}
            >
              Hashdash
            </ScrambledText>
          </BorderGlow>
        </div>
      </div>
    </>
  );
}

export default App;
