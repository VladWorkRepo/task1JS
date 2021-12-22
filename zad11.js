function thing(box) {
    box = box.replace(/\s/g, "");
    box = box.split("");
    for(let i=0; i<box.length; i++) {
        if((i == 6 && box[i] != '*') || (i == 8 && box[i] != '*')) {
            return true;
        }
    }
    return false;
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