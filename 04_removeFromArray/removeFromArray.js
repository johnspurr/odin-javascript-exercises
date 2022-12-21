const removeFromArray = function(array, ...removals) {
    for (r of removals) {
        let i = array.indexOf(r);
        if (i > -1) {
            array.splice(i, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
