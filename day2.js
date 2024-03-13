let countBits = function (n) {
    // ver 1
    let i = 0;
    n.toString(2).split('').map(e => e === "1" ? i++ : '')
    return i

    // ver 2
    // return n.toString(2).split('').reduce((count, bit) => bit === "1" ? count + 1 : count, 0);
};

console.log(countBits(5))

// url https://www.codewars.com/kata/526571aae218b8ee490006f4
