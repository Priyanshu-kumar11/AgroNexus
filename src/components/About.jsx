import React from "react";

const About = () => {
  return (
    <div className="py-8 md:py-12 px-4 md:px-6 border-2 border-green-700 rounded-lg shadow-lg bg-white max-w-4xl mx-auto mt-4">
      <p className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-800">
        About Us
      </p>
      <p className="text-base md:text-lg lg:text-xl text-center leading-relaxed text-gray-700 max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-green-600">AgroNexus</span>, where innovation meets agriculture. We're transforming farming with the power of{" "}
        <span className="font-semibold text-green-600">IoT</span> and <span className="font-semibold text-green-600">Machine Learning</span>. Our smart solutions connect farms to real-time data—monitoring soil moisture, weather, and crop health to drive smarter decisions. By harnessing advanced analytics, we help farmers predict irrigation needs, manage pests, and boost yields. With <span className="font-semibold text-green-600">AgroNexus</span>, agriculture becomes more sustainable, efficient, and future-ready. Join us in cultivating the future of farming.
      </p>
    </div>
  );
};

export default About;
