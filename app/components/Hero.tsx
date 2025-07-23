import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image fill src="/hero.jpg" alt="Hero Picture" objectFit="cover" />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="absolute z-20 inset-0 flex flex-col justify-center items-start px-8 text-white">
        <h1 className="text-5xl font-bold leading-tight max-w-xl">Never Miss</h1>
        <h1 className="text-5xl font-bold leading-tight max-w-xl">Another</h1>
        <span className="text-pickle text-5xl font-bold leading-tight max-w-xl">Highlight</span>
        <h3 className="w-1/3 min-w-2xs mt-4 text-2xl">
          Find out how PickleCam is changing the way match analysis works in the growing community of pickleball.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
