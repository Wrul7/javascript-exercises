const sumAll = function(start, end) {
    let sum = 0;

    if (!Number.isInteger(start) ||  start < 0 || !Number.isInteger(end) || end < 0) {
        return "ERROR";
    };

    if (start <= end) {
        for (start; start <= end; start++) {
            sum += start;
        };
    } else if (start > end) {
        for (end; end <= start; end++) {
            sum += end;
        };
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
