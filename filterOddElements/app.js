const filterOddElements = (array) => {

  let arr = [];

  for (let i = 0; i < array.length; i ++) {
    let numbers = array [i];
     
    if(numbers % 2 !== 0) {
      arr.push(numbers);  
    }
  }
    return (arr);
}
 console.log(filterOddElements ([1, 2, 3, 4, 5]));


//Escriba una función llamada "filterOddElements".
// Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

// Ejemplo:
// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

