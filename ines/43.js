//1
function isFourLetters (array){
    const filtered = array.filter(el => el.length === 4);
    return filtered;
}

console.log("1==>",isFourLetters(["Dog", "Cat", "Deer"]));

//2
function monthName(num){
    switch(num){
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
    }
}
console.log("2==>",monthName(7));


//3
function amplify (num){
    const result = []
    if (num<1){
        return "Number should be equal or greater to 1"
    }
    else{
    for(i=1;i<=num;i++){
        if(i%4===0){
           result.push(i*10);
        }
        else{
            result.push(i);
        }
    }
    return result
    }
}
console.log("3==>",amplify(8));

//4
function unique (arr){
return filtered = arr.filter(function(v) {
    return arr.indexOf(v) == arr.lastIndexOf(v);
  });
}
console.log("4==>",unique([3, 3, 3, 7, 3, 3]));


//5
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","v","x","y","z"];
const alphabetBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","V","X","Y","Z"]; 

function wordRank(string){
    stringArray = string.split("");
    let result = 0; 
        for(letter of stringArray){
            alphabet.find(function (element, index){
                if(element === letter){
                    result += index +1;
                }  
            }); 
            alphabetBig.find(function (element, index){
                if(element === letter){
                    result += index +1;
                }  
            }); 
        }
    return result;
}
console.log("5==>",wordRank("Abcd"));

//6
const letters = ["a", "e", "i", "o", "s"];
function hackerSpeak (string) {
    const stringArray = string.split("");
    const mapped = stringArray.map(letter => {
        if(letter==="a"){
            return 4;
        }
        if(letter==="e"){
            return 3;
        }
        if(letter==="i"){
            return 1;
        }
        if(letter==="o"){
            return 0;
        }
        if(letter==="s"){
            return 5;
        }
        else{
            return letter;
        }
    })
    return mapped.join("");
}
 console.log("6==>",hackerSpeak("become a coder"))

//BONUS 1
 function isSymmetrical(num){
    let numString = num.toString();
    let numStringReverse = numString.split("").reverse().join("");
    return numString === numStringReverse
 }
 console.log("Bonus 1==>",isSymmetrical(1991));

//BONUS 2
function toCamelCase(string){
    stringArray = string.split("");
    stringArray.map(function (element, index){
        if(element==="_"){
            let camelIndex = index +1;
            stringArray[camelIndex] = stringArray[camelIndex].toUpperCase();
        }
    } )
    // return stringArray;
    const filtered_ = stringArray.filter(chr => chr!=="_").join("");
    return filtered_
}
console.log("Bonus 2==>", toCamelCase("javascript_is_fun"));

//BONUS 3
function pigLatin (string){
    const stringArray = string.split(" ");
    const result = [];
    for(word of stringArray){
        let beginningLetter = word[0];
        word += beginningLetter.toLowerCase();
        word = word.slice(1)+"way";
        if(beginningLetter === (beginningLetter.toUpperCase())){
            let newBeginningLetter = word[0][0];
            let newBeginningLetterUpper = newBeginningLetter.toUpperCase();
            word = newBeginningLetterUpper + word.slice(1)
        }
        result.push(word)
    }
    return result.join(" ");
}

console.log("Bonus 3==>",pigLatin("Tom got a small piece of pie")); 
