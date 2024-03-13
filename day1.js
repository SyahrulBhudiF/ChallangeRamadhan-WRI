function spinWords(string) {
    return string.split(' ').map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ')
}

console.log(spinWords("aku mau makann"))

// url https://codewars.com/kata/5264d2b162488dc400000001
