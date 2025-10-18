import React from 'react';
import { DollarSign, TrendingUp, Car, ArrowRight } from 'lucide-react';
import Navigation from './Navigation';

const Home = ({ setCurrentPage, savedPlans }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation setCurrentPage={setCurrentPage} savedPlans={savedPlans} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Vehicle <span className="text-red-600">Financing</span><br/>
            Made Simple
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Toyota Financial Services simplifies vehicle financing for customers. Get personalized financing 
            or leasing options based on your income, credit score, and preferences with clear payment simulations 
            and expert recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Plans</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive financing and leasing options tailored to your financial situation and lifestyle needs.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Simulations</h3>
            <p className="text-gray-600 leading-relaxed">
              Compare different plans with transparent monthly payment breakdowns and total cost calculations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Car className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Find Toyota models that perfectly fit your budget and lifestyle preferences.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 text-lg">Answer a few questions to receive your personalized financing recommendations</p>
          <button
            onClick={() => setCurrentPage('questionnaire')}
            className="bg-white text-red-600 px-12 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;