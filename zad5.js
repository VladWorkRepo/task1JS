function isPangram(sentence) {
    const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';
    const alphSplit = alphabet.split("");
    sentence = sentence.toLowerCase();
    const splitSentence = sentence.split("");

    for(let i=0; i<sentence.length; i++) { 
        const el = sentence[i]; //get each element of our sentence
        const index = alphSplit.indexOf(el); //get index of current element in sentence in alphabet 
        if(index !== -1) { // check if element from sentence is still in alphabet
            alphSplit.splice(index, 1); //cut element from alphabet if we already find it
        }
       
    }
    return !alphSplit.length;
  }
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(isPangram('test'), false);
  verify(isPangram('Dość gróźb fuzją, aklnę, pych i małżeństw!'), true);
  verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);