import React from 'react'

const Intro = () => {
  return (
    <section className="w-full text-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="h-full">
          <h2 className="text-6xl font-montserrat text-black font-bold mb-8">
            Let players relive <br className="hidden md:block" /> their best moments
          </h2>
          <p className="font-montserrat text-black text-3xl">
            Capture every game, save every moment, and offer players pro-level
            footage with zero hassle.
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-auto">
          <img
            src="hero.jpg" // Replace with your image path
            alt="Pickleball Footage"
            width={400}
            height={400}
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro