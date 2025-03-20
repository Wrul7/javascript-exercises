const findTheOldest = function(arr) {
    const date = new Date();

    let arrOfAge = arr.map(person => {
        return {
            name: person["name"],
            age: person["yearOfDeath"] === undefined ? (date.getFullYear() - person["yearOfBirth"]) : (person["yearOfDeath"] - person["yearOfBirth"]),
            yearofBirth: person["yearOfBirth"],
            yearOfDeath: person["yearOfDeath"],
        }
        
    });

    let sortedArr = arrOfAge.sort((a, b) => a["age"] - b["age"]);
    // console.log(sortedArr);

    return sortedArr[sortedArr.length - 1];
};

// console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
