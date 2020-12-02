// 1. Where Have My Four Letter Words Gone?

const givenArr = ["John", "James", "Jack", "jeanne"];

function isFourLetters(arr) {
  return givenArr.filter((items) => items.length === 4);
}

console.log(isFourLetters(givenArr));

// 2 monthName(3) ➞ "March"

function monthName(number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[number - 1];
}

console.log(monthName(3)); // march

//3. string er modde e number gula 4 diye vag jai se gulo 10 diye gun hobe
// 3 . amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

function amplify(num) {
  result = [];
  for (i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      result.push(i * 10);
    } else {
      result.push(i);
    }
  }

  return result;
}

const resultOfamplify = amplify(25);
console.log("resultOfamplify =", resultOfamplify);

// 43(4.) One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

const givenARRay = [3, 3, 3, 7, 3, 3];

function findUnqNumber(numArr) {
  let myObj = {};

  numArr.map((number) => {
    if (myObj[number]) {
      myObj[number]++;
    } else {
      myObj[number] = 1;
    }
  });

  for (const key in myObj) {
    if (myObj[key] === 1) {
      return key;
    }
  }

  return myObj;
}

const theUnqNumber = findUnqNumber(givenARRay);
console.log(theUnqNumber);

// 5
function wordRank(string) {
  let cleanedString = string.replace(/[^\w\s]/gi, ""); // to remove the (, . !, ?)
  let array = cleanedString.split(" "); // split the words

  let highestScore = 0;
  let highestWord = "";
  array.forEach((word) => {
    let wordScore = word.split("").reduce((acc, curr) => {
      let score = curr.toLowerCase().charCodeAt(0) - 96;
      return acc + score;
    }, 0);

    if (highestScore < wordScore) {
      highestScore = wordScore;
      highestWord = word;
    }
  });
  return highestWord;
}

console.log(wordRank("the  // best id? "));

// 6

//6 ("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
function hackerSpeak(string) {
  let hackedString = "";
  const code = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };
  for (let i = 0; i < string.length; i++) {
    if (code[string[i]]) {
      hackedString += code[string[i]];
    } else {
      hackedString += string[i];
    }
  }
  return hackedString;
}
console.log(hackerSpeak("javascript is cool"));
