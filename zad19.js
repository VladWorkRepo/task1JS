function checkBrackets(stringWithBrackets) {
    
}

console.log(checkBrackets("[{()}]"));

// function verify(input, goal) {
//   input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
//   if (input == goal) {
//     console.log('Gratulacje!');
//   } else {
//     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//   }
// }

// verify(checkBrackets("[{()}]"), true);
// verify(checkBrackets("[{]}"), false);
// verify(checkBrackets("()[{}]"), true);
// verify(checkBrackets("{[(]}}"), false);
// verify(checkBrackets("[{()]}"), false);
// verify(checkBrackets("[]{})("), false);
// verify(checkBrackets("()([{})]"), false);