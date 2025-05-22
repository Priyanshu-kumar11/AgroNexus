import React from 'react';
import img from '../assets/agro.jpeg';
import img2 from '../assets/Picture1.png';

const Description = () => {
  return (
    <div className="p-10 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Section - Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-green-700 mb-6 leading-tight">
            Transforming Agriculture with IoT and Machine Learning
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold text-green-600">🌱 Smart Agriculture:</span>  
            IoT and Machine Learning are revolutionizing modern farming. By integrating smart sensors, cloud computing, and AI-powered analytics, farmers can enhance productivity, optimize resources, and achieve sustainable agriculture.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700">📡 IoT-Enabled Data Collection</h2>
              <p className="text-gray-700 mt-2">
                IoT sensors continuously monitor essential environmental parameters such as soil moisture, temperature, humidity, and nutrient levels. This eliminates manual monitoring and ensures real-time data collection.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700">☁️ Secure Cloud Storage & Processing</h2>
              <p className="text-gray-700 mt-2">
                Collected data is transmitted to a cloud-based platform for secure storage and processing. This allows real-time monitoring and remote access to crucial farming insights.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700">🧠 Machine Learning Model Development</h2>
              <p className="text-gray-700 mt-2">
                AI algorithms analyze stored data to detect patterns and make accurate predictions. Machine Learning helps in:
              </p>
              <ul className="list-none pl-6 mt-2 text-gray-700">
                <li>🔹 Predicting optimal irrigation schedules.</li>
                <li>🔹 Detecting early signs of crop diseases.</li>
                <li>🔹 Forecasting crop yield based on real-time conditions.</li>
                <li>🔹 Optimizing fertilization to enhance soil health.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700">🌍 Web-Based Farmer Dashboard</h2>
              <p className="text-gray-700 mt-2">
                A user-friendly web platform provides real-time updates and AI-powered recommendations. Key features include:
              </p>
              <ul className="pl-6 list-none mt-2 text-gray-700">
                <li>✅ Live tracking of soil and weather conditions.</li>
                <li>✅ AI-driven suggestions for improved farming.</li>
                <li>✅ Interactive graphical reports for data visualization.</li>
                <li>✅ Alerts and notifications for extreme conditions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={img} alt="Agriculture IoT" className="w-full rounded-lg shadow-lg object-cover" />
        </div>
      </div>

      {/* System Workflow Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">🔄 How the Entire System Works</h2>
        <p className="text-lg text-gray-700 max-w-5xl mx-auto">
          Data collection begins with IoT devices embedded in agricultural fields, continuously gathering key environmental metrics. This data is securely transmitted to the cloud, where it undergoes thorough analysis to build and train machine learning models. These models generate valuable insights, helping farmers make informed decisions. The results are then integrated into a web-based platform, offering real-time monitoring, predictive analytics, and automated recommendations for optimizing farming operations.
        </p>
        <div className="flex justify-center mt-8">
          <img src={img2} alt="System Workflow" className="w-full md:w-2/3 rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Description;
