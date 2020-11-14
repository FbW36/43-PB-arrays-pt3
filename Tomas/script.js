let log = console.log;

// Create a function that takes an array of strings. Return all words in the array that are exactly four letters
const isFourLetters = (arr) => {
  const fourLetterWords = arr.filter((item) => item.length === 4);
  return fourLetterWords;
};
log("isFourLetters -->", isFourLetters(["John", "James", "Jack", "Jeanne"]));

// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string
const monthName = (num) => {
  if (typeof num !== "number") {
    return "Submit a number";
  }
  switch (num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Submit a number from 1 to 12";
  }
};
log("monthName -->", monthName(10));

// Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

//  - For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
//  - If the number cannot be divided evenly by 4, simply return the number.
//  - The given integer will always be equal to or greater than 1.
//  - Include the given number (the number in the parameters).
function filterByFour(num) {
  const arrOfNum = [];
  for (i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      arrOfNum.push(i * 10);
    } else {
      arrOfNum.push(i);
    }
  }

  return arrOfNum;
}
log("filterByFour -->", filterByFour(25));

// Create a function that takes an array of numbers and return the number that's unique
function unique(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[1]) {
      return arr[0];
    } else if (arr[i] !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
}
log("unique nr -->", unique([0, 1, 1, 1, 1, 1, 1, 1]));

// Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc

// - The returned string should only contain alphabetic characters (a-z).
// - Preserve case in the returned string (see 4th example above).

// not there yet

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
const hackerSpeak = (str) => {
  let strToArr = str.toLowerCase().split("");
  for (i = 0; i < strToArr.length; i++) {
    switch (strToArr[i]) {
      case "a":
        strToArr.splice(i, 1, "4");
        break;
      case "e":
        strToArr.splice(i, 1, "3");
        break;
      case "i":
        strToArr.splice(i, 1, "1");
        break;
      case "o":
        strToArr.splice(i, 1, "0");
        break;
      case "s":
        strToArr.splice(i, 1, "5");
        break;
    }
  }
  return strToArr.join('');
};
log("hackerSpeak -->", hackerSpeak("Javascript is cool"));

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse
function isSymmetrical(num) {
  let numReversed = num.toString().split("").reverse().join("");
  return num === parseInt(numReversed);
}
log('number symmetrical:', isSymmetrical(7227));

// Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase
const toCamelCase = (str) => {
  for (i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      newStr = str.split("");
      newStr.splice(i, 2, str[i + 1].toUpperCase());
    }
  }
  return newStr.join("");
};
log('string to camel case -->', toCamelCase("hello_world"));

// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin"
const pigLatin = (str) => {
  let newArr = [];
  // split string into array in order to access each word and iterate through them
  strToArr = str.toLowerCase().split(" ");
  for (i = 0; i < strToArr.length; i++) {
    wordToArr = strToArr[i].split("");
    // remove the dot
    if (wordToArr[wordToArr.length - 1] === ".") {
      wordToArr.pop();
    }
    // setting different conditions for words starting with vowels
    switch (wordToArr[0]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        wordToArr.push("way");
        break;
      default:
        wordToArr.push(wordToArr[0] + "ay");
        wordToArr.shift();
        break;
    }
    // changed words push into new array and turn into string
    pigLatinWord = wordToArr.join("");
    newArr.push(pigLatinWord);
    newStr = newArr.join(" ");
    // final string with first letter upper case
    newStrFinal = newStr.replace(newStr[0], newStr[0].toUpperCase()) + ".";
  }
  return newStrFinal;
};
log(pigLatin("He told us a very exciting tale."));
