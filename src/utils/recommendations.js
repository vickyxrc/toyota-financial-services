// Importing images
import toyotaCorolla from './car_images/toyota_corolla.webp';
import toyotaCamry from './car_images/toyota_camry.webp';
import toyotaCrown from './car_images/toyota_crown.png';
import toyotaGRCorolla from './car_images/toyota_gr_corolla.webp';
import toyotaPrius from './car_images/toyota_prius.jpg'
import toyotaPriusPlug from './car_images/toyota_prius_plug_in_hybrid.jpg'
import toyotaMirai from './car_images/toyota_mirai.webp';
import toyotaCorollaCross from './car_images/toyota_corolla_cross.png';
import toyotaRAV from './car_images/toyota_RAV4.webp';
import toyotaHighlander from './car_images/toyota_highlander.webp';
import toyotaGrandHighlander from './car_images/toyota_grand_highlander.webp';
import toyotaLandCruiser from './car_images/toyota_land_cruiser.jpg';
import toyotaSequoia from './car_images/toyota_sequoia.png';
import toyota4 from './car_images/toyota_4Runner.webp';
import toyotaBZ from './car_images/toyota_bZ4X.jpg';
import toyotaCrownSignia from './car_images/toyota_crown_signia.webp';
import toyotaTacoma from './car_images/toyota_tacoma.webp';
import toyotaTundra from './car_images/toyota_tundra.webp';
import toyotaSienna from './car_images/toyota_sienna.jpg'
import toyotaGR86 from './car_images/toyota_GR86.webp';
import toyotaGRSupra from './car_images/toyota_GR_supra.png';
import { getAPRByCreditScore } from './apr';

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
      image: toyotaCorolla,
      description: 'Available in sedan and hatchback variants with hybrid options',
      financing: {
        // aprRanges allows dynamic APR selection based on credit score
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 22725,
        // minIncome: Math.round(totalCost * 0.45)
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
      image: toyotaCamry,
      description: 'Midsize sedan with available hybrid powertrains',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 29000,
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
      image: toyotaCrown,
      description: 'Premium sedan experience with hybrid powertrains',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 41440,
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
      image: toyotaGRCorolla,
      description: 'Performance-oriented hatchback with AWD',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 39160,
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
      image: toyotaPrius,
      description: 'Iconic hybrid with improved fuel efficiency',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 28550,
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
      image: toyotaPriusPlug,
      description: 'Electric-only driving range with hybrid efficiency',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 33775,
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
      image: toyotaMirai,
      description: 'Hydrogen fuel cell sedan with zero emissions',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 52990,
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
      image: toyotaCorollaCross,
      description: 'Compact SUV with both gas and hybrid options',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 25300,
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
      image: toyotaRAV,
      description: 'Available in gas, hybrid, and plug-in hybrid variants',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 32700,
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
      image: toyotaHighlander,
      description: 'Midsize SUV with gas and hybrid models',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 42000,
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
      image: toyotaGrandHighlander,
      description: 'Larger three-row SUV introduced for 2025',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 49600,
        // minIncome: 80000
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
      image: toyotaLandCruiser,
      description: 'Returns with a hybrid i-FORCE MAX powertrain',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 66040,
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
      image: toyotaSequoia,
      description: 'Full-size SUV with hybrid options',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 68200,
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
      image: toyota4,
      description: 'Rugged SUV with off-road capabilities',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 45800,
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
      image: toyotaBZ,
      description: 'All-electric SUV with modern technology',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 48700,
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
      image: toyotaCrownSignia,
      description: 'Luxury crossover SUV with premium features',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 50500,
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
      image: toyotaTacoma,
      description: 'Midsize pickup truck with legendary reliability',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 35200,
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
      image: toyotaTundra,
      description: 'Full-size pickup truck with hybrid options',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 46760,
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
      image: toyotaSienna,
      description: 'Hybrid-only minivan perfect for families',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 40600,
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
      image: toyotaGR86,
      description: 'Compact sports coupe with precision handling',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 31800,
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
      image: toyotaGRSupra,
      description: 'Performance sports car with thrilling power',
      financing: {
        aprRanges: [
          { range: 'superprime', apr: '5.27%' },
          { range: 'prime', apr: '6.78' },
          { range: 'nonprime', apr: '9.97%' },
          { range: 'subprime', apr: '13.38%' },
          { range: 'deepsubprime', apr: '15.97%'}
        ],
        totalCost: 49300,
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
    'superprime': 850,
    'prime' : 780,
    'nonprime' : 660,
    'subprime' : 600,
    'deepsubprime' : 500
  };

  const meetsMinCreditScore = (required, actual) => {
    return creditScoreValue[actual] >= creditScoreValue[required];
  };

  const numIncome = parseInt(income);
  const numDownPayment = parseInt(downPayment);
  const numMonthlyBudget = parseInt(monthlyBudget);

  // Helper to get a plan's minimum income requirement. If not provided, derive from totalCost.
  const getPlanMinIncome = (plan) => {
    if (!plan) return 0;
    if (typeof plan.minIncome === 'number') return plan.minIncome;
    const cost = typeof plan.totalCost === 'number' ? plan.totalCost : parseFloat(plan.totalCost);
    if (!isNaN(cost) && cost > 0) return Math.round(cost * 0.75);
    return 0;
  };

  // Compute lease monthly payment with provided formula and rounding
  const computeLeaseMonthly = (vehicle, plan) => {
    const termMonths = parseInt(questionnaireData.loanTerm || (plan && plan.term) || '36');
    const termFactors = {
      36: 0.025,
      48: 0.020,
      60: 0.018,
      72: 0.016
    };

    const creditFactors = {
      'superprime': 0.85,
      'prime': 1.0,
      'nonprime': 1.25,
      'subprime': 1.6,
      'deepsubprime': 2.2
    };

    // Leasing plans don't include totalCost; fall back to vehicle.financing.totalCost when needed
    const vehiclePrice = (plan && typeof plan.totalCost === 'number') ? plan.totalCost
      : (vehicle && vehicle.financing && typeof vehicle.financing.totalCost === 'number') ? vehicle.financing.totalCost
      : parseFloat((plan && plan.totalCost) || (vehicle && vehicle.financing && vehicle.financing.totalCost)) || 0;
    const userDown = (() => {
      const v = parseFloat(downPayment);
      return !isNaN(v) ? v : (plan && typeof plan.downPayment === 'number' ? plan.downPayment : parseFloat((plan && plan.downPayment) || 0) || 0);
    })();

    const termFactor = termFactors[termMonths] || termFactors[60];
  const creditFactor = creditFactors[creditScore] || 1.0;

  const remaining = Math.max(0, vehiclePrice - userDown);
    const monthly = remaining * termFactor * creditFactor;

    return Math.round(monthly);
  };

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
    const { plan, type } = getPlanForVehicle(vehicle);

  const monthlyForEligibility = type === 'Leasing' ? computeLeaseMonthly(vehicle, plan) : (plan.monthlyPayment || 0);
    const affordableMonthly = monthlyForEligibility <= numMonthlyBudget;
    const affordableDown = (plan.downPayment || 0) <= numDownPayment;
    const minIncomeReq = getPlanMinIncome(plan);
    const meetsIncome = numIncome >= minIncomeReq;
    const meetsCredit = meetsMinCreditScore(plan.minCreditScore, creditScore);

    return matchesType && affordableMonthly && affordableDown && meetsIncome && meetsCredit;
  });

  // Fallback: relax budget constraint
  if (eligibleVehicles.length === 0) {
    eligibleVehicles = allVehicles.filter(vehicle => {
      const matchesType = vehicleType === 'no preference' || vehicle.category === vehicleType;
      const { plan, type } = getPlanForVehicle(vehicle);

  const monthlyForEligibility = type === 'Leasing' ? computeLeaseMonthly(vehicle, plan) : (plan.monthlyPayment || 0);
      const affordableDown = (plan.downPayment || 0) <= numDownPayment;
      const minIncomeReq = getPlanMinIncome(plan);
      const meetsIncome = numIncome >= minIncomeReq;
      const meetsCredit = meetsMinCreditScore(plan.minCreditScore, creditScore);
      const nearBudget = monthlyForEligibility <= numMonthlyBudget * 1.2;

      return matchesType && nearBudget && affordableDown && meetsIncome && meetsCredit;
    });
  }

  // Fallback: ignore vehicle type
  if (eligibleVehicles.length === 0) {
    eligibleVehicles = allVehicles.filter(vehicle => {
      const { plan, type } = getPlanForVehicle(vehicle);

  const monthlyForEligibility = type === 'Leasing' ? computeLeaseMonthly(vehicle, plan) : (plan.monthlyPayment || 0);
      const affordableMonthly = monthlyForEligibility <= numMonthlyBudget * 1.2;
      const affordableDown = (plan.downPayment || 0) <= numDownPayment;
      const minIncomeReq = getPlanMinIncome(plan);
      const meetsIncome = numIncome >= minIncomeReq;
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
    const { plan, type } = getPlanForVehicle(vehicle);

  const monthlyForScoring = type === 'Leasing' ? computeLeaseMonthly(vehicle, plan) : (plan.monthlyPayment || 0);
    const budgetDiff = Math.abs(monthlyForScoring - numMonthlyBudget);
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
      const computedApr = getAPRByCreditScore(creditScore, vehicle);

      // determine monthly payment and breakdown
      let monthlyPaymentDisplay = `$${plan.monthlyPayment}`;
      let aprDisplay = computedApr;
      let principalDisplay = null;
      let totalInterestDisplay = null;
      let totalPaidDisplay = null;

      if (type === 'Financing') {
        // Use user's loanTerm and downPayment when provided; otherwise fall back to plan values
        const termMonths = parseInt(questionnaireData.loanTerm || plan.term || '60');
        const userDown = parseFloat(downPayment) || 0;

        const vehiclePrice = parseFloat(plan.totalCost) || 0;
        const principal = Math.max(0, vehiclePrice - userDown);

        // parse APR string like '5.27%' to numeric
        let aprNumber = null;
        if (typeof computedApr === 'string') {
          const m = computedApr.match(/([0-9]+\.?[0-9]*)/);
          if (m) aprNumber = parseFloat(m[1]);
        } else if (typeof computedApr === 'number') {
          aprNumber = computedApr;
        }

        if (principal > 0 && aprNumber !== null && termMonths > 0) {
          const r = aprNumber / 12 / 100; // monthly rate
          const n = termMonths;
          // amortization formula
          const numerator = r * Math.pow(1 + r, n);
          const denominator = Math.pow(1 + r, n) - 1;
          const monthly = denominator !== 0 ? principal * (numerator / denominator) : principal / n;

          const monthlyRounded = Number(monthly.toFixed(2));
          const totalPayments = monthlyRounded * n;
          const totalInterest = totalPayments - principal;
          const totalPaidByBuyer = totalPayments + userDown;

          monthlyPaymentDisplay = `$${monthlyRounded.toFixed(2)}`;
          aprDisplay = `${aprNumber}%`;
          principalDisplay = `$${principal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
          totalInterestDisplay = `$${totalInterest.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
          totalPaidDisplay = `$${totalPaidByBuyer.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        } else {
          // fallback to plan monthlyPayment
          monthlyPaymentDisplay = `$${plan.monthlyPayment}`;
          if (typeof computedApr === 'string' && !computedApr.includes('%')) aprDisplay = `${computedApr}%`;
        }
      }

      // Leasing monthly calculation using user inputs: monthlyPayment = (carPrice - downPayment) * termFactor * creditFactor
      if (type === 'Leasing') {
        const leaseRounded = computeLeaseMonthly(vehicle, plan);
        monthlyPaymentDisplay = `$${leaseRounded.toLocaleString()}`;
      }

      return {
        id: vehicle.id,
        vehicle: vehicle.vehicle,
        type: type,
        image: vehicle.image,
        description: vehicle.description,
        monthlyPayment: monthlyPaymentDisplay,
        downPayment: `$${(parseFloat(downPayment) || plan.downPayment).toLocaleString()}`,
        term: type === 'Financing' ? `${questionnaireData.loanTerm || plan.term}` : plan.term,
        ...(type === 'Leasing' ? {
          mileageLimit: plan.mileageLimit
        } : {
          apr: aprDisplay,
          totalCost: `$${plan.totalCost.toLocaleString()}`,
          principal: principalDisplay,
          totalInterest: totalInterestDisplay,
          totalPaid: totalPaidDisplay
        })
      };
    });
};