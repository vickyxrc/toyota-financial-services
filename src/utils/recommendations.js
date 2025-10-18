export const getRecommendations = (questionnaireData) => {
  const allPlans = [
    {
      id: 1,
      vehicle: 'Toyota Camry',
      type: 'Financing',
      apr: '4.99%',
      term: '60 months',
      monthlyPayment: '$450',
      downPayment: '$3,000',
      totalCost: '$30,000',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
      description: 'Perfect for daily commuting with excellent fuel efficiency'
    },
    {
      id: 2,
      vehicle: 'Toyota RAV4',
      type: 'Leasing',
      monthlyPayment: '$380',
      term: '36 months',
      downPayment: '$2,500',
      mileageLimit: '12,000 miles/year',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600&h=400&fit=crop',
      description: 'Versatile SUV ideal for families and weekend adventures'
    },
    {
      id: 3,
      vehicle: 'Toyota Corolla',
      type: 'Financing',
      apr: '3.99%',
      term: '48 months',
      monthlyPayment: '$350',
      downPayment: '$2,000',
      totalCost: '$19,800',
      image: 'https://images.unsplash.com/photo-1623869675781-80aa31ad7961?w=600&h=400&fit=crop',
      description: 'Reliable and affordable compact sedan with low maintenance'
    },
    {
      id: 4,
      vehicle: 'Toyota Highlander',
      type: 'Financing',
      apr: '5.49%',
      term: '72 months',
      monthlyPayment: '$580',
      downPayment: '$5,000',
      totalCost: '$46,760',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
      description: 'Spacious 3-row SUV perfect for growing families'
    },
    {
      id: 5,
      vehicle: 'Toyota Tacoma',
      type: 'Leasing',
      monthlyPayment: '$420',
      term: '36 months',
      downPayment: '$3,000',
      mileageLimit: '15,000 miles/year',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
      description: 'Rugged pickup truck for work and outdoor activities'
    },
    {
      id: 6,
      vehicle: 'Toyota Prius',
      type: 'Financing',
      apr: '3.49%',
      term: '60 months',
      monthlyPayment: '$380',
      downPayment: '$2,500',
      totalCost: '$25,300',
      image: 'https://images.unsplash.com/photo-1572635182729-0513235de870?w=600&h=400&fit=crop',
      description: 'Eco-friendly hybrid with exceptional fuel economy'
    }
  ];

  let recommendations = [];
  
  if (questionnaireData.vehicleType === 'sedan') {
    recommendations = allPlans.filter(p => ['Toyota Camry', 'Toyota Corolla', 'Toyota Prius'].includes(p.vehicle));
  } else if (questionnaireData.vehicleType === 'suv') {
    recommendations = allPlans.filter(p => ['Toyota RAV4', 'Toyota Highlander'].includes(p.vehicle));
    if (recommendations.length < 3) recommendations.push(allPlans[2]);
  } else if (questionnaireData.vehicleType === 'truck') {
    recommendations = [allPlans[4], allPlans[1], allPlans[0]];
  } else if (questionnaireData.vehicleType === 'hybrid') {
    recommendations = [allPlans[5], allPlans[2], allPlans[1]];
  } else {
    recommendations = [allPlans[0], allPlans[1], allPlans[2]];
  }

  return recommendations.slice(0, 3);
};