import React, { useState, useEffect } from 'react';

const AnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 8);
      } else {
        clearInterval(interval);
      }
    }, 100);

    if(progress >= 100){
        setProgress(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="container mx-auto mt-20">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
