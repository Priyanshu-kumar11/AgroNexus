import React from 'react';
import Crop_Recc from './Crop_Recc';
import WaterReq from './WaterReq';
import PredictIrri from './PredictIrri';

const Ml = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Machine Learning in Agriculture Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">Machine Learning in Agriculture in India</h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Machine learning (ML) is revolutionizing agriculture in India by enabling smarter, data-driven farming practices. 
            With the use of ML algorithms, farmers can make better decisions related to crop prediction, soil health, weather forecasting, 
            pest control, and irrigation management. ML models help analyze vast amounts of data from sensors, satellite imagery, 
            and historical crop performance to provide actionable insights, increasing yields and reducing wastage. 
            As agriculture in India faces challenges like unpredictable weather and limited resources, ML-driven solutions are enhancing productivity 
            and ensuring sustainable farming practices.
          </p>
        </div>

        {/* Regression and Classification Models Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Regression and Classification Models in Agriculture</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            In agriculture, <strong>regression models</strong> are used for predicting continuous values such as crop yield based on variables like weather, 
            soil conditions, and irrigation levels. For instance, a regression model might predict the amount of rainfall or the expected yield for a specific crop.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            On the other hand, <strong>classification models</strong> are employed to categorize data into predefined labels. These models help in tasks like disease 
            identification in plants or classifying soil types. By training on historical data, classification models can predict whether a plant will suffer from 
            a particular disease or if the soil is suitable for specific crops. These machine learning techniques are transforming how farmers manage their fields efficiently.
          </p>
        </div>
      </div>

      {/* Display Crop_Recc and WaterReq side by side */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="w-full sm:w-1/2">
          <Crop_Recc />
        </div>
        <div className="w-full sm:w-1/2">
          <WaterReq />
        </div>
        <div className="w-full sm:w-1/2">
          <PredictIrri/>
        </div>
      </div>
    </div>
  );
};

export default Ml;
