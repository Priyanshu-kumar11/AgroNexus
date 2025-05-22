import React, { useState } from 'react';

const Crop_Recc = () => {
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [predictedCrop, setPredictedCrop] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cropData = {
      N: parseFloat(N),
      P: parseFloat(P),
      K: parseFloat(K),
      temperature: parseFloat(temperature),
      humidity: parseFloat(humidity),
      ph: parseFloat(ph),
      rainfall: parseFloat(rainfall),
    };

    console.log('Crop Data:', cropData);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cropData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPredictedCrop(data.predicted_crop);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch prediction. Please try again later.');
    }
  };

  return (
    <div className="max-w-xl min-h-screen mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className='w-full max-w-lg bg-white p-6 rounded-lg shadow-lg'>
      <h1 className="text-2xl font-semibold bg-white text-center mb-6">Crop Recommendation</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="N" className="block text-lg font-medium">Nitrogen (N):</label>
          <input
            id="N"
            type="number"
            value={N}
            onChange={(e) => setN(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="P" className="block text-lg font-medium">Phosphorus (P):</label>
          <input
            id="P"
            type="number"
            value={P}
            onChange={(e) => setP(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="K" className="block text-lg font-medium">Potassium (K):</label>
          <input
            id="K"
            type="number"
            value={K}
            onChange={(e) => setK(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="temperature" className="block text-lg font-medium">Temperature (°C):</label>
          <input
            id="temperature"
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="humidity" className="block text-lg font-medium">Humidity (%):</label>
          <input
            id="humidity"
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="ph" className="block text-lg font-medium">pH Level:</label>
          <input
            id="ph"
            type="number"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="rainfall" className="block text-lg font-medium">Rainfall (mm):</label>
          <input
            id="rainfall"
            type="number"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Predict</button>
      </form>

      {predictedCrop && (
        <div className="mt-6">
          <h2 className="text-xl bg-green-100 text-green-800 font-medium">Predicted Crop: {predictedCrop}</h2>
        </div>
      )}

      {error && (
        <div className="mt-4">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Crop_Recc;
