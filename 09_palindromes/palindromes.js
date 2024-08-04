const palindromes = function (string) {
    let onlyChars = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   let reversed = onlyChars.split('').reverse().join('');
   if(reversed === onlyChars) return true;
   else return false;
};

// Do not edit below this line
module.exports = palindromes;
