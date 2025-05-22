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

    try {
      const response = await fetch('https://agronexusbackend-5.onrender.com/predict', {
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
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold bg-white text-center mb-6">Crop Recommendation</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="Nitrogen (N):" id="N" value={N} setValue={setN} />
          <InputField label="Phosphorus (P):" id="P" value={P} setValue={setP} />
          <InputField label="Potassium (K):" id="K" value={K} setValue={setK} />
          <InputField label="Temperature (°C):" id="temperature" value={temperature} setValue={setTemperature} />
          <InputField label="Humidity (%):" id="humidity" value={humidity} setValue={setHumidity} />
          <InputField label="pH Level:" id="ph" value={ph} setValue={setPh} />
          <InputField label="Rainfall (mm):" id="rainfall" value={rainfall} setValue={setRainfall} />

          <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Predict
          </button>
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

const InputField = ({ label, id, value, setValue }) => (
  <div>
    <label htmlFor={id} className="block text-lg font-medium">{label}</label>
    <input
      id={id}
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      className="w-full p-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Crop_Recc;
