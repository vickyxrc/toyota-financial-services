import React from 'react';
import { Car } from 'lucide-react';

const Navigation = ({ setCurrentPage, savedPlans, showMyPlans = true }) => {
  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-red-600 p-2 rounded">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-white font-bold text-lg">TOYOTA</span>
            <span className="text-red-600 text-xs block leading-none">Financial Services</span>
          </div>
        </div>
        {showMyPlans ? (
          <button
            onClick={() => setCurrentPage('myplans')}
            className="text-white hover:text-red-500 transition font-medium flex items-center space-x-2"
          >
            <span>View My Plans</span>
            {savedPlans && savedPlans.length > 0 && (
              <span className="bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {savedPlans.length}
              </span>
            )}
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage('home')}
            className="text-white hover:text-red-500 transition font-medium"
          >
            Back to Home
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;