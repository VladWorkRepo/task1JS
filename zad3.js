class factory {
    constructor() {
        this.quote = 'Cool!';
    }
    

    
}

// const factory = ({
//    quote:'Cool!'
//    
// });
//  verify(factory.quote, 'Cool!');

verify(new factory().quote, 'Cool!');

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}