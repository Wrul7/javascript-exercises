const fibonacci = function (number) {
    let answer = 0;
    let fArray = [0, 1];

    if (parseInt(number) < 0) {
        return "OOPS";
    }

    for (let i = 2; i <= parseInt(number); i++) {
        fArray.push((fArray[fArray.length - 2]) + (fArray[fArray.length - 1]));
    }

    return fArray[parseInt(number)];
};

// Do not edit below this line
module.exports = fibonacci;
