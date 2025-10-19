import React from 'react';
import { LogOut } from 'lucide-react';
import logo from '../utils/toyota_logo.png';

const Navigation = ({ setCurrentPage, savedPlans, showMyPlans = true, handleLogout }) => {
  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Toyota Logo"
            className="w-10 h-auto object-contain"
          />
          <div>
            <span className="text-white font-bold text-lg">TOYOTA</span>
            <span className="text-red-600 text-xs block leading-none">Financial Services</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
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
          
          {handleLogout && (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-white hover:text-red-500 transition font-medium"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
