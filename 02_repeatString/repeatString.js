const repeatString = function(string, num) {
    let resultString = '';
    if(num >= 0){
        for(let i = 0; i < num; i++){
            resultString += string;
        }
    } else return 'ERROR';
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
