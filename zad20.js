function flattenArray(deepArray) {
    let newArr = deepArray.flat();
    for(let i in newArr) {
        const e = newArr[i];

        let lastIndex = newArr.lastIndexOf(e);
        let index = newArr.indexOf(e);

        if(index !== lastIndex) {
            newArr.splice(lastIndex,1);
        }
    }

    for(let i in newArr) {
        if(newArr[i] == null || newArr[i] == undefined) {
            newArr.splice(i,1);
        }
    }

    return newArr;
}

//console.log(flattenArray([null, [1, 2, 3], [null, undefined]]));

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]), "4, 3, 2, 1, 5");
verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");