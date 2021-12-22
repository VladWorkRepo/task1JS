function isogram(word) {
    word = word.toLowerCase();
    //splitting the string, checking every character and it's index and then matching index of character to index of string
    return word.split("").every((char,index) => word.indexOf(char) == index); 
}


  
function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}
  
  verify(isogram('izogram'), true);
  verify(isogram('Przeprogramowani'), false);
  verify(isogram('SprawdzAm'), false);