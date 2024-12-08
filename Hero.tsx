import React from "react";

const Banner = () => {
  return (
    <section className="bg-gray-100 py-16 px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Content */}
      <div className="max-w-md text-left space-y-4">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          Welcome to Chairy
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mt-2 leading-snug">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg shadow-lg hover:bg-teal-600 transition-all">
          Shop Now <span className="ml-2">→</span>
        </button>
      </div>

      {/* Right Side Image */}
      <div className="mt-8 md:mt-0">
        <img
          src="/b1.png"
          alt="Chair"
          width={434}
          height={584}
          className="w-[584px] h-[584px] object-contain mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default Banner