function thing(box) {
    // return true / false
}
  
function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}
  
  verify(thing(`*****
                *   * o
                *   *
                *****`), false);
  
  verify(thing(`*****
                * o *
                *   *
                *****`), true);
  
   verify(thing(`*****
                 *   *
                 *   *
                 *****`), false);