const reverseString = function(normalString) {
    let returnString = "";
    for (let i = 0; i < normalString.length; i++) {
        let letter = normalString.at(-1 - i);
        returnString = returnString + normalString.at(-1 - i);
    };

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
