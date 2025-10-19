import React from 'react';
import Navigation from './Navigation';

const Questionnaire = ({ setCurrentPage, questionnaireData, handleQuestionnaireChange, handleQuestionnaireSubmit, handleLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation setCurrentPage={setCurrentPage} showMyPlans={false} handleLogout={handleLogout} />

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
                  <option value="superprime">780+</option>
                  <option value="prime">661-780</option>
                  <option value="nonprime">601-660</option>
                  <option value="subprime">501-600</option>
                  <option value="deepsubprime">≤500</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment ($)</label>
                <input
                  type="number"
                  min="0"
                  value={questionnaireData.downPayment}
                  onChange={(e) => handleQuestionnaireChange('downPayment', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  placeholder="Enter down payment amount"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term (months)</label>
                <select
                  value={questionnaireData.loanTerm}
                  onChange={(e) => handleQuestionnaireChange('loanTerm', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                  <option value="72">72 months</option>
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
                  <option value="cars & minivans">Cars & Minivans</option>
                  <option value="crossovers & suv">Crossovers & SUV</option>
                  <option value="truck">Truck</option>
                  <option value="electrified">Electrified</option>
                  <option value="performance">Performance</option>
                  <option value="no preference">No Preference</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Financing Preference</label>
                <select
                  value={questionnaireData.financingPreference}
                  onChange={(e) => handleQuestionnaireChange('financingPreference', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition bg-white"
                  required
                >
                  <option value="">Select preference</option>
                  <option value="lease">Lease</option>
                  <option value="finance">Finance</option>
                  <option value="no preference">No Preference</option>
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