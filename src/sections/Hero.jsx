import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 -mt-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                GET
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <p className="text-white md:text-xl relative z-10 pointer-events-none">
              The music distribution platform that lets you do it all
            </p>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Release your music on Spotify, Apple Music, YouTube, <br />
            and more while keeping 100% ownership, always
            </p>

            <Button
              text="Free Sign up"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: Rockstar Image */}
        <figure>
          <div className="hero-3d-layout flex items-center justify-center">
            <img 
              src="/images/rockstar.webp" 
              alt="Rockstar" 
              className="w-150 h-150 object-cover rounded-lg"
            />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
