function getAnagrams(word, possibleAnagrams) {
    let alphabet = word.split('');
    possibleAnagrams = possibleAnagrams.split('');
    console.log(possibleAnagrams);
}


console.log(getAnagrams('program', ["ramprog", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]));
// function verify(input, goal) {
//   input = Array.isArray(input) ? input.join(', ') : input;
//   if (input == goal) {
//     console.log('Gratulacje!');
//   } else {
//     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//   }
// }

// verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
// verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");