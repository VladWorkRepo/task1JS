function rulez(...input) {
    return [].concat(...input); //implement empty arr and connect arrs from input and then return
  }

function verify(input, goal) {
    if (JSON.stringify(input) === JSON.stringify(goal)) {
        console.log("Gratulacje!");
    } else {
        console.log(`Niestety, oczekiwano - ${JSON.stringify(goal)}, otrzymano - ${JSON.stringify(input)}`);
    }
}

verify(rulez([1, 5], [6, 1]), [1,5,6,1]);
verify(rulez([1], [2], [3], [4], [5], [6]), [1,2,3,4,5,6]);