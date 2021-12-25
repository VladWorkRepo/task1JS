function flattenArray(deepArray) {
    deepArray = deepArray.split(", ");
    console.log(deepArray);
}

console.log(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]));

// function verify(input, goal) {
//   input = Array.isArray(input) ? input.join(', ') : input;
//   if (input == goal) {
//     console.log('Gratulacje!');
//   } else {
//     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//   }
// }

// verify(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]), "4, 3, 2, 1, 5");
// verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");