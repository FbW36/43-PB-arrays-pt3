// 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
// Examples:
//     isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
//     isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
//     isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]
     const setNames1 = (["John", "James", "Jack", "Jeanne"])//
     const setNames2 = (["Tomato", "Corn", "Lettuce"])//
     const setNames3 = (["Dog", "Cat", "Deer"])//
function isFourLetters(arr){
    const box = []
    for(let item of arr){
        if(item.length === 4){
            box.push(item)
        }
    }
    return box
}
console.log(isFourLetters(setNames1))//["John", "Jack"]
console.log(isFourLetters(setNames2))//["Corn"]
console.log(isFourLetters(setNames3))//["Deer"]

// 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
// Examples:
//     monthName(3) ➞ "March"
//     monthName(12) ➞ "December"
//     monthName(6) ➞ "June"
    function monthName(num) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[num - 1]
    }
console.log(monthName(12))

// 3. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

//     For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
//     If the number cannot be divided evenly by 4, simply return the number.
//     The given integer will always be equal to or greater than 1.
//     Include the given number (the number in the parameters).
// Examples:
//     amplify(4) ➞ [1, 2, 3, 40]
//     amplify(3) ➞ [1, 2, 3]
//     amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]


// 4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.
// Examples:
//     unique([3, 3, 3, 7, 3, 3]) ➞ 7
//     unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//     unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0


// const listA = ([3, 3, 3, 7, 3, 3])
// function unique_list (list){
//     let box = []
//     for(let i = 0;i<=list.length;i++){
//         if(listA.indexOf[i] == -1 ){
//             box.push(i)
//         }
//         console.log(listA)
//     }

// }
// unique_list(listA)

// 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
//     The returned string should only contain alphabetic characters (a-z).
//     Preserve case in the returned string (see 4th example above).
// Examples:
//     wordRank("The quick brown fox.") ➞ "brown"
//     wordRank("Nancy is very pretty.") ➞ "pretty"
//     wordRank("Check back tomorrow, man!") ➞ "tomorrow"
//     wordRank("Today is Wednesday.") ➞ "Wednesday"
let str = `abcdefghijklmnopqrstuvwxyz`.split('')
   function high(x){
     let words = x.split(" ");
     let out = words.map(word => {
     let score = 0;
     let letters = word.split("");
     letters.map(count => {
      score += str.indexOf(count);
     })
     return [word, score];
    });

    out = out.sort((a,b) => { 
      if(a[1] > b[1]) return -1;
      else if(a[1] < b[1]) return 1; 
      else return 0;  });

return out[0][0];
}
console.log(high("The quick brown fox."))

// 6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
// Examples:
//     hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
//     hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
//     hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
const dictionary = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    s: 5,
 };
 function hackerSpeak(str) {
   return str.replace(/[aeios]/gi, (i) => dictionary[i]); 
 }
 console.log(hackerSpeak("become a coder"))

 //Bonus => 

//  1. Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.
// Examples:
//     isSymmetrical(7227) ➞ true
//     isSymmetrical(12567) ➞ false
//     isSymmetrical(44444444) ➞ true
//     isSymmetrical(9939) ➞ false
//     isSymmetrical(1112111) ➞ true
const clean = (str)=> str.replace(/[_]/, '');

const isSymmetrical = (str) => {
const cleanStr = clean(str);
    for(let i = 0; i <cleanStr.length /2; i++){
        if(cleanStr[i] != cleanStr[cleanStr.length -1 -i]){
            return false;
        }
    }
    return true;
}
console.log(isSymmetrical('1112111'))

// 2. snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
//     toCamelCase("hello_world") ➞ "helloWorld"
//     toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"
const toCamelCase = str => 
    str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(m,str)=> str.toUpperCase());
console.log(toCamelCase('hello_world'))

// 3. Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

//     Move the first letter of each word to the end of the word.
//     Add "ay" to the end of the word.
//     Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.
function translate(str) {
    str=str.toLowerCase();
    let word =str.search(/[aeiuo]/);
    switch (word){
      case 0: str = str+"way"; break;
      case -1: str = str+"ay"; break;
    //   case -2: str.split('');
    //   for(let i=0;i < str.length;i++){
    //       str = str+"ay"
    //   }; break;
      default :
        str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
      break;
   }
   return str;
}
console.log(translate("Cats"))