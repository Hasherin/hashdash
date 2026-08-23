import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FaultyTerminal from "./FaultyTerminal";
import ScrambledText from "./ScrambledText";
import SpotlightCard from "./SpotlightCard.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Home";

const formatClock = (date) => ({
  display: new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Budapest",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).format(date),
  dateTime: date.toISOString(),
});

function App() {
  const [tintColor, setTintColor] = useState("#A7EF9E"); // Fallback color
  const [clock, setClock] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const globalTint = getComputedStyle(document.documentElement)
      .getPropertyValue("--background-color")
      .trim();

    if (globalTint) {
      setTintColor(globalTint);
    }
  }, []);

  useEffect(() => {
    const updateClock = () => setClock(formatClock(new Date()));

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BrowserRouter>
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
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="var(--accent-red)"
          >
            <Link to="/">
              <button title="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2rem"
                  viewBox="0 -960 960 960"
                  width="2rem"
                  fill="var(--text-color)"
                >
                  <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
                </svg>
              </button>
            </Link>
            <ScrambledText
              className="scrambled-text-demo"
              radius={10}
              duration={2}
              speed={0.1}
              scrambleChars="_$X"
              style={{ paddingLeft: "0.5rem" }}
            >
              Hashdash
            </ScrambledText>
            <time dateTime={clock.dateTime}>{clock.display} - BUDAPEST</time>
            <Link to="Bookstack PH">
              <button className="button-rec" title="Guides">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2rem"
                  viewBox="0 -960 960 960"
                  width="2rem"
                  fill="var(--text-color)"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z" />
                </svg>
              </button>
            </Link>
            <Link to="/login">
              <button className="button-rec" title="Login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2rem"
                  viewBox="0 -960 960 960"
                  width="2rem"
                  fill="var(--text-color)"
                >
                  <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                </svg>
              </button>
            </Link>
            <Link to="/register">
              <button className="button-rec" title="Register">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2rem"
                  viewBox="0 -960 960 960"
                  width="2rem"
                  fill="var(--text-color)"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </Link>
          </SpotlightCard>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
