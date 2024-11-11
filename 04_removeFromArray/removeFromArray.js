const removeFromArray = function(original_list, ...toBeRemoved) {

    for (let i = 0; i < original_list.length;) {
        for (let j = 0; j < toBeRemoved.length; j++) {
            if (original_list.at(i) === toBeRemoved.at(j)) {
                original_list.splice(i, 1);
                break;
            }  else if (j == (toBeRemoved.length - 1)) {
                i++
            };
        };
    };

    return original_list
};

// Do not edit below this line
module.exports = removeFromArray;
