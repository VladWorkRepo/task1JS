function applyPredicate(elements, predicate) {
    let tab = [];
    for(let i in elements) {
        if(predicate(elements[i])) {
            tab.push(elements[i]);
        }
    }
    return tab;
}

function verify(input, goal) {
    const inputAsString = JSON.stringify(input);
    const goalAsString = JSON.stringify(goal);
  
    if (inputAsString === goalAsString) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
    }
  }
  
  verify(applyPredicate([1, 2, 3], element => element > 2), [3]);
  verify(applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)), ['b', 'c']);
  verify(applyPredicate(['x', 'y'], element => element === 'z'), []);


// let elements = ['a', 'b', 'c'];
// let test=[];
// for(let i in elements) {
//     const predicate = element => ['b', 'c'].includes(element);
//     if(predicate(elements[i])) {
//         test.push(elements[i]);
//     }
// }

// console.log(test);