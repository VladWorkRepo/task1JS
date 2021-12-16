//validate password
function validatePassword(password) {
    if(typeof password ==="string") { //check is the input password is string
        let specialChars = /[1234567890]/; //implement number values
        if(password.length >=3 && password.length <=10) { //check how long is the input pass
            if(specialChars.test(password) && password.includes("#") || password.includes("@") || password.includes("!")) { //check special characters
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        console.log(`${password} - this value not a string!`);
    }
}

 function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(validatePassword(''), false);
  verify(validatePassword('lol'), false);
  verify(validatePassword('ToDziala1#'), true);