const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
  };
  
  function useEmoji(input) {
      const inputSplit = input.split(" ");

      for(let i=0; i<inputSplit.length; i++) {
          let index;
          let temp = inputSplit[i].toLowerCase();
          temp = temp.replace(/[.]/gi, '');
          //console.log(temp);

          switch(temp) {
            case "stop":
                index = inputSplit.indexOf(inputSplit[i]);
                inputSplit[index] = emojiMappings.stop;
                break;
            case "gwiazda":
                index = inputSplit.indexOf(inputSplit[i]);
                inputSplit[index] = emojiMappings.gwiazda;
                break;
            case "samochód":
                index = inputSplit.indexOf(inputSplit[i]);
                inputSplit[index] = emojiMappings.samochód;
                break;
            case "buduję":
                index = inputSplit.indexOf(inputSplit[i]);
                inputSplit[index] = emojiMappings.buduję;
                break;
            case "budzik":
                index = inputSplit.indexOf(inputSplit[i]);
                inputSplit[index] = emojiMappings.budzik;
                break;
            default:
                break;
          }
      }

    input = inputSplit.join(" ");
    return input;
  }

  function toSmallCase(input) {
      input = input.toLowerCase();
      return input;
  }

  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(
    useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"),
    "Takiemu zachowaniu mówię 🚫 i to mocny estop!"
  );
  verify(useEmoji("Jadę po nowy samochód :D"), "Jadę po nowy 🏎 :D");
  verify(useEmoji("Jadę po nowy samochódy :D"), "Jadę po nowy samochódy :D");
  verify(
    useEmoji("Właśnie buduję swoje skille w JS"),
    "Właśnie 🧱 swoje skille w JS"
  );
  verify(
    useEmoji("Właśnie nadbuduję swoje skille w JS"),
    "Właśnie nadbuduję swoje skille w JS"
  );
  verify(useEmoji("Buduję samochód"), "🧱 🏎");
  verify(useEmoji("BuDuję SaMocHód."), "🧱 🏎.");