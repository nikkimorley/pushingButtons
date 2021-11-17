
/* Helper function to calculate factorial */
function makeFactorial(number){
  var factorial = number;
  if (factorial === 0) {
    /* Since a factorial is the product of positive numbers, 
    and zero isn't positive, a factorial of 0 is 1 */
    return 1;
  }
  for (let i = number - 1; i > 0; i--){
    factorial = factorial * i;
  }
  return factorial;
}

/* Helper function to calculate number of possible combinations
of buttons pushed if we know the number of buttons being pressed */
function combinationFormula(n, r) {
  /* 
  The formula for calculating combinations is n! / r!(n-r)!
  with n being the total number of buttons, 
  and r being a set number we want to press in each combination.
  So if we had 5 buttons to press, and we only want to press 2 at a time, n = 5 and r = 2.
  The ! represents a factorial in which we will use the helper function above.
  */
  return makeFactorial(n) / (makeFactorial(r) * (makeFactorial(n - r)));
}

/* 
Function to calculate the total of every possible 
combination of buttons that can be pushed 
*/
function totalCombinations(existingButtons) {
  var totalCombinations = 0;
  for (let i = existingButtons; i > 0; i--){
    totalCombinations += combinationFormula(existingButtons, i)
  }
  return totalCombinations;
}

