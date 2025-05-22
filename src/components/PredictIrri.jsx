import React, { useState } from 'react';
import axios from 'axios';

const PredictIrri = () => {
  // States to handle form inputs and results
  const [duration, setDuration] = useState('');
  const [irrigations, setIrrigations] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleIrrigationsChange = (e) => {
    setIrrigations(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending POST request to the Flask API
      const response = await axios.post('http://127.0.0.1:5000/predict_water', {
        duration,
        irrigations,
      });
      setResult(response.data.predicted_water_requirement);
      setError(null);
    } catch (err) {
      setError('Error: Please check the input or try again.');
      setResult(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen rounded-lg shadow-lg bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Water Requirement Prediction based on Number of Irrigations</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="duration" className="mb-2 text-sm font-medium text-gray-700">Duration (in days)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={handleDurationChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="irrigations" className="mb-2 text-sm font-medium text-gray-700">Number of Irrigations</label>
            <input
              type="number"
              id="irrigations"
              value={irrigations}
              onChange={handleIrrigationsChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Get Prediction
          </button>
        </form>

        {result && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
            <strong>Predicted Water Requirement based on irrigation days:</strong> {result}
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictIrri;
