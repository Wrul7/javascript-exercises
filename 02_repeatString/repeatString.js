const repeatString = function(wordInput, repeaterNum) {
    let resultWord = "";

    for (let i = 0; i < repeaterNum; i++) {
        resultWord = resultWord + wordInput;
    };
    
    if (repeaterNum < 0) {
        return "ERROR"
    } else {
        return resultWord; 
    };

};

// Do not edit below this line
module.exports = repeatString;
