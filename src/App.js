import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import MyPlans from './components/MyPlans';

function App() {
  const [currentPage, setCurrentPage] = useState('signin');
  const [user, setUser] = useState({ email: '', password: '' });
  const [questionnaireData, setQuestionnaireData] = useState({
    income: '',
    creditScore: '',
    downPayment: '',
    monthlyBudget: '',
    vehicleType: '',
    loanTerm: '60',
    usage: ''
  });
  const [savedPlans, setSavedPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setCurrentPage('home');
    }
  };

  const handleQuestionnaireChange = (field, value) => {
    setQuestionnaireData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuestionnaireSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('results');
  };

  const togglePlanSelection = (plan) => {
    setSelectedPlans(prev => {
      const exists = prev.find(p => p.id === plan.id);
      if (exists) {
        return prev.filter(p => p.id !== plan.id);
      } else {
        return [...prev, plan];
      }
    });
  };

  const savePlans = () => {
    setSavedPlans(prev => {
      const newPlans = selectedPlans.filter(sp => !prev.find(p => p.id === sp.id));
      return [...prev, ...newPlans];
    });
    setCurrentPage('myplans');
  };

  const props = {
    setCurrentPage,
    user,
    setUser,
    handleSignIn,
    questionnaireData,
    handleQuestionnaireChange,
    handleQuestionnaireSubmit,
    savedPlans,
    selectedPlans,
    togglePlanSelection,
    savePlans
  };

  if (currentPage === 'signin') {
    return <SignIn {...props} />;
  }

  if (currentPage === 'home') {
    return <Home {...props} />;
  }

  if (currentPage === 'questionnaire') {
    return <Questionnaire {...props} />;
  }

  if (currentPage === 'results') {
    return <Results {...props} />;
  }

  if (currentPage === 'myplans') {
    return <MyPlans {...props} />;
  }

  return null;
}

export default App;