function applyPredicate(elements, predicate) {
    predicate = x => {
        for(let i=0; i<elements.length; i++) {
            if(elements[i])
        }
    };
  }

//console.log(applyPredicate([1, 2, 3], element => element > 2));

const test1 = element => element > 2;
console.log(test1(3));

// function verify(input, goal) {
//     const inputAsString = JSON.stringify(input);
//     const goalAsString = JSON.stringify(goal);
  
//     if (inputAsString === goalAsString) {
//       console.log('Gratulacje!');
//     } else {
//       console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
//     }
//   }
  
//   verify(applyPredicate([1, 2, 3], element => element > 2), [3]);
//   verify(applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)), ['b', 'c']);
//   verify(applyPredicate(['x', 'y'], element => element === 'z'), []);