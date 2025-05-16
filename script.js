function camelize(str) {
  let camelizedStr = '';
  let uppercase = false;

  for (let i = 0; i < str.length; i++) { 
    if (str[i] !== '-') {
      if (uppercase == true) {
        camelizedStr += str[i].toUpperCase();
        uppercase = false;
      } else {
        camelizedStr += str[i];
      }
    } else {
      uppercase = true;
    };
  };

  return camelizedStr;
}

function camelizeV2(str) {
  let camelizedStr = '';
  let words = str.split('-');

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join('');
}

function camelizeV3(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function sortDescending(arr) {
  arr.sort((a, b) => b - a);
}

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

calc.addMethod("/", (a, b) => a / b);
alert(calc.calculate("10 / 2"));
