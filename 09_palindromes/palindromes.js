const palindromes = function (string) { 
    let letters = "qwertyuiopasdfghjklzxcvbnm1234567890".split("");
    let arrayFromString = string.toLowerCase().split("").filter(char => letters.some(letter => letter == char));
    console.log(arrayFromString);
    console.log(arrayFromString.reverse());
    
    if (arrayFromString.join("") === arrayFromString.reverse().join("")) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("racecare!"));

// Do not edit below this line
module.exports = palindromes;
