import React, { useState } from 'react';
import axios from 'axios';

const PredictIrri = () => {
  const [duration, setDuration] = useState('');
  const [irrigations, setIrrigations] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleIrrigationsChange = (e) => setIrrigations(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://agronexusbackend-5.onrender.com/predict_water',
        { duration, irrigations }
      );
      setResult(response.data.predicted_water_requirement);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Error: Please check the input or try again.');
      setResult(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen rounded-lg shadow-lg bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Water Requirement Prediction Based on Number of Irrigations
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            id="duration"
            label="Duration (in days)"
            value={duration}
            onChange={handleDurationChange}
          />
          <InputField
            id="irrigations"
            label="Number of Irrigations"
            value={irrigations}
            onChange={handleIrrigationsChange}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Get Prediction
          </button>
        </form>

        {result && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
            <strong>Predicted Water Requirement:</strong> {result}
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

const InputField = ({ id, label, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="number"
      id={id}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md"
      required
    />
  </div>
);

export default PredictIrri;
