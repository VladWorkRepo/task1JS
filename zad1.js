// create a reverse function
function reverseMe(input) {
  if(typeof input === 'string') { //check if the input value is string
    let split = input.split(""); //split the input value
    let reverseArr = split.reverse(); //reverse splited input
    let joinInput = reverseArr.join(""); // join each letter to one word
    return joinInput;
  } else {
    console.log(`${input} - this value not a string!`);
  }
    
  }
    
  // verify function
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

  verify(reverseMe('a'), 'a');
  verify(reverseMe('abc'), 'cba');
  verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
  verify(reverseMe('Brawo!'), '!owarB');