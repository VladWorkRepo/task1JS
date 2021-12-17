function withPrefix(prefix) {

    return function(name) {
        if(typeof name == "string") {
            return prefix + name;
        } else {
            console.log("Value must be a string!");
        }
        
    };
  }
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

  const course = withPrefix('I ty Opanujesz JavaScript, ');

  try {
    verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
    verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
  } catch {
    console.log('Niestety :(');
  }
