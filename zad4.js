function zipIt(first, second) {
    if(typeof first == "number" && typeof second == "number") { //check are the inputs = number
        let firstSplit = first.toString().split(""); 
        let secondSplit = second.toString().split("");
        let comparison;
        let join;

        if(firstSplit<=secondSplit) { //check which number is longer
            comparison = secondSplit;
        } else {
            comparison = firstSplit;
        }

        //check every splited numbers a find undefined values
        for(let i=0; i<comparison.length; i++) {
            if(join == undefined) { 
                join = firstSplit[i];
                join += secondSplit[i];
            }else if(firstSplit[i] == undefined && secondSplit[i] != undefined) {
                join += secondSplit[i];
            } else if(firstSplit[i] != undefined && secondSplit[i] == undefined){
                join += firstSplit[i];
            } else if(firstSplit[i] != undefined && secondSplit[i] != undefined){
                join += firstSplit[i];
                join += secondSplit[i];
            }
        }
        
        return join;

    } else {
        console.log("Some of inputs not a number");
    }
    
  }

  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(zipIt(111, 222), '121212');
  verify(zipIt(123, 456), '142536');
  verify(zipIt(12, 5555), '152555');
  verify(zipIt(5555, 12), '515255');