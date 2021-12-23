function checkISBN(isbn) {
    
    isbn = isbn.split("-").join('').split('');
    let temp;
    let x=10;

    for(let i=0; i<isbn.length; i++) {
        if(isbn[i] == "X") {
            isbn[i] = isbn[i].replace("X",'10');
        }

        if(temp == undefined) {
            temp=isbn[i]*x;
        } else if(temp != undefined) {
            temp+=isbn[i]*x;
        }
        x--;
    }
    if(temp%11 == 0) {
        return true;
    } else {
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

verify(checkISBN("85-359-0277-5"), true);
verify(checkISBN("3-04-013311-X"), true);
verify(checkISBN("8535902775"), true);
verify(checkISBN("99921-58-10-3"), false);
verify(checkISBN("9992158103"), false);