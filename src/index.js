module.exports = function check(str, bracketsConfig) {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '|') {
      arr.push(str[i]);
    }
    if (str[i] === ')' || str[i] === ']' || str[i] === '}' || str[i] === '|') {
      if (arr[arr.length - 1] === '(' && str[i] === ')') {
        arr.pop();
      } else if (arr[arr.length - 1] === '[' && str[i] === ']') {
        arr.pop();
      } else if (arr[arr.length - 1] === '{' && str[i] === '}') {
        arr.pop();
      } else if (arr[arr.length - 1] === '|' && str[i] === '|') {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    }
  }
  if (arr.length) {
    return false;
  }
  return true;
}
