import React from 'react';
import Navigation from './Navigation';

const Questionnaire = ({ setCurrentPage, questionnaireData, handleQuestionnaireChange, handleQuestionnaireSubmit }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation setCurrentPage={setCurrentPage} showMyPlans={false} />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">Tell Us About Yourself</h2>
          <p className="text-gray-400 text-lg">Help us find the perfect financing plan for you</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <form onSubmit={handleQuestionnaireSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Income</label>
                <select
                  value={questionnaireData.income}
                  onChange={(e) => handleQuestionnaireChange('income', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select income range</option>
                  <option value="30000">Under $30,000</option>
                  <option value="50000">$30,000 - $50,000</option>
                  <option value="75000">$50,000 - $75,000</option>
                  <option value="100000">$75,000 - $100,000</option>
                  <option value="150000">Over $100,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Credit Score</label>
                <select
                  value={questionnaireData.creditScore}
                  onChange={(e) => handleQuestionnaireChange('creditScore', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select credit range</option>
                  <option value="excellent">Excellent (750+)</option>
                  <option value="good">Good (700-749)</option>
                  <option value="fair">Fair (650-699)</option>
                  <option value="poor">Building Credit (under 650)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment</label>
                <select
                  value={questionnaireData.downPayment}
                  onChange={(e) => handleQuestionnaireChange('downPayment', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select amount</option>
                  <option value="1000">$0 - $1,000</option>
                  <option value="3000">$1,000 - $3,000</option>
                  <option value="5000">$3,000 - $5,000</option>
                  <option value="10000">$5,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Budget</label>
                <select
                  value={questionnaireData.monthlyBudget}
                  onChange={(e) => handleQuestionnaireChange('monthlyBudget', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="300">Under $300/month</option>
                  <option value="400">$300 - $400/month</option>
                  <option value="500">$400 - $500/month</option>
                  <option value="600">$500 - $600/month</option>
                  <option value="700">Over $600/month</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type Preference</label>
                <select
                  value={questionnaireData.vehicleType}
                  onChange={(e) => handleQuestionnaireChange('vehicleType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="hybrid">Hybrid/Electric</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Usage</label>
                <select
                  value={questionnaireData.usage}
                  onChange={(e) => handleQuestionnaireChange('usage', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select usage</option>
                  <option value="commute">Daily Commute</option>
                  <option value="family">Family Transportation</option>
                  <option value="business">Business Use</option>
                  <option value="recreation">Recreation & Travel</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-lg text-lg mt-8"
            >
              Get My Recommendations
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;