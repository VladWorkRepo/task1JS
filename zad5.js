function isPangram(sentence) {
    const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';
    const alphSplit = alphabet.split("");
    sentence = sentence.toLowerCase();

    for(let i=0; i<sentence.length; i++) {
        const el = sentence[i];
        const index = alphSplit.indexOf(el);
        if(index !== -1) {
            alphSplit.splice(index, 1);
        }
    }
    return !alphSplit.length;
  }
