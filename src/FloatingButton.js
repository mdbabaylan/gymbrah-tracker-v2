import React from 'react';

const FloatingButton = ({toggleModal}) => {
  const handleClick = () => {
    toggleModal();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-400 text-white p-4 rounded-full hover:bg-green-700 focus:outline-none focus:bg-green-400 active:bg-green-500 text-2xl"
    >
      {/* You can use an icon or text inside the button */}
      +
    </button>
  );
};

export default FloatingButton;
