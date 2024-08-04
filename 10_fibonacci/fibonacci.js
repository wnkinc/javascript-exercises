
const fibonacci = function(number) {  
    if(typeof number !== 'number') number = Number(number);
    if(number === 0) return 0;
    if(number < 0) return 'OOPS';
    
    let order = new Array(number);
    order[0] = 1;
    order[1] = 1;
    for(let i = 2; i < number; i++){
        order[i] = order[i-2] + order[i-1];
    }
    
    return order[order.length-1];
};

// Do not edit below this line
module.exports = fibonacci;

