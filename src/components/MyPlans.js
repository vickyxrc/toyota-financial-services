import React from 'react';
import { ArrowRight, Trash2 } from 'lucide-react';
import Navigation from './Navigation';

const MyPlans = ({ setCurrentPage, savedPlans, handleLogout, removePlan }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation setCurrentPage={setCurrentPage} showMyPlans={false} handleLogout={handleLogout} removePlan={removePlan}/>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">My Saved Plans</h2>
          <p className="text-gray-400 text-lg">
            {savedPlans.length === 0 
              ? 'No plans saved yet. Complete the questionnaire to get personalized recommendations!' 
              : `You have ${savedPlans.length} saved plan${savedPlans.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {savedPlans.length === 0 ? (
          <div className="text-center py-16">
            <button
              onClick={() => setCurrentPage('questionnaire')}
              className="bg-red-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
            >
              <span>Start Questionnaire</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={plan.image}
                    alt={plan.vehicle}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.type}
                  </div>
                  <button
                    onClick={() => removePlan(plan.id)}
                    className="absolute top-3 left-3 bg-white/90 hover:bg-red-600 text-gray-700 hover:text-white p-2 rounded-full transition shadow-lg group"
                    title="Remove plan"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.vehicle}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="space-y-2 text-sm bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="font-bold text-gray-900">{plan.monthlyPayment}</span>
                    </div>
                    {plan.apr && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">APR:</span>
                        <span className="font-bold text-gray-900">{plan.apr}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term:</span>
                      <span className="font-bold text-gray-900">{plan.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Down Payment:</span>
                      <span className="font-bold text-gray-900">{plan.downPayment}</span>
                    </div>
                    {plan.totalCost && (
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-600">Total Cost:</span>
                        <span className="font-bold text-red-600">{plan.totalCost}</span>
                      </div>
                    )}
                    {plan.mileageLimit && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mileage:</span>
                        <span className="font-bold text-gray-900">{plan.mileageLimit}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlans;