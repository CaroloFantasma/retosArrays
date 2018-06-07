const areValidCredentials = (name, password) => {

  const nameCheck = name.length;
  const passwordCheck = password.length;

  
  if (nameCheck > 3 && passwordCheck >= 8) {
    return true;

  } else {
    return false;
  }
}

var output = areValidCredentials ('Ritu', 'mylongpassword');
console.log(output);

// Escribe una función llamada areValidCredentials.

// Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

// Ejemplo de entrada:

// var output = areValidCredentials('Ritu', 'mylongpassword');
// console.log(output); // --> true

