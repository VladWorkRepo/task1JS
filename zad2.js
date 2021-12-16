function validatePassword(password) {
    if(typeof password ==="string") {
        let specialChars = /[1234567890]/;
        if(password.length >=3 && password.length <=10) {
            if(specialChars.test(password) && password.includes("#") || password.includes("@") || password.includes("!")) {
                return true;
            } else {
                return false;
            }
        } else {
            console.log("Your password must be between 3 and 10 chars");
        }
    } else {
        console.log(`${password} - this value not a string!`);
    }
}

