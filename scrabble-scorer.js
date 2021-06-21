// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};




function oldScrabbleScorer(word) {
	word = word.toUpperCase()
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
    
 
	  }
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Lets play some Scrabble!\n\nEnter a word to score: ");
   return word;
};

let simpleScore = function(word) {
  return word.length
};

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let vowelScore = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes("A") || word[i].includes("E") || word[i].includes("I") || word[i].includes("O") || word[i].includes("U")) {
      vowelScore = vowelScore + 3
    }else {
      vowelScore++
      }
  }
  return vowelScore
};

let scrabbleScore = function(word) {
	word = word.toUpperCase();
  letterPoints = 0 
  for (let i = 0; i < word.length; i++) {
    if ((word[i]) in newPointStructure) {
      letterPoints += newPointStructure[word[i]] 
    }
    }
	return console.log(`Score for ${word}: ${letterPoints}`);
}

const scoringAlgorithms = [ 
  {name:"Simple Score ", description:"Each letter is worth 1 point. ", scoringFunction:simpleScore},
  {name:"Bonus vowels ", description:"Vowels are 3 pts, consonants are 1 pt.", scoringFunction:vowelBonusScore}, 
  {name:"Scrabble ", description:"The traditional scoring algorithm.", scoringFunction:scrabbleScore}
];

function scorerPrompt(word) {
  let chosenAlg = Number(input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character     \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: "))
  if (chosenAlg === 0) {
    console.log(`Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}`)
  } else if (chosenAlg === 1) {
    console.log(`Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`)
  } else if (chosenAlg === 2) {
    console.log(`Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}`)
  }
}



function transform() { 
  let newPointStructure ={}
  for (let letters in oldPointStructure) {
  for (let i = 0; i < oldPointStructure[letters].length; i++) {
    newPointStructure[oldPointStructure[letters][i]] = Number(letters)
    }
  }
  return newPointStructure
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word)
  
}
//runProgram(scoringAlgorithms);
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

