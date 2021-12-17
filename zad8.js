const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
  };
  
  function useEmoji(input) {
      input = input.splice(" ");
      console.log(input);
    return input;
  }
  
  console.log(useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"));
//   function verify(input, goal) {
//     if (input === goal) {
//       console.log('Gratulacje!');
//     } else {
//       console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//     }
//   }
  
//   verify(
//     useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"),
//     "Takiemu zachowaniu mówię 🚫 i to mocny estop!"
//   );
//   verify(useEmoji("Jadę po nowy samochód :D"), "Jadę po nowy 🏎 :D");
//   verify(useEmoji("Jadę po nowy samochódy :D"), "Jadę po nowy samochódy :D");
//   verify(
//     useEmoji("Właśnie buduję swoje skille w JS"),
//     "Właśnie 🧱 swoje skille w JS"
//   );
//   verify(
//     useEmoji("Właśnie nadbuduję swoje skille w JS"),
//     "Właśnie nadbuduję swoje skille w JS"
//   );
//   verify(useEmoji("Buduję samochód"), "🧱 🏎");
//   verify(useEmoji("BuDuję SaMocHód."), "🧱 🏎.");