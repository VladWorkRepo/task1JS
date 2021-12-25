function getAnagrams(word, possibleAnagrams) {
    word = word.split('');
    let anagram;
    let arr = [];
    let possibleAnagramsElement;
    for(let i=0; i<word.length; i++) {

        if(possibleAnagrams[i] != undefined) {
            possibleAnagramsElement = possibleAnagrams[i];
        } else {
            break;
        }
        
        for(let j=0; j<possibleAnagramsElement.length; j++) {
            const e = possibleAnagramsElement.split('');
            const index = word.indexOf(e[j]);
            if(index !== -1) {
                if(anagram === undefined) {
                    anagram = e[j];
                } else {
                    anagram += e[j];
                }   
            } else if(index === -1) {
                anagram="";
                break;
            }
            if(word.length != possibleAnagramsElement.length) {
                anagram="";
                break;
            }
        }

        if(anagram != "") {
            arr.push(anagram);
            anagram="";
        } 
    }

    return arr;
    
}

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");