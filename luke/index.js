// ** 1. Where Have My Four Letter Words Gone ?**
// Create a function that takes an array of strings.Return all words in the array that are exactly four letters.

function isFourLetters(arr) {
  const newArr = [];
  arr.map((item) => {
    if (item.length === 4) {
      newArr.push(item);
    }
  });
  console.log(newArr);
}

isFourLetters(["John", "James", "Jack", "Jeanne"]);
isFourLetters(["Tomato", "Corn", "Lettuce"]);
isFourLetters(["Dog", "Cat", "Deer"]);

// ** 2. Months.**
// Create a function that takes a number(from 1 to 12) and return its corresponding month name as a string.
function monthName(num) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(months[num - 1]);
}

monthName(3);
monthName(12);
monthName(6);

// ** 3. Amplify the Multiples of 4. **
// Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// * For each number in the array that can be evenly divided by 4, that number is amplified by 10(i.e.return 10 times the number).
// * If the number cannot be divided evenly by 4, simply return the number.
// * The given integer will always be equal to or greater than 1.
// * Include the given number(the number in the parameters).
function amplify(num) {
  const newArr = [];
  if (num >= 1) {
    for (let i = 1; i <= num; i++) {
      if (i % 4 === 0) {
        newArr.push(i * 10);
      } else {
        newArr.push(i);
      }
    }
  }
  console.log(newArr);
}

amplify(4);
amplify(3);
amplify(25);

// ** 4. One is not like the others...**
// Create a function that takes an array of numbers and return the number that's unique.

function unique(arr) {
  let uniqueItem = arr[0];
  const sortedArr = arr.sort();
  if (sortedArr[0] === sortedArr[1]) {
    uniqueItem = sortedArr[sortedArr.length - 1];
  } else {
    uniqueItem = sortedArr[0];
  }
  console.log(uniqueItem);
}
unique([3, 3, 3, 7, 3, 3]);
unique([0, 0, 0.77, 0, 0]);
unique([0, 1, 1, 1, 1, 1, 1, 1]);

// ** 5. Word Ranking.**
// Create a function that takes a string of words and returns the highest scoring word.Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// * The returned string should only contain alphabetic characters(a - z).
// * Preserve case in the returned string(see 4th example above).

function wordRank(str) {
  const strArr = str.split(" ");
  let word;
  let num = 0;
  strArr.map(function (item) {
    let newNum = 0;
    let lowerCaseItem = item.toLowerCase();
    let newItem;
    if (
      lowerCaseItem[item.length - 1].charCodeAt() < 97 ||
      lowerCaseItem[item.length - 1].charCodeAt() > 122
    ) {
      newItem = lowerCaseItem.slice(0, -1);
    } else {
      newItem = lowerCaseItem;
    }
    //
    for (let i = 0; i < item.length; i++) {
      newNum += newItem.charCodeAt(i);
      if (newNum > num) {
        num = newNum;
        word = item;
      }
    }
  });

  if (
    word[word.length - 1].charCodeAt() < 97 ||
    (word[word.length - 1].charCodeAt() > 122 &&
      word[word.length - 1].charCodeAt() < 65) ||
    word[word.length - 1].charCodeAt() > 90
  ) {
    word = word.slice(0, -1);
  }

  console.log(word);
}

wordRank("The quick brown fox.");
wordRank("Nancy is very pretty.");
wordRank("Check back tomorrow, man!");
wordRank("Today is Wednesday.");

// ** 6. c4n y0u r34d th15 ?**
// Create a function that takes a string as an argument and returns a coded(h4ck3r 5p34k) version of the string. ** NB:** for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      newStr += "4";
    } else if (str[i] === "e") {
      newStr += "3";
    } else if (str[i] === "i") {
      newStr += "1";
    } else if (str[i] === "o") {
      newStr += "0";
    } else if (str[i] === "s") {
      newStr += "5";
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

hackerSpeak("javascript is cool");
hackerSpeak("programming is fun");
hackerSpeak("become a coder");

// ** 1. Is it Symmetrical ?**
// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. ** NB:** A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
  let numStr = num.toString();
  const numArr = numStr.split("");
  let answer = true;
  for (let i = 0; i < numArr.length; i++) {
    for (let j = numArr.length; j > numArr.length - 1; --j) {
      if (numArr[i] !== numArr[j - 1]) {
        answer = false;
      }
    }
    numArr.pop();
  }
  console.log(answer);
}

isSymmetrical(7227);
isSymmetrical(12567);
isSymmetrical(44444444);
isSymmetrical(9939);
isSymmetrical(1112111);

// ** 2. snake_case ➞ camelCase **
// Create a function toCamelCase() that takes a single string in `snake_case` and converts it into`camelCase`.

function toCamelCase(str) {
  let arr = str.split("_");
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      let replacer = arr[i][0].toUpperCase();
      arr[i] = arr[i].replace(arr[i][0], replacer);
    }
  }
  console.log(arr.join(""));
}

toCamelCase("hello_world");
toCamelCase("javascript_is_fun");

// ** 3. Pig Latin Translation.**
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word.This is a basic form of "Pig Latin".

// * Move the first letter of each word to the end of the word.
// * Add "ay" to the end of the word.
// * Words starting with a vowel(A, E, I, O, U) append "way" to the end instead.
// * Preserve proper capitalization as in the examples below.
function pigLatin(str) {
  let vowels = "aeiouAEIOU";
  str = str.replace(".", "");
  const strArr = str.split(" ");
  //
  const newStrArr = [];
  strArr.map((word) => {
    if (vowels.includes(word[0])) {
      word += "way";
      newStrArr.push(word);
    } else {
      let firstLetter = word[0].toLowerCase();
      let newWord = word.slice(1);
      newStrArr.push(newWord + firstLetter + "ay");
    }
  });
  //
  let capital = newStrArr[0][0].toUpperCase();
  const output = newStrArr[0].replace(newStrArr[0][0], capital);
  newStrArr.shift();
  newStrArr.unshift(output);

  console.log(newStrArr.join(" ") + ".");
}

pigLatin("Cats are great pets.");
pigLatin("Tom got a small piece of pie.");
pigLatin("He told us a very exciting tale.");
