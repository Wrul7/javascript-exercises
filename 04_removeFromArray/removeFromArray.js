const removeFromArray = function(original_list, ...toBeRemoved) {
    let new_list = [];

    for (let i = 0; i < original_list.length; i++) {
        for (let j = 0; j < toBeRemoved.length; j++) {
            if (original_list.at(i) !== toBeRemoved.at(j)) {
                new_list.push(original_list.at(i));
                break;
            };
        };
    };

    return new_list
};

// Do not edit below this line
module.exports = removeFromArray;
