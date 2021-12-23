function findTags(message) {
    let temp = message.split("#");
    message = message.split(" ");
    //console.log(message);
    let tab=[];
    for(let i = 0; i<message.length; i++) {
        if(message[i].includes("#")) {
            tab.push(message[i].replace(/#|!/g, ''));
        } else {
            continue;
        }
    }
    return tab;
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