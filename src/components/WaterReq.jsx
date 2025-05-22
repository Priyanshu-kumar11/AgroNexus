import React, { useState } from 'react';
import axios from 'axios';

const WaterReq = () => {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [crop, setCrop] = useState('');
  const [waterRequirement, setWaterRequirement] = useState(null);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to Flask API
      const response = await axios.post('http://127.0.0.1:5000/predictwater', {
        temperature,
        humidity,
        ph,
        crop
      });

      // Set the water requirement prediction
      setWaterRequirement(response.data.water_requirement);
      setError('');
    } catch (err) {
      // Handle error if API call fails
      setError(err.response ? err.response.data.error : 'Error connecting to the server');
      setWaterRequirement(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center rounded-lg shadow-lg bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Water Requirement Prediction</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Temperature (°C):</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Humidity (%):</label>
            <input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">pH:</label>
            <input
              type="number"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Crop Type:</label>
            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a crop</option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="maize">Maize</option>
              <option value="soybean">Soybean</option>
              <option value="cotton">Cotton</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Predict Water Requirement
          </button>
        </form>

        {waterRequirement !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold bg-green-100 text-green-600">Predicted Water Requirement: {waterRequirement} liters</h3>
          </div>
        )}

        {error && (
          <div className="mt-4 text-center text-red-600">
            <h3>Error: {error}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterReq;
