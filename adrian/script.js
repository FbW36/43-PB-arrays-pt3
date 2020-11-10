//1
const isFourLetters = (array) => array.filter((word) => word.length === 4);
// console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));

//2
function monthName(monthNum) {
  const months = [];
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  return months.filter((_, i) => monthNum === i + 1)[0];
}
// console.log(monthName(3));

//3
function amplify(num) {
  const amplified = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) amplified.push(i * 10);
    else amplified.push(i);
  }
  return amplified;
}
// console.log(amplify(25));

//4
const unique = (array) => {
  let uniqueNum;
  let dicNums = array.reduce((acc, curr) => {
    if (acc[curr]) acc[curr]++;
    else acc[curr] = 1;
    return acc;
  }, {});

  for (const key in dicNums) {
    if (dicNums[key] === 1) uniqueNum = key;
  }
  return uniqueNum;
};
// console.log(unique([0, 0, 0.77, 0, 0]));

//5
function wordRank(string) {
  let maxScore = 0;
  let cleanedString = string.replace(/[^\w\s]/gi, "");

  return cleanedString.split(" ").reduce((acc, curr) => {
    let wordScore = curr.split("").reduce((acc, curr) => {
      let score = curr.toLowerCase().charCodeAt(0) - 96;

      return acc + score;
    }, 0);

    if (maxScore < wordScore) {
      acc = curr;
      maxScore = wordScore;
    }
    return acc;
  }, 0);
}
// console.log(wordRank("Today is Wednesday."));

//6
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
// console.log(hackerSpeak("javascript is cool"));

//Bonus
//1
function isSymmetrical(num) {
  let stringedNum = String(num);
  for (let i = 0; Math.floor(i < stringedNum.length / 2); i++) {
    if (stringedNum[i] !== stringedNum[stringedNum.length - 1 - i])
      return false;
  }
  return true;
}
// console.log(isSymmetrical(7227));

//2
function toCamelCase(string) {
  let noCamel = string.split("_");
  return noCamel
    .map((word, i) => {
      if (i > 0) return word.replace(word[0], word[0].toUpperCase());
      else return word;
    })
    .join("");
}
// console.log(toCamelCase("javascript_is_fun"));

//3
function pigLatin(string) {
  let add1 = "ay";
  let add2 = "way";
  let vowels = "aeiouAEIOU";
  let cleanedString = string.replace(/[^\w\s]/gi, "");

  let wordsArray = cleanedString.split(" ");

  return (
    wordsArray
      .map((word, i) => {
        let words = word.split("");
        if (i === 0) {
          words[0] = words[0].toLowerCase();
        }
        if (vowels.includes(word[0])) {
          words.push(add2);
        } else {
          words.push(words[0]);
          words.shift();
          words.push(add1);
          if (i === 0) {
            words[0] = words[0].toUpperCase();
          }
        }

        return words.join("");
      })
      .join(" ") + "."
  );
}

// let check = pigLatin("He told us a very exciting tale.");
// console.log(check === "Ehay oldtay usway away eryvay excitingway aletay.");
