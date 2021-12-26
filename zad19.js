function checkBrackets(stringWithBrackets) {
    const leftBraces = [];
  
    for (let i = 0; i < stringWithBrackets.length; i++) {
      const char = stringWithBrackets[i];
  
      switch (Brace(char)) {
        case 'L':
          leftBraces.push(char);
          break;
        case 'R':
          if (!Match(leftBraces.pop() + char)) {
            return false;
          }
          break;
      }
    }
  
    return leftBraces.length === 0; 
}

function Brace(c) {
    switch (c) {
        case ')': case '}': case ']':
        return 'R';
        case '(': case '{': case '[':
        return 'L';
        default:
        return ''; 
    }
}
  
function Match(brackets) {
    switch (brackets) {
        case '()': case '{}': case '[]':
        return true;
        default:
        return false;
    }
}

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
verify(checkBrackets("[{()]}"), false);
verify(checkBrackets("[]{})("), false);
verify(checkBrackets("()([{})]"), false);