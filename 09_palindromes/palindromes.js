const palindromes = function (string) { 
    let letters = "qwertyuiopasdfghjklzxcvbnm1234567890".split("");
    let arrayFromString = string.toLowerCase().split("").filter(char => letters.some(letter => letter == char));
    
    if (arrayFromString.join("") === arrayFromString.reverse().join("")) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
