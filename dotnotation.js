// console.log("hello world".toLowerCase());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random())*100);
// console.log("  |   |");
// console.log("  |   |");
// console.log("------------");
// console.log("  |   |");
// console.log("  |   |");
// console.log("------------");
// console.log("  |   |");
// console.log("  |   |");

// This is how I did it
for (let step = 0; step < 3; step++) {
    // increments the | symbol 3 times.
    console.log("     |     |");
  }
  console.log("-----------------")
  for (let step = 0; step < 3; step++) {
    console.log("     |     |");
  }
  console.log("-----------------")
  for (let step = 0; step < 3; step++) {
    console.log("     |     |");
  }
//   this is how Dan Lee did it, i think he was very clever
for (let i = 0; i <= 3; i++) {
    console.log("   |  |  \n   |  |  \n   |  |  \n-----------");
  }

//    Display the 8th character of this sentence in Upper Case. All Around the World. 
// - Write a program that checks if the given sentence ends with the letter d. Hello World. The console should return true. If not, it will return false. 

let sentence = "All around the World"
let letter = Array.from(sentence);
let lastLetter = letter[20];
console.log(lastLetter)
let sentence = "All around the World"

let lastLetter = sentence.toString().split("").reverse();
console.log(lastLetter[0])


// - Write a program that removes the whitespace from the start and end of the given sentence.    Hello World     . 




  
 
