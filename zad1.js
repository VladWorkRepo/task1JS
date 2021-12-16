function reverseMe(input) {

  if(typeof input === 'string') {
    let split = input.split("");
    let reverseArr = split.reverse();
    let joinInput = reverseArr.join("");
    return joinInput;
  } else {
    console.log(`${input} - this value not a string!`);
  }
    
  }
    
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }