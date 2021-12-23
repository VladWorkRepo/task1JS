function filter(array, callback) {
    let tab = [];
    for(let i in array) {
        if(callback(array[i])) {
            tab.push(array[i]);
        }
    }
    return tab;
}

function length(array) {
    let lengthCounter=0;
    for(let i=0; i<array.length; i++) {
        lengthCounter++;
    }
    return lengthCounter;
}

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(',') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(filter([1, 2, 3, 4], (el) => el % 2 === 0), [2, 4]);
verify(filter([1, 2, 3, 4], (el) => el % 2 !== 0), [1, 3]);
verify(length([1, 2, 3, 4]), 4);
verify(length([]), 0);