let computeSumOfAllElements = (arr) => {
  
  let totalAdd= 0;
  
  for (let i= 0; i <arr.length; i++) {
     
    totalAdd += arr[i];
  }
  return totalAdd;
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); //6