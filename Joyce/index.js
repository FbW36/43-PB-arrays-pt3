//1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
function isFourLetters(array) {
  let words = array.filter((word) => word.length == 4);
  return words;
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));

//2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
function monthName(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "Feburay";
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
      return "Please enter a number of month";
  }
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

//3. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number
function amplify(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      result.push(i * 10);
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));

//4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.
function unique(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array.indexOf(element) === array.lastIndexOf(element)) {
      return element;
    }
  }
}
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

//5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
function wordRank(string) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const wordsArray = string
    .split(" ")
    .map((word) => word.replace(/[^a-zA-Z]/g, ""));
  const ratings = wordsArray.map((word) => {
    let count = 0;
    for (let item of word) {
      count += letters.indexOf(item.toLowerCase()) + 1;
    }
    return count;
  });
  let maxRating = ratings.reduce((acc, curr) => Math.max(acc, curr));
  let indRatedWord = ratings.indexOf(maxRating);
  let ratedWord = wordsArray[indRatedWord];
  return ratedWord;
}

console.log("rank ==>", wordRank("The quick brown fox."));
console.log("rank ==>", wordRank("Nancy is very pretty."));
console.log("rank ==>", wordRank("Check back tomorrow, man!"));
console.log("rank ==>", wordRank("Today is Wednesday."));

//6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
function hackerSpeak(string) {
  let stringArr = string.split("");
  let result = [];

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === "a") {
      stringArr[i] = "4";
      result.push(stringArr[i]);
    } else if (stringArr[i] === "e") {
      stringArr[i] = "3";
      result.push(stringArr[i]);
    } else if (stringArr[i] === "i") {
      stringArr[i] = "1";
      result.push(stringArr[i]);
    } else if (stringArr[i] === "o") {
      stringArr[i] = "0";
      result.push(stringArr[i]);
    } else if (stringArr[i] === "s") {
      stringArr[i] = "5";
      result.push(stringArr[i]);
    } else {
      result.push(stringArr[i]);
    }
  }
  let hacked = stringArr.join("");
  return hacked;
}
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
