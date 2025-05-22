import React from 'react';

const Irrigation = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Water Requirement for Different Crops</h1>

      <section className="mb-6">
        <p className='text-xl'>As per Indian Agricultural Statistics Research Institute Water requirement for different crops: Irrigation schedules for field crops</p>
        <a href="http://ecoursesonline.iasri.res.in/Courses/Water%20Management%20including%20Micro%20Irrigation/AGRO103/Data%20Files/lec07.pdf" className='text-xl underline text-blue-700'>Link</a>
        <h2 className="text-xl font-semibold text-green-700">🌾Rice</h2>
        <p><strong>Total water requirement:</strong> 1100-1250 mm</p>
        <p>The daily consumptive use of rice varies from 6-10 mm, and the total water ranges from 1100 to 1250 mm depending upon the agro-climatic situation.</p>
        <p><strong>Water usage breakdown:</strong></p>
        <ul className="list-none pl-6">
          <li>✅ Nursery: 3% (40 mm)</li>
          <li>✅ Land preparation (puddling): 16% (200 mm)</li>
          <li>✅ Field irrigation: 81% (1000 mm)</li>
        </ul>
        <p><strong>Growth stages:</strong> Seedling, Vegetative, Reproductive, Ripening</p>
        <p>During the ripening phase, water requirement is less and can be gradually drained 15-21 days before harvest.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-700">🥜Groundnut</h2>
        <p><strong>Total water requirement:</strong> 500-550 mm</p>
        <p>The peak water requirement occurs between peg penetration and pod development stages.</p>
        <p><strong>Irrigation schedule:</strong></p>
        <ul className="list-none pl-6">
          <li>✅ First irrigation after sowing</li>
          <li>✅ Second irrigation 25 days after sowing</li>
          <li>✅ Irrigation interval of 15 days during flowering</li>
          <li>✅ Critical stages: 7-10 days interval</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-700">🌱Sugarcane</h2>
        <p><strong>Total water requirement:</strong> 1800-2200 mm</p>
        <p>The water requirement of sugarcane is divided across different growth stages.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-700">🫧Cotton</h2>
        <p><strong>Total water requirement:</strong> 550-600 mm</p>
        <p>Cotton is sensitive to soil moisture conditions. Little water is used by plant with early part of the season and more water is lost through evaporation than transpiration.</p>
        <p><strong>Irrigation schedule:</strong></p>
        <ul className="list-none pl-6">
          <li>✅ In the early stage as well as at the end the crop requires less water</li>
          <li>✅ Water requirement remains high till the boll development stage</li>
          <li>✅ Irrigation is continued until the first boll of the last flush opens, and then irrigation is stopped.</li>
        </ul>
      </section>

      <h2 className="text-xl font-semibold text-green-700 mb-2">Summary Table of Water Requirement</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse mb-6 text-sm">
          <thead>
            <tr className="bg-green-100">
              <th className="border px-4 py-2 text-green-700">Crop</th>
              <th className="border px-4 py-2 text-green-700">Duration (Days)</th>
              <th className="border px-4 py-2 text-green-700">Water Requirement (mm)</th>
              <th className="border px-4 py-2 text-green-700">No. of Irrigations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="border px-4 py-2">Rice</td>
              <td className="border px-4 py-2">135</td>
              <td className="border px-4 py-2">1250</td>
              <td className="border px-4 py-2">18</td>
            </tr>
            <tr className="border-b">
              <td className="border px-4 py-2">Groundnut</td>
              <td className="border px-4 py-2">105</td>
              <td className="border px-4 py-2">550</td>
              <td className="border px-4 py-2">10</td>
            </tr>
            <tr className="border-b">
              <td className="border px-4 py-2">Sugarcane</td>
              <td className="border px-4 py-2">365</td>
              <td className="border px-4 py-2">2000</td>
              <td className="border px-4 py-2">24</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cotton</td>
              <td className="border px-4 py-2">165</td>
              <td className="border px-4 py-2">550</td>
              <td className="border px-4 py-2">11</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Pulses</td>
              <td className="border px-4 py-2">65</td>
              <td className="border px-4 py-2">350</td>
              <td className="border px-4 py-2">4</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Maize</td>
              <td className="border px-4 py-2">110</td>
              <td className="border px-4 py-2">500</td>
              <td className="border px-4 py-2">8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Irrigation;
