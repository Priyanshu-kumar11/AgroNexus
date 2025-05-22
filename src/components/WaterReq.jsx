import React, { useState } from 'react';
import axios from 'axios';

const WaterReq = () => {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [crop, setCrop] = useState('');
  const [waterRequirement, setWaterRequirement] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://agronexusbackend-5.onrender.com/predictwater', {
        temperature,
        humidity,
        ph,
        crop,
      });

      setWaterRequirement(response.data.water_requirement);
      setError('');
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error || 'Error connecting to the server. Please try again.'
      );
      setWaterRequirement(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center rounded-lg shadow-lg bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Water Requirement Prediction
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Temperature (°C)"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <InputField
            label="Humidity (%)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
          <InputField
            label="pH"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
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
            <h3 className="text-xl sm:text-2xl font-semibold bg-green-100 text-green-600">
              Predicted Water Requirement: {waterRequirement} liters
            </h3>
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

const InputField = ({ label, value, onChange }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type="number"
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default WaterReq;
