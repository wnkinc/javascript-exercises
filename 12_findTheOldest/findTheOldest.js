const findTheOldest = function(array) {
    const year = new Date().getFullYear();
    array.sort((a, b) => {
        if(a.yearOfDeath === undefined) a.yearOfDeath = year;
        if(b.yearOfDeath === undefined) b.yearOfDeath = year;
       return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
    });
    return array[array.length-1];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
];

console.log(findTheOldest(people));
// array.reduce((accumulator, currentValue, currentIndex) => {
//     let age = currentValue.yearOfBirth - currentValue.yearOfDeath
//     if()

//     accumulator = oldest;
//  }, {});

// Do not edit below this line
module.exports = findTheOldest;
