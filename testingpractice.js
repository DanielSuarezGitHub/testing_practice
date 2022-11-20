function capitalize(string) {
  string = string.trim()
  string = string.split("")
  string[0] = string[0].toUpperCase()
  string = string.join("")
  return string
}

function  reverseString(string) {
  string = string.trim()
  string = string.split('')
  let reverse = []
  for (let i = 0; i < string.length; i++) {
    reverse.unshift(string[i])
  }
  reverse = reverse.join('')
  return reverse
}

const calculator = (() => {
  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  function divide(a, b) {
    return a / b
  }

  function multiply(a, b) {
    return a * b
  }

  return { add, subtract, divide, multiply}
})(); 


function caesarCipher(string) {
  string = string.trim()
  let cipher = []
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];
  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i].toLowerCase())) {
      cipher.push(String.fromCharCode(string.charCodeAt(i) + 1))
    } else if (string[i] == 'z') {
      cipher.push('a')
    } else if (string[i] == 'Z') {
      cipher.push('A')
    } else {
      cipher.push(string[i])
    }
  }
  cipher = cipher.join('')
  return cipher
}

function analyzeArray(array) {
  let max;
  let min;
  let sum = 0
  for( let i = 0; i < array.length; i++) {
    i == 0 ? max = array[i] : array[i] > max ? max = array[i]: max = max
    i == 0 ? min = array[i] : array[i] < min ? min = array[i]: min = min
    sum = sum + parseInt(array[i])
  }
return {average : (sum / array.length), min: min, max : max, length: array.length}
}



export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };