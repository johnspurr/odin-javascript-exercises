const sumAll = function(from, to) {
    // Arguments must be non-negative numbers
    if (typeof from !== "number" || typeof to !== "number" || from < 0 || to < 0) {
        return 'ERROR';
    }

    // Handle descending ranges
    if (from > to) {
        [from, to] = [to, from];
    }

    sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
