import React from 'react';

const HistoryList = () => {
  return (
    <div className="container mx-auto p-2 w-100 mt-5">
    {/* List Container */}
    <div className="bg-white rounded-lg shadow-lg">
      {/* List Header */}
      <div className="bg-gray-200 p-4 rounded-t-lg">
        <h1 className="text-lg font-semibold">Weight Log History</h1>
      </div>
      {/* List Items */}
      <ul className="divide-y divide-gray-300">
        <li className="p-4 hover:bg-gray-100 transition duration-200">
          <h2 className="text-md font-medium">185 LBs</h2>
          <p className="text-sm text-gray-600">September 20, 2023</p>
        </li>
        <li className="p-4 hover:bg-gray-100 transition duration-200">
          <h2 className="text-md font-medium">184.8 LBs</h2>
          <p className="text-sm text-gray-600">September 19, 2023</p>
        </li>
        <li className="p-4 hover:bg-gray-100 transition duration-200">
          <h2 className="text-md font-medium">184.5 LBs</h2>
          <p className="text-sm text-gray-600">September 18, 2023</p>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default HistoryList;