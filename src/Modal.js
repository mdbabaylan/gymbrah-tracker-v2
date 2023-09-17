import React, { useState } from 'react';

const FloatingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 active:bg-blue-600"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl mb-4">Enter a Number</h2>
            <input
              type="number"
              value={number}
              onChange={handleNumberChange}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end">
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
