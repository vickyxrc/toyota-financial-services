// Enhanced recommendation engine with complete 2025 Toyota lineup
export const getRecommendations = (questionnaireData) => {
  const {
    income,
    creditScore,
    downPayment,
    monthlyBudget,
    vehicleType,
    financingPreference
  } = questionnaireData;

  // Complete 2025 Toyota vehicle database
  const allVehicles = [
    // SEDANS & HATCHBACKS
    {
      id: 1,
      vehicle: 'Toyota Corolla',
      category: 'cars & minivans',
      image: 'https://images.unsplash.com/photo-1623869675781-80aa31ad7961?w=600&h=400&fit=crop',
      description: 'Available in sedan and hatchback variants with hybrid options',
      financing: {
        apr: '3.99%',
        term: '48 months',
        monthlyPayment: 350,
        downPayment: 2000,
        totalCost: 19800,
        minCreditScore: 'fair',
        minIncome: 30000
      },
      leasing: {
        monthlyPayment: 280,
        term: '36 months',
        downPayment: 1500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'good',
        minIncome: 35000
      }
    },
    {
      id: 2,
      vehicle: 'Toyota Camry',
      category: 'cars & minivans',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
      description: 'Midsize sedan with available hybrid powertrains',
      financing: {
        apr: '4.99%',
        term: '60 months',
        monthlyPayment: 450,
        downPayment: 3000,
        totalCost: 30000,
        minCreditScore: 'fair',
        minIncome: 40000
      },
      leasing: {
        monthlyPayment: 350,
        term: '36 months',
        downPayment: 2500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'good',
        minIncome: 45000
      }
    },
    {
      id: 3,
      vehicle: 'Toyota Crown',
      category: 'cars & minivans',
      image: 'https://images.unsplash.com/photo-1617531653520-bd466f0ca7e9?w=600&h=400&fit=crop',
      description: 'Premium sedan experience with hybrid powertrains',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 680,
        downPayment: 5000,
        totalCost: 45800,
        minCreditScore: 'good',
        minIncome: 75000
      },
      leasing: {
        monthlyPayment: 550,
        term: '36 months',
        downPayment: 4000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 80000
      }
    },
    {
      id: 4,
      vehicle: 'Toyota GR Corolla',
      category: 'performance',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      description: 'Performance-oriented hatchback with AWD',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 580,
        downPayment: 4000,
        totalCost: 38800,
        minCreditScore: 'good',
        minIncome: 65000
      },
      leasing: {
        monthlyPayment: 480,
        term: '36 months',
        downPayment: 3500,
        mileageLimit: '10,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 70000
      }
    },
    {
      id: 5,
      vehicle: 'Toyota Prius',
      category: 'electrified',
      image: 'https://images.unsplash.com/photo-1572635182729-0513235de870?w=600&h=400&fit=crop',
      description: 'Iconic hybrid with improved fuel efficiency',
      financing: {
        apr: '3.49%',
        term: '60 months',
        monthlyPayment: 380,
        downPayment: 2500,
        totalCost: 25300,
        minCreditScore: 'good',
        minIncome: 40000
      },
      leasing: {
        monthlyPayment: 320,
        term: '36 months',
        downPayment: 2000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'good',
        minIncome: 45000
      }
    },
    {
      id: 6,
      vehicle: 'Toyota Prius Plug-in Hybrid',
      category: 'electrified',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
      description: 'Electric-only driving range with hybrid efficiency',
      financing: {
        apr: '3.99%',
        term: '60 months',
        monthlyPayment: 520,
        downPayment: 3500,
        totalCost: 34700,
        minCreditScore: 'good',
        minIncome: 55000
      },
      leasing: {
        monthlyPayment: 420,
        term: '36 months',
        downPayment: 3000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 60000
      }
    },
    {
      id: 7,
      vehicle: 'Toyota Mirai',
      category: 'electrified',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
      description: 'Hydrogen fuel cell sedan with zero emissions',
      financing: {
        apr: '4.99%',
        term: '60 months',
        monthlyPayment: 820,
        downPayment: 6000,
        totalCost: 55200,
        minCreditScore: 'excellent',
        minIncome: 90000
      },
      leasing: {
        monthlyPayment: 650,
        term: '36 months',
        downPayment: 5000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 90000
      }
    },

    // CROSSOVERS & SUVs
    {
      id: 8,
      vehicle: 'Toyota Corolla Cross',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop',
      description: 'Compact SUV with both gas and hybrid options',
      financing: {
        apr: '4.49%',
        term: '60 months',
        monthlyPayment: 380,
        downPayment: 2500,
        totalCost: 25300,
        minCreditScore: 'fair',
        minIncome: 38000
      },
      leasing: {
        monthlyPayment: 310,
        term: '36 months',
        downPayment: 2000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'good',
        minIncome: 40000
      }
    },
    {
      id: 9,
      vehicle: 'Toyota RAV4',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600&h=400&fit=crop',
      description: 'Available in gas, hybrid, and plug-in hybrid variants',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 490,
        downPayment: 3500,
        totalCost: 32700,
        minCreditScore: 'fair',
        minIncome: 50000
      },
      leasing: {
        monthlyPayment: 380,
        term: '36 months',
        downPayment: 2500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'good',
        minIncome: 50000
      }
    },
    {
      id: 10,
      vehicle: 'Toyota Highlander',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
      description: 'Midsize SUV with gas and hybrid models',
      financing: {
        apr: '5.49%',
        term: '72 months',
        monthlyPayment: 520,
        downPayment: 4500,
        totalCost: 42000,
        minCreditScore: 'good',
        minIncome: 70000
      },
      leasing: {
        monthlyPayment: 450,
        term: '36 months',
        downPayment: 3500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 70000
      }
    },
    {
      id: 11,
      vehicle: 'Toyota Grand Highlander',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop',
      description: 'Larger three-row SUV introduced for 2025',
      financing: {
        apr: '5.99%',
        term: '72 months',
        monthlyPayment: 620,
        downPayment: 5500,
        totalCost: 49600,
        minCreditScore: 'good',
        minIncome: 80000
      },
      leasing: {
        monthlyPayment: 520,
        term: '36 months',
        downPayment: 4500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 80000
      }
    },
    {
      id: 12,
      vehicle: 'Toyota Land Cruiser',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
      description: 'Returns with a hybrid i-FORCE MAX powertrain',
      financing: {
        apr: '5.99%',
        term: '72 months',
        monthlyPayment: 820,
        downPayment: 7000,
        totalCost: 66040,
        minCreditScore: 'excellent',
        minIncome: 100000
      },
      leasing: {
        monthlyPayment: 680,
        term: '36 months',
        downPayment: 6000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 100000
      }
    },
    {
      id: 13,
      vehicle: 'Toyota Sequoia',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
      description: 'Full-size SUV with hybrid options',
      financing: {
        apr: '5.99%',
        term: '72 months',
        monthlyPayment: 850,
        downPayment: 7500,
        totalCost: 68200,
        minCreditScore: 'excellent',
        minIncome: 105000
      },
      leasing: {
        monthlyPayment: 720,
        term: '36 months',
        downPayment: 6500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 105000
      }
    },
    {
      id: 14,
      vehicle: 'Toyota 4Runner',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
      description: 'Rugged SUV with off-road capabilities',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 680,
        downPayment: 5000,
        totalCost: 45800,
        minCreditScore: 'good',
        minIncome: 75000
      },
      leasing: {
        monthlyPayment: 550,
        term: '36 months',
        downPayment: 4000,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 75000
      }
    },
    {
      id: 15,
      vehicle: 'Toyota bZ4X',
      category: 'electrified',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
      description: 'All-electric SUV with modern technology',
      financing: {
        apr: '4.49%',
        term: '60 months',
        monthlyPayment: 720,
        downPayment: 5500,
        totalCost: 48700,
        minCreditScore: 'good',
        minIncome: 80000
      },
      leasing: {
        monthlyPayment: 580,
        term: '36 months',
        downPayment: 4500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 80000
      }
    },
    {
      id: 16,
      vehicle: 'Toyota Crown Signia',
      category: 'crossovers & suv',
      image: 'https://images.unsplash.com/photo-1617531653520-bd466f0ca7e9?w=600&h=400&fit=crop',
      description: 'Luxury crossover SUV with premium features',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 750,
        downPayment: 5500,
        totalCost: 50500,
        minCreditScore: 'excellent',
        minIncome: 85000
      },
      leasing: {
        monthlyPayment: 620,
        term: '36 months',
        downPayment: 4500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 85000
      }
    },

    // TRUCKS
    {
      id: 17,
      vehicle: 'Toyota Tacoma',
      category: 'truck',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
      description: 'Midsize pickup truck with legendary reliability',
      financing: {
        apr: '5.99%',
        term: '60 months',
        monthlyPayment: 520,
        downPayment: 4000,
        totalCost: 35200,
        minCreditScore: 'fair',
        minIncome: 55000
      },
      leasing: {
        monthlyPayment: 420,
        term: '36 months',
        downPayment: 3000,
        mileageLimit: '15,000 miles/year',
        minCreditScore: 'good',
        minIncome: 55000
      }
    },
    {
      id: 18,
      vehicle: 'Toyota Tundra',
      category: 'truck',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
      description: 'Full-size pickup truck with hybrid options',
      financing: {
        apr: '5.99%',
        term: '72 months',
        monthlyPayment: 580,
        downPayment: 5000,
        totalCost: 46760,
        minCreditScore: 'good',
        minIncome: 70000
      },
      leasing: {
        monthlyPayment: 520,
        term: '36 months',
        downPayment: 4000,
        mileageLimit: '15,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 70000
      }
    },

    // MINIVANS
    {
      id: 19,
      vehicle: 'Toyota Sienna',
      category: 'cars & minivans',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop',
      description: 'Hybrid-only minivan perfect for families',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 600,
        downPayment: 4500,
        totalCost: 40600,
        minCreditScore: 'good',
        minIncome: 70000
      },
      leasing: {
        monthlyPayment: 480,
        term: '36 months',
        downPayment: 3500,
        mileageLimit: '12,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 70000
      }
    },

    // PERFORMANCE
    {
      id: 20,
      vehicle: 'Toyota GR86',
      category: 'performance',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      description: 'Compact sports coupe with precision handling',
      financing: {
        apr: '4.99%',
        term: '60 months',
        monthlyPayment: 480,
        downPayment: 3500,
        totalCost: 31800,
        minCreditScore: 'good',
        minIncome: 60000
      },
      leasing: {
        monthlyPayment: 380,
        term: '36 months',
        downPayment: 3000,
        mileageLimit: '10,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 65000
      }
    },
    {
      id: 21,
      vehicle: 'Toyota GR Supra',
      category: 'performance',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      description: 'Performance sports car with thrilling power',
      financing: {
        apr: '5.49%',
        term: '60 months',
        monthlyPayment: 730,
        downPayment: 5500,
        totalCost: 49300,
        minCreditScore: 'excellent',
        minIncome: 85000
      },
      leasing: {
        monthlyPayment: 600,
        term: '36 months',
        downPayment: 4500,
        mileageLimit: '10,000 miles/year',
        minCreditScore: 'excellent',
        minIncome: 90000
      }
    }
  ];

  // Helper functions
  const creditScoreValue = {
    'excellent': 750,
    'good': 700,
    'fair': 650,
    'poor': 600
  };

  const meetsMinCreditScore = (required, actual) => {
    return creditScoreValue[actual] >= creditScoreValue[required];
  };

  const numIncome = parseInt(income);
  const numDownPayment = parseInt(downPayment);
  const numMonthlyBudget = parseInt(monthlyBudget);

  // Determine which plan type to use
  const getPlanForVehicle = (vehicle) => {
    if (financingPreference === 'finance') {
      return { plan: vehicle.financing, type: 'Financing' };
    } else if (financingPreference === 'lease') {
      return { plan: vehicle.leasing, type: 'Leasing' };
    } else {
      const finFits = vehicle.financing.monthlyPayment <= numMonthlyBudget;
      const leaseFits = vehicle.leasing.monthlyPayment <= numMonthlyBudget;
      
      if (finFits && !leaseFits) {
        return { plan: vehicle.financing, type: 'Financing' };
      } else if (!finFits && leaseFits) {
        return { plan: vehicle.leasing, type: 'Leasing' };
      } else {
        return vehicle.financing.monthlyPayment <= vehicle.leasing.monthlyPayment
          ? { plan: vehicle.financing, type: 'Financing' }
          : { plan: vehicle.leasing, type: 'Leasing' };
      }
    }
  };

  // Filter eligible vehicles
  let eligibleVehicles = allVehicles.filter(vehicle => {
    const matchesType = vehicleType === 'no preference' || vehicle.category === vehicleType;
    const { plan } = getPlanForVehicle(vehicle);

    const affordableMonthly = plan.monthlyPayment <= numMonthlyBudget;
    const affordableDown = plan.downPayment <= numDownPayment;
    const meetsIncome = numIncome >= plan.minIncome;
    const meetsCredit = meetsMinCreditScore(plan.minCreditScore, creditScore);

    return matchesType && affordableMonthly && affordableDown && meetsIncome && meetsCredit;
  });

  // Fallback: relax budget constraint
  if (eligibleVehicles.length === 0) {
    eligibleVehicles = allVehicles.filter(vehicle => {
      const matchesType = vehicleType === 'no preference' || vehicle.category === vehicleType;
      const { plan } = getPlanForVehicle(vehicle);
      
      const affordableDown = plan.downPayment <= numDownPayment;
      const meetsIncome = numIncome >= plan.minIncome;
      const meetsCredit = meetsMinCreditScore(plan.minCreditScore, creditScore);
      const nearBudget = plan.monthlyPayment <= numMonthlyBudget * 1.2;

      return matchesType && nearBudget && affordableDown && meetsIncome && meetsCredit;
    });
  }

  // Fallback: ignore vehicle type
  if (eligibleVehicles.length === 0) {
    eligibleVehicles = allVehicles.filter(vehicle => {
      const { plan } = getPlanForVehicle(vehicle);
      
      const affordableMonthly = plan.monthlyPayment <= numMonthlyBudget * 1.2;
      const affordableDown = plan.downPayment <= numDownPayment;
      const meetsIncome = numIncome >= plan.minIncome;
      const meetsCredit = meetsMinCreditScore(plan.minCreditScore, creditScore);

      return affordableMonthly && affordableDown && meetsIncome && meetsCredit;
    });
  }

  // Fallback: show most affordable
  if (eligibleVehicles.length === 0) {
    eligibleVehicles = [...allVehicles].sort((a, b) => {
      const planA = getPlanForVehicle(a).plan;
      const planB = getPlanForVehicle(b).plan;
      return planA.monthlyPayment - planB.monthlyPayment;
    });
  }

  // Score vehicles
  const scoredVehicles = eligibleVehicles.map(vehicle => {
    let score = 0;
    const { plan } = getPlanForVehicle(vehicle);
    
    const budgetDiff = Math.abs(plan.monthlyPayment - numMonthlyBudget);
    score += Math.max(0, 100 - budgetDiff);
    
    if (vehicle.category === vehicleType) score += 50;
    
    return { ...vehicle, score };
  });

  // Return top 3 with proper format
  return scoredVehicles
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(vehicle => {
      const { plan, type } = getPlanForVehicle(vehicle);
      
      return {
        id: vehicle.id,
        vehicle: vehicle.vehicle,
        type: type,
        image: vehicle.image,
        description: vehicle.description,
        monthlyPayment: `$${plan.monthlyPayment}`,
        downPayment: `$${plan.downPayment.toLocaleString()}`,
        term: plan.term,
        ...(type === 'Leasing' ? {
          mileageLimit: plan.mileageLimit
        } : {
          apr: plan.apr,
          totalCost: `$${plan.totalCost.toLocaleString()}`
        })
      };
    });
};