import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../styles/background.css";

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: "#d4af37",
          },

          links: {
            enable: true,
            color: "#d4af37",
            opacity: 0.15,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default Background;