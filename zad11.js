function thing(box) {
    box = box.replace(/\s/g, ""); //remove whitespaces from box
    box = box.split(""); //split and add all chars to array
    for(let i=0; i<box.length; i++) {
        if((i == 6 && box[i] != '*') || (i == 8 && box[i] != '*')) { //check what is inside the box on upper position and lower position
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