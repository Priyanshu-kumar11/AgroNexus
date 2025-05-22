import React from 'react'
import iot from '../assets/iot.png'
import mlmodels from '../assets/mlmodels.jpg'

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-4 bg-gray-100">
  {/* <!-- First Image and Description --> */}
  <div className="flex flex-col items-center text-center">
    <img 
      src={iot} 
      alt="Image 1" 
      className="h-40 w-40 object-cover rounded-lg shadow-lg"
    />
    <h2 className="text-xl font-bold mt-4">IoT Devices</h2>
    <p className=" font-semibold mt-2">
      Monitor and Control
    </p>
  </div>

  {/* <!-- Second Image and Description --> */}
  <div className="flex flex-col items-center text-center mt-4">
    <img 
      src={mlmodels} 
      alt="Image 2" 
      className="h-40 w-40 object-cover rounded-lg shadow-lg"
    />
    <h2 className="text-xl font-bold mt-4">ML Models</h2>
    <p className="font-semibold mt-2">
     Predictive Analysis
    </p>
  </div>
</div>

    </>
  )
}

export default HeroSection