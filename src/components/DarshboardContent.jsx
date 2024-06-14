import React from "react";

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Your FD Portfolio</h2>
        <select className="mb-4 p-2 border rounded">
          <option>Deposit Amt</option>
        </select>
        <div className="flex justify-center mb-4">
          {/* Placeholder for Pie Chart */}
          <div className="w-48 h-48 bg-gray-200 rounded-full"></div>
        </div>
        <ul className="text-sm">
          <li>Bajaj Finserv</li>
          <li>Shriram Finance</li>
          <li>Mahindra Finance</li>
          <li>Utkarsh Small Finance Bank</li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">FD Maturity Timeline</h2>
        {/* Placeholder for Timeline Chart */}
        <div className="w-full h-48 bg-gray-200"></div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">
          Utkarsh Small Finance Bank
        </h2>
        <p>Highest Interest Rate</p>
        <p>RBI Insured</p>
        <p>Interest Up to 9.10% p.a</p>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded">
          Book Now
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Bajaj Finserv</h2>
        <p>Crisil AAA Rated</p>
        <p>No Video KYC required</p>
        <p>Interest Up to 8.80% p.a</p>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded">
          Book Now
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Video KYC</h2>
        <p>Scheduled On</p>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
            {/* Placeholder for Calendar Icon */}
          </div>
          <p>28 Oct, 2023</p>
        </div>
        <button className="p-2 bg-blue-500 text-white rounded">
          Complete Now
        </button>
        <button className="ml-4 p-2 border rounded">Reschedule</button>
      </div>
    </div>
  );
};

export default DashboardContent;
