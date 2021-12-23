function countWords(sentence) {
    sentence = sentence.toLowerCase().replace(',', '').split(" ");
    let testarr={}; //create new array where i will place words and counter
    let temp;
    let counter=0;

    for(let i=0; i<sentence.length; i++) {
        temp=sentence[i]; //add element to temp
        for(let j=0; j<sentence.length; j++) { //add another one loop to check one element from previous loop in each element in this loop
            if(temp == sentence[j]) {
                counter++;
            } else {
                continue;
            }
            testarr[sentence[i]] = counter;
        }
        counter=0; //reset counter
        
        
    }
     
    return testarr;
}

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(JSON.stringify(countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")), JSON.stringify({
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}));
verify(JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")), JSON.stringify({
  tanie: 2,
  wino: 1,
  jest: 2,
  dobre: 2,
  bo: 1,
  i: 1,
}));