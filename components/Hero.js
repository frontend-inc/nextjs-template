import React from 'react';

const Hero = ({ title = "Main Headline", subtitle = "Supporting text that explains your value proposition" }) => {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;