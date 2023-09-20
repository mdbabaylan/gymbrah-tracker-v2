import FloatingButton from "./FloatingButton"
import FloatingModal from "./FloatingModal"
import WeightChart from "./WeightChart"
import HistoryList from "./HistoryList"
import React, { useState } from 'react';

export default function Dashboard() {

  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
<div class="lg:flex lg:flex-col m-5">
  <div class="min-w-0 flex-0 mb-5">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Home</h2>
  </div>

  <div class="ml-0">
    <WeightChart/>
  </div>

  <div class="">
    <HistoryList/>
  </div>

  <div class="mt-5 flex lg:ml-4 lg:mt-0">
    <span class="sm:ml-3">
    <FloatingButton toggleModal={toggleModal}/>
    </span>
    <FloatingModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        number={number}
        handleNumberChange={handleNumberChange}
    />
    
  </div>

</div>
  )
}

