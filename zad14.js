function findTags(message) {
    let test =[];
    let tab=[];
    let element;
    message = message.split(" ");
    
    for(let i=0; i<message.length; i++) {
        if(message[i].includes("#")) {
            tab.push(message[i]);
        }
    }

    for(let j in tab) {
        element = tab[j].replace(/!/g, '').split("#");
        test.push(element);
    }

    test = test.flat();

    for(let i in test) {
        let el = test[i];
        let index = test.indexOf(el);
        if(test[i] == "") {
            test.splice(index,1);
        }
    }
    return test;
}
  
function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}
  
  verify(findTags('W 2020 #opanujeJS'), 'opanujeJS');
  verify(findTags('Za chwilę dodam #opanujeJS!'), 'opanujeJS');
  verify(findTags('Lubię tagować #yolo #love#happy #h3cker'), 'yolo, love, happy, h3cker');