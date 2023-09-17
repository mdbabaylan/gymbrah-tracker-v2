import { findByText } from '@testing-library/react';
import React from 'react';


//V1 mistakes to fix
//GCP $300 credits, assuming VM runs at 4$ months, your free VM will run for 50months free!, maximize the ads, lets see what better things you could do
//after 50months
//History -> should literally be a history, list of all your previous logs, Weight for that day, Date and Time (similar to Eufy)
//Home -> Dashboard, place the line chart there instead , and mini form to Log your weight, 
// 1)develop and test the tailwind stuff here
// 2)create a new branch for gymbrah v1 -> replace the bootstrap modals/navbar code with TailWindCSS instead,
// 3) test functionality
// 4) if all done, apply the revisions for Home/History as mentioned above, replace LocalStorage with ContextAPI instead, session based login it seems
const Navbar = () => {
  return (
    <nav className="bg-stone-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-white text-lg font-semibold">
          GBT
        </a>
        <div className="flex space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            History
          </a>
          <a href="#" className="text-white">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
