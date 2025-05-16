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

console.log(camelize('hello-world-i-am-xhubbot'));
console.log(camelizeV2('hello-world-i-am-xhubbot'));