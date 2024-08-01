
const removeFromArray = function(arr, ...removeValues) {

    const newArr = arr.filter(value => !removeValues.includes(value));
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;