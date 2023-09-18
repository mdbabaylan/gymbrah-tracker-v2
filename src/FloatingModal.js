import React from 'react';

const FloatingModal = ({ isOpen, toggleModal, number, handleNumberChange }) => {
  return (
    <div className="relative">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl mb-4">Enter your weight</h2>
            <input
              type="number"
              value={number}
              onChange={handleNumberChange}
              className="w-full p-2 border rounded mb-4"
            />
            
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 focus:outline-none focus:bg-green-500 active:bg-green-400 mr-2"
              >
                Save
              </button>
              <button
                onClick={toggleModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 focus:outline-none focus:bg-red-400 active:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingModal;
