function greeting(message) {
    message = message.toLowerCase();
    message = message.split("");
    


    for(let i=0; i<message.length; i++) {
        let element = message[i];
        let index;

        switch(element) {
            case 'a':
                index = message.indexOf(element);
                message[index] = '4';
                break;
            case 'e':
                index = message.indexOf(element);
                message[index] = '3';
                break;
            case 'o':
                index = message.indexOf(element);
                message[index] = '0';
                break;
            case 'i':
                index = message.indexOf(element);
                message[index] = '1';
                break;
            case 's':
                index = message.indexOf(element);
                message[index] = '5';
                break;
        }

        if(i%2==0) {
            message[i] = message[i].toUpperCase();
        } else {
            message[i] = message[i].toLowerCase();
        }
    }

    message = message.join("");
    return message;
}
  
function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}
  
  verify(greeting('hacker'), 'H4Ck3r');
  verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
  verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');