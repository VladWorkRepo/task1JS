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
          switch(inputSplit[i]) {
            case "stop":
                index = inputSplit.indexOf("stop");
                inputSplit[index] = emojiMappings.stop;
                break;
            case "gwiazda":
                index = inputSplit.indexOf("gwiazda");
                inputSplit[index] = emojiMappings.gwiazda;
                break;
            case "samochód":
                index = inputSplit.indexOf("samochód");
                inputSplit[index] = emojiMappings.samochód;
                break;
            case "buduję":
                index = inputSplit.indexOf("buduję");
                inputSplit[index] = emojiMappings.buduję;
                break;
            case "budzik":
                index = inputSplit.indexOf("budzik");
                inputSplit[index] = emojiMappings.budzik;
                break;
            default:
                break;
          }
      }

    input= inputSplit.join(" ");
    return input;
  }
  
  console.log(useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"));
