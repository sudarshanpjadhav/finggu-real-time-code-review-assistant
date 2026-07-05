export const finggu_processReview = (code) => {
  // Simulated review logic
  const suggestions = [];
  if (code.includes('console.log')) {
    suggestions.push('Avoid using console.log in production code.');
  }
  return suggestions;
};