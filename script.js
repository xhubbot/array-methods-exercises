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

console.log(camelize('hello-world-i-am-xhubbot'));