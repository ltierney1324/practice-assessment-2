/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here
	let count = {};


	for(let i =0; i<string.length; i++){
		let char=string[i];
		if(count[char] === undefined){
			count[char]=1;
		}else{
			count[char] +=1;
		}
	}

	return count;

}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let count = countCharacters(string);
	let arr =[];
	// console.log(count);
	for(let key in count){
		// console.log(key);
		if(count[key]>=minCount){
			arr.push(key);
		}
	}
	return arr;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
