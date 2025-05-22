import React from "react";

const IoT = () => {
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        IoT Devices for Smart Agricultural System
      </h1>

      <div className="max-w-4xl mx-auto space-y-6 ">
        {/* Sensors Section */}
        <Section title="1. Sensors">
          <SensorItem title="Soil Moisture Sensor">
            Measures soil moisture to determine when watering is needed.
          </SensorItem>
          <SensorItem title="DHT11/DHT22 Sensor">
            Measures temperature and humidity. DHT22 offers better accuracy.
          </SensorItem>
          <SensorItem title="LDR (Light Dependent Resistor)">
            Detects light intensity for monitoring sunlight exposure.
          </SensorItem>
          <SensorItem title="pH Sensor">
            Measures soil acidity or alkalinity to determine soil suitability.
          </SensorItem>
          <SensorItem title="Ultrasonic Sensor">
            Measures water level in reservoirs using ultrasonic waves.
          </SensorItem>
        </Section>

        {/* Actuators Section */}
        <Section title="2. Actuators">
          <SensorItem title="Water Pumps">
            Automated watering based on soil moisture levels.
          </SensorItem>
          <SensorItem title="Solenoid Valves">
            Controls irrigation water flow using electrical signals.
          </SensorItem>
          <SensorItem title="Relay Modules">
            Controls high-power devices like pumps with low-power signals.
          </SensorItem>
          <SensorItem title="Servo Motors">
            Adjusts solar panels or greenhouse vents for optimal conditions.
          </SensorItem>
        </Section>

        {/* Connectivity Modules Section */}
        <Section title="3. Connectivity Modules">
          <SensorItem title="ESP32/ESP8266">
            Wi-Fi-enabled IoT modules for cloud communication.
          </SensorItem>
          <SensorItem title="GSM Module (SIM800L)">
            Sends SMS/calls for remote monitoring without Wi-Fi.
          </SensorItem>
        </Section>

        {/* Power Supply Section */}
        <Section title="4. Power Supply">
          <SensorItem title="12V Battery and Solar Panel">
            Charges using solar power for remote operation.
          </SensorItem>
          <SensorItem title="AC Power Supply">
            Alternative power source for continuous operation.
          </SensorItem>
        </Section>
      </div>
    </div>
  );
};

// Section Wrapper
const Section = ({ title, children }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
    <h2 className="text-xl font-semibold text-green-700 mb-4">{title}</h2>
    <div className="space-y-3">{children}</div>
  </div>
);

// Sensor Item Component
const SensorItem = ({ title, children }) => (
  <div className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-300">
    <h3 className="font-semibold text-green-700">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default IoT;
