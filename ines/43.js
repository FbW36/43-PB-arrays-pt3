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
console.log("6==>",hackerSpeak("become a coder"));

