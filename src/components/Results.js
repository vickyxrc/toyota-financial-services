import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import { getRecommendations } from '../utils/recommendations';

const Results = ({ setCurrentPage, questionnaireData, selectedPlans, togglePlanSelection, savePlans }) => {
  const recommendations = getRecommendations(questionnaireData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation setCurrentPage={setCurrentPage} showMyPlans={false} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Your Personalized Recommendations</h2>
          <p className="text-gray-400 text-lg">Based on your preferences, here are the best options for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {recommendations.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 ${
                selectedPlans.find(p => p.id === plan.id) ? 'ring-4 ring-red-600' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={plan.image}
                  alt={plan.vehicle}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {plan.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.vehicle}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{plan.description}</p>
                
                <div className="space-y-2 mb-5 text-sm bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Monthly Payment:</span>
                    <span className="font-bold text-gray-900 text-lg">{plan.monthlyPayment}</span>
                  </div>
                  {plan.apr && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">APR:</span>
                      <span className="font-bold text-gray-900">{plan.apr}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Term:</span>
                    <span className="font-bold text-gray-900">{plan.term}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Down Payment:</span>
                    <span className="font-bold text-gray-900">{plan.downPayment}</span>
                  </div>
                  {plan.totalCost && (
                    <div className="flex justify-between items-center border-t border-gray-200 pt-2 mt-2">
                      <span className="text-gray-600 font-medium">Total Cost:</span>
                      <span className="font-bold text-red-600 text-lg">{plan.totalCost}</span>
                    </div>
                  )}
                  {plan.mileageLimit && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Mileage:</span>
                      <span className="font-bold text-gray-900">{plan.mileageLimit}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => togglePlanSelection(plan)}
                  className={`w-full py-3 rounded-lg font-bold transition transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    selectedPlans.find(p => p.id === plan.id)
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlans.find(p => p.id === plan.id) ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Selected</span>
                    </>
                  ) : (
                    <span>Select This Plan</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlans.length > 0 && (
          <div className="text-center bg-white rounded-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Save Your Plans?</h3>
            <p className="text-gray-600 mb-6">You've selected {selectedPlans.length} plan{selectedPlans.length !== 1 ? 's' : ''}</p>
            <button
              onClick={savePlans}
              className="bg-red-600 text-white px-12 py-4 rounded-lg font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-xl inline-flex items-center space-x-2 text-lg"
            >
              <span>Save My Plans</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;