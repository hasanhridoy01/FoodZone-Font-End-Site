import React from 'react';
import bannerImg from '../../../img/bg.jpg';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className='mr-5 ml-5'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#1CD6CE",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 260,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <div class="hero bg-base-100 lg:p-10 mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} class="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-4xl font-bold uppercase mt-3 text-info">your chooces our priority</h1>
            <p class="py-3 pr-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum praesentium vero eos autem accusamus nisi tempore, sed odio aspernatur itaque in, voluptate necessitatibus maiores sint corrupti quia fugiat ullam?</p>
            <a class="btn btn-info text-white" href='/registration'>Registration</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;