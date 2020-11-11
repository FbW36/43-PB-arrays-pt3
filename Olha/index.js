//* 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

const wordsArray = ["John", "James", "Jack", "Jeanne"];

const isFourLetters = arr => {
	return arr.filter(word => word.length === 4);
}

const fourLetters = isFourLetters(wordsArray);
console.log(fourLetters); // [ 'John', 'Jack' ]


//* 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

const monthName = num => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return months[num - 1];
}

const month = monthName(3);
console.log(month); // March


//* 3. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
//? For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
//? If the number cannot be divided evenly by 4, simply return the number.
//? The given integer will always be equal to or greater than 1.
//? Include the given number (the number in the parameters).

const amplify = int => {
	if (int < 1) {
		return 'number should be greater or equal to 1';
	}
	const array = [];
	for (let i = 1; i <= int; i++) {
		array.push(i % 4 === 0 ? i * 10 : i);
	}
	return array;
}

const amplified = amplify(4);
console.log(amplified); // [ 1, 2, 3, 40 ]


//* 4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.
// assuming there is only one unique number is every array

const arrayWithUniqueNum = [0, 1, 1, 1, 1, 1, 1, 1];

// A
const unique = arr => {
	// I don't want to mutate the original array:
	const arrCopy = [...arr];
	// I'm comparing each number against every other. hence, a nested loop
	for (let i = 0; i < arrCopy.length; i++) {
		// I'm skipping elements that I marked as non-unique
		if (arrCopy[i] === 'not unique') {
			continue;
		}
		for (let j = 0; j < arrCopy.length; j++) {
			// I'm not comparing a number to itself. I'm skipping mismatches for now
			if (i === j || arrCopy[i] !== arrCopy[j]) {
				continue;
			} else {
				// I mark all non-unique numbers
				arrCopy[i] = 'not unique';
				arrCopy[j] = 'not unique';
			}
		}
	}
	// the only un-marked number is unique:
	let uniqueNumber = arr.filter(el => el !== 'not unique')[0];
	return uniqueNumber;
}

console.log(unique(arrayWithUniqueNum));
console.log("did the array mutate?", arrayWithUniqueNum);

// B
const unique2 = arr => {
	// unique is the element which occurs only once
	const occurrences = arr.reduce((acc, curr) => {
		if (!acc[curr]) {
			acc[curr] = 1;
		} else {
			acc[curr]++;
		}
		return acc; // { '0': 1, '1': 7 }
	}, {})

	for (let key in occurrences) {
		if (occurrences[key] === 1) {
			return key;
		}
	}
}

console.log(unique2(arrayWithUniqueNum));

//* 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// The returned string should only contain alphabetic characters (a-z).
// Preserve case in the returned string (see 4th example above).


const wordRank = string => {
	const abc = 'abcdefghijklmnopqrstuvwxyz';
	
	const wordsArray = string.split(" ").map(word => word.replace(/[^a-zA-Z]/g, ''));
	
	const ratings = wordsArray.map(word => {
		let count = 0;
		for (let ch of word) {
			count += abc.indexOf(ch.toLowerCase()) + 1;
		}
		return count;
	});
	
	let maxRating = ratings.reduce((acc, curr) => Math.max(acc, curr));
	let indexOfMaxRatedWord = ratings.indexOf(maxRating);
	let maxRatedWord = wordsArray[indexOfMaxRatedWord];
	
	return maxRatedWord;
}

console.log(wordRank("Today is Wednesday."));

// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday"



//* 6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

const hackerSpeak = str => {
	const hackerDictionary = {
		a: 4,
		e: 3,
		i: 1,
		o: 0,
		s: 5
	};
	const strArr = str.split('').map(el => {
		for (let key in hackerDictionary) {
			if (el === key) {
				el = hackerDictionary[key];
			}
		}
		return el;
	})
	return strArr.join('');
}

const encoded = hackerSpeak("javascript is cool");
console.log(encoded);

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"



//* Bonus Questions
//* 1. Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

const isSymmetrical = num => {
	// return num.toString() === num.toString().split('').reverse().join('');
	let initialNum = num;
	let finalNum = 0;
	console.log(initialNum, finalNum);
	
	while (num >= 10) {
		finalNum += (num % 10);
		num = Math.floor(num / 10);
		finalNum *= 10;
		console.log(finalNum, num);
	}
	finalNum +=  num;

	console.log(initialNum, finalNum);

	return finalNum === initialNum;
}
console.log(isSymmetrical(1112111));

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true


//* 2. snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.

const toCamelCase = str => {
	return str.split('_').map((word, index) => {
		if (index !== 0) {
			word = word.split('').map((ch, i) => i === 0 ? ch.toUpperCase() : ch).join('');
		}
		return word;
	}).join('');
}
console.log(toCamelCase("javascript_is_fun"));

// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"



//* 3. Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.

const pigLatin = str => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let words = str.split(' ').map(word => {
		word = word.toLowerCase().replace(/[^a-zA-Z]/g, '');

		let pigWord = word.substring(1) + word.substring(0, 1);
		
		for (let vow of vowels) {
			if (word[0] === vow) {
				return pigWord + 'way';
			}
		}
		return pigWord + 'ay';
		
	}).join(' ');

	//? Extra Practice
	// Preserve proper capitalization as in the examples below.
	words = words[0].toUpperCase() + words.substring(1).toLowerCase() + '.';
	
	return words;
}

console.log(pigLatin("Tom got a small piece of pie.")); // Omtay otgay away mallsay iecepay foway iepay.

