// Utility to compute APR based on credit score and vehicle APR ranges
// Accepts creditScore as either a number (e.g. 720) or a string range ('good', 'excellent', etc.)
export function getAPRByCreditScore(creditScore, vehicleData) {
  if (!vehicleData || !vehicleData.financing) return 'N/A';

  const ranges = vehicleData.financing.aprRanges || [];

  // Representative numeric mapping for named ranges (supports both new and legacy labels)
  const labelToNumeric = {
    // new taxonomy
    'superprime': 790,
    'prime': 720,
    'nonprime': 630,
    'subprime': 550,
    'deepsubprime': 450,
    // legacy taxonomy
    'excellent': 760,
    'good': 720,
    'fair': 675,
    'poor': 600
  };

  // Normalize creditScore into a numeric value when possible
  let numericScore = null;
  if (typeof creditScore === 'number') {
    numericScore = creditScore;
  } else if (typeof creditScore === 'string') {
    if (!isNaN(parseInt(creditScore))) {
      numericScore = parseInt(creditScore);
    } else if (labelToNumeric[creditScore]) {
      numericScore = labelToNumeric[creditScore];
    }
  }

  // If the aprRanges directly contain a matching label, prefer that
  if (typeof creditScore === 'string') {
    const byLabel = ranges.find(r => r.range === creditScore);
    if (byLabel && byLabel.apr) return byLabel.apr;
  }

  // If numeric score is available, prefer explicit numeric ranges in aprRanges
  if (numericScore !== null) {
    const byNumeric = ranges.find(r => typeof r.min === 'number' && typeof r.max === 'number' && numericScore >= r.min && numericScore <= r.max);
    if (byNumeric && byNumeric.apr) return byNumeric.apr;

    // Fall back to label-threshold matching to support range labels
    const byThreshold = ranges.find(r => {
      if (r.range === 'superprime') return numericScore >= 781;
      if (r.range === 'prime') return numericScore >= 661 && numericScore <= 780;
      if (r.range === 'nonprime') return numericScore >= 601 && numericScore <= 660;
      if (r.range === 'subprime') return numericScore >= 501 && numericScore <= 600;
      if (r.range === 'deepsubprime') return numericScore < 501;

      if (r.range === 'excellent') return numericScore >= 750;
      if (r.range === 'good') return numericScore >= 700 && numericScore <= 749;
      if (r.range === 'fair') return numericScore >= 650 && numericScore <= 699;
      if (r.range === 'poor') return numericScore < 650;

      return false;
    });

    if (byThreshold && byThreshold.apr) return byThreshold.apr;
  }

  // Final fallback to static apr string on the financing plan
  return vehicleData.financing.apr || 'N/A';
}
