const sumAll = function(startNum, endNum) {
    let sum = 0;
    let temp = 0;

    if(startNum > endNum){
        temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    if(startNum < 0 || !Number.isInteger(startNum) || !Number.isFinite(endNum)){
        return 'ERROR';
    }

    for(let i = startNum; i <= endNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
