import React from "react";
import Particles from "react-particles-js";
const Particle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 30
          },
          size: {
            value: 3
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
  );
};

export default Particle;
