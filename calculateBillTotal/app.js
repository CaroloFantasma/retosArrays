let calculateBillTotal = (preTaxAndTotalMeal) => {
  
  let tax = (preTaxAndTotalMeal / 100) *9.5 ;
  let tip = (preTaxAndTotalMeal / 100) * 15;
  
  return preTaxAndTotalMeal + tax + tip;
}

var output = calculateBillTotal(20);
console.log(output); 

module.exports = calculateBillTotal;