import React, { useState } from 'react';
import { Car, User, Lock, AlertCircle } from 'lucide-react';
import logo from '../utils/toyota_logo.png';

const SignIn = ({ user, setUser, handleSignIn, handleLogout }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate password for sign up
    if (isSignUp) {
      if (user.password.length < 8) {
        setPasswordError('Password must be at least 8 characters');
        return;
      }
      setPasswordError('');
    }
    
    handleSignIn(e, isSignUp);
  };

  const handlePasswordChange = (e) => {
    setUser({...user, password: e.target.value});
    if (passwordError && e.target.value.length >= 8) {
      setPasswordError('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="bg-red-600 p-3 rounded-lg">
              <img
                src={logo}
                alt="Toyota Logo"
            className="w-10 h-auto object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-white">TOYOTA</h1>
              <p className="text-red-600 text-sm font-semibold">Financial Services</p>
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            {isSignUp ? 'Create your account' : 'Sign in to find your perfect financing plan'}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={user.password}
                  onChange={handlePasswordChange}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                    passwordError ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-600'
                  }`}
                  placeholder="••••••••"
                  required
                  minLength={isSignUp ? 8 : undefined}
                />
              </div>
              {passwordError && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span>{passwordError}</span>
                </div>
              )}
              {isSignUp && !passwordError && (
                <p className="text-gray-500 text-xs mt-2">Must be at least 8 characters</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>
          
          <p className="text-center text-gray-600 text-sm mt-4">
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <span 
              onClick={() => {
                setIsSignUp(!isSignUp);
                setPasswordError('');
              }}
              className="text-red-600 font-semibold cursor-pointer hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;