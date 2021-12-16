function zipIt(first, second) {
    if(typeof first == "number" && typeof second == "number") {
        let firstSplit = first.toString().split("");
        let secondSplit = second.toString().split("");
        let comparison;
        let join;

        if(firstSplit<=secondSplit) {
            comparison = secondSplit;
        } else {
            comparison = firstSplit;
        }

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
