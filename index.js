/*
Given a string str, we need to print reverse of individual words.
*/

// Solution: 1 Simple Solution
function reverseWord(str) {
  let strArr = str.split(' ');
  let reverseWords = [];

  strArr.forEach(word => {
    let reverse = '';
    let count = word.length - 1;
    while(count >= 0) {
      reverse += word[count];
      count --;
    }
    reverseWords.push(reverse);
  });
  return reverseWords.join(' ');
}

// Running Solution
console.log(reverseWord('Hello World'));


// Solution: 2 Using Recursion
function reverseWordRecursion(str) {
  let strArr = str.split(' ');

  return strArr.map(word => {
    return recursion(word);
  }).join(' ');
}
function recursion(str) {
  if (str === '') return '';
  else return recursion(str.substr(1)) + str.charAt(0);
}

// Running Solution
console.log(reverseWordRecursion('Hello World'));

