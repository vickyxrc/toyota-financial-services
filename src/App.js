import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import MyPlans from './components/MyPlans';
import SignIn from './components/SignIn';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [questionnaireData, setQuestionnaireData] = useState({
    income: '',
    creditScore: '',
    downPayment: '',
    monthlyBudget: '',
    vehicleType: '',
    financingPreference: '',
    loanTerm: '60'
  });

  const [selectedPlans, setSelectedPlans] = useState([]);
  const [savedPlans, setSavedPlans] = useState([]);

  // Load user session and saved plans on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setCurrentUser(userData);
      setIsAuthenticated(true);
      
      // Load user's saved plans
      const userPlansKey = `savedPlans_${userData.email}`;
      const userPlans = localStorage.getItem(userPlansKey);
      if (userPlans) {
        setSavedPlans(JSON.parse(userPlans));
      }
    }
  }, []);

  // Save plans to localStorage whenever they change
  useEffect(() => {
    if (currentUser && savedPlans.length > 0) {
      const userPlansKey = `savedPlans_${currentUser.email}`;
      localStorage.setItem(userPlansKey, JSON.stringify(savedPlans));
    }
  }, [savedPlans, currentUser]);

  const handleSignIn = (e, isSignUp) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Sign Up Logic
      const usersKey = 'registeredUsers';
      const existingUsers = JSON.parse(localStorage.getItem(usersKey) || '[]');
      
      // Check if user already exists
      const userExists = existingUsers.some(u => u.email === user.email);
      if (userExists) {
        alert('An account with this email already exists. Please sign in.');
        return;
      }
      
      // Register new user
      const newUser = { email: user.email, password: user.password };
      existingUsers.push(newUser);
      localStorage.setItem(usersKey, JSON.stringify(existingUsers));
      
      // Auto sign in after registration
      setCurrentUser({ email: user.email });
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify({ email: user.email }));
      
      alert('Account created successfully!');
    } else {
      // Sign In Logic
      const usersKey = 'registeredUsers';
      const existingUsers = JSON.parse(localStorage.getItem(usersKey) || '[]');
      
      const foundUser = existingUsers.find(
        u => u.email === user.email && u.password === user.password
      );
      
      if (foundUser) {
        setCurrentUser({ email: user.email });
        setIsAuthenticated(true);
        localStorage.setItem('currentUser', JSON.stringify({ email: user.email }));
        
        // Load user's saved plans
        const userPlansKey = `savedPlans_${user.email}`;
        const userPlans = localStorage.getItem(userPlansKey);
        if (userPlans) {
          setSavedPlans(JSON.parse(userPlans));
        }
      } else {
        alert('Invalid email or password');
      }
    }
    
    setUser({ email: '', password: '' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setSavedPlans([]);
    setSelectedPlans([]);
    setCurrentPage('home');
    localStorage.removeItem('currentUser');
    setUser({ email: '', password: '' });
  };

  const removePlan = (planId) => {
    setSavedPlans(prev => prev.filter(plan => plan.id !== planId));
  };

  const handleQuestionnaireChange = (field, value) => {
    // Normalize numeric fields to numbers where appropriate
    const numericFields = ['income', 'downPayment', 'monthlyBudget', 'loanTerm'];
    setQuestionnaireData(prev => ({
      ...prev,
      [field]: numericFields.includes(field) ? (value === '' ? '' : String(value)) : value
    }));
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
      const newPlans = [...prev];
      selectedPlans.forEach(plan => {
        if (!newPlans.find(p => p.id === plan.id)) {
          newPlans.push(plan);
        }
      });
      return newPlans;
    });
    setSelectedPlans([]);
    setCurrentPage('myplans');
  };

  if (!isAuthenticated) {
    return <SignIn user={user} setUser={setUser} handleSignIn={handleSignIn} />;
  }

  return (
    <div className="App">
      {currentPage === 'home' && (
        <Home 
          setCurrentPage={setCurrentPage} 
          savedPlans={savedPlans}
          handleLogout={handleLogout}
        />
      )}
      {currentPage === 'questionnaire' && (
        <Questionnaire
          setCurrentPage={setCurrentPage}
          questionnaireData={questionnaireData}
          handleQuestionnaireChange={handleQuestionnaireChange}
          handleQuestionnaireSubmit={handleQuestionnaireSubmit}
          handleLogout={handleLogout}
        />
      )}
      {currentPage === 'results' && (
        <Results
          setCurrentPage={setCurrentPage}
          questionnaireData={questionnaireData}
          selectedPlans={selectedPlans}
          togglePlanSelection={togglePlanSelection}
          savePlans={savePlans}
          handleLogout={handleLogout}
        />
      )}
      {currentPage === 'myplans' && (
        <MyPlans
        setCurrentPage={setCurrentPage}
        savedPlans={savedPlans}
        handleLogout={handleLogout}
        removePlan={removePlan}
      />
)}
    </div>
  );
}

export default App;