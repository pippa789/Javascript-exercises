// let i = 10;
// console.log(i);

// let favoriteDrink = 'coffee';
// let name = 'Alice';
// let favouriteColour = 'red';
//
// console.log(favoriteDrink);
// console.log("My favourite drink is " + favoriteDrink);
// console.log(`My name is ${name}. My favorite beverage is ${favoriteDrink}`);
// this is called a template literals ${}
// console.log(`My name is  ${name} and my facorite colour is ${favouriteColour}.`);


// Activity 1, Variables

// let name = 'Pip'
// let age = '55'
// let favouriteColour = 'green'
// console.log(`My name is  ${name} and my facorite colour is ${favouriteColour}.`);
// // Activity 1, Stretch
// name = 'Alice'
// age = '12'
// favouriteColour = 'pink'
// console.log=(`My neice is named ${name}, she is ${age}. Her favourite colour is ${favouriteColour}.`);
// // I don't know why thsi won't run the second sentence.

// // Activity 2, Variables

let breakfast = 'Oatmeal';
let lunch = 'Sandwich';
let dinner = 'Fish and potatos';
let day = 'Today';
console.log(`today when I got up I had ${breakfast} then for lunch I had ${lunch} and for dinner it will be ${dinner}.`);
// Activity 2, Stretch
name = 'Pip';
day = 'Tomorrow';
breakfast = 'Yogurt';
lunch = 'bowl of soup';
dinner = 'Taco Bell :)';
console.log(`tomorrow I will have ${breakfast} then I will have ${lunch} and for a treat I will have ${dinner}.`);



// Activity 3

const birthDay = new Date("2022,1,19");
const todaysDate = new Date("2021, 10, 19");
let diffInTime = birthDay.getTime() - todaysDate.getTime()
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24)); 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);

// Activity 4

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);

// let weather = 'sunny';
// if (weather == 'sunny'){
//     console.log("Put your sunscreen on!")
// }
// else if (weather == 'rainy'){
//     console.log('Bring your brawly!')
// }
// else if (weather == 'windy'){
//     console.log('watch for Dorethy')
// }
// else{
//     console.log('I do not understand')
// }

// let place = 'Manc';
// let weather = 'Cloudy';

// if (place == 'Manc' && weather == 'sunny'){
//     console.log('Check again');
// }
// else if (place =='Manc' && weather == 'Cloudy'){
//     console.log("that is about right.")
// } else{
//     console.log("If it is not cloudy it is raining")
// }

// Activity 1 (if, else statements)
// const age = 18;
// if (age >= 17){
//     console.log("Yes, I can serve you.")
// }else{
//     console.log("You are not old enough.")
// }
// // Activity 1 stretch
// let country = 'UK';
// country = 'US'
// if (age >= 17 && country == 'UK'){
//     console.log("I can serve you")
// }else if (age >= 21 && country == 'US'){
//     console.log('Welcome to the states, can I buy you a drink?')
// }else{
//     console.log('Sorry I can not serve you.')
// }

// Activity 2 (if, else statements)
// let topping = 'pepperoni';
// topping = 'Pineapple';
// switch(topping){
//     case "Olives":
//     case 'Mushrooms':
//         console.log(`I like ${topping} on my Pizza`);
//         break;
//     case 'Pineapple':
//     case 'Anchovies':
//         console.log(`I cannot eat a Pizza with ${topping} on it.`)
//         break;
//     default:
//         console.log('Not my fav but that is ok')
// }

// const password = 'baddoggy';
// if (password.length >= 8){
//     console.log('Your Password is long enough')
// }else if(password.length < 8){
//     console.log('Sorry your Password is too short')
// }
// // Activity 3, stretch
// const num = 10;
// if (num % 3 && 5 == 0){
//     console.log('this number is divisiable ')
// }else  {
//     console.log('you cant divide these');
// }

// Activity 4 (if, else statements)
// let num = 10;

// if (num % 3 == 0 &&  5 == 0){
//     console.log('fizz buzz')
// }else if (num % 5 == 0){
//     console.log('buzz');
// }else if (num % 3 == 0){
//     console.log('fizz ')
// }else{
//     console.log(num)
// }

// Activity 5
// let num = 1001;
// num = 1002
// let n = num.toString();
// let numString = n.split('');
// // console.log(numString);
// let reverseNum = numString.reverse()
// // console.log(reverseNum);
// let forwardString = numString.reverse().join('')
// // console.log(forwardString);
// let reverseString = reverseNum.reverse().join('')
// // console.log(reverseString);

// if(forwardString === reverseString){
//     console.log(`${num} is a palindrome`)
// }else{
//     console.log(`${num} is not a palindrome`)


// Activity 6
// let time = 19
// let placeOfWork = 9
// let WakeUpTime = 8
// let downTime = 18
// if (time <= downTime){
//     console.log('Im at work')
// }else if (time >= downTime)
//     console.log('Im not available')
// else{
//     console.log(' bla bla')
// }


// // Activity 7
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// // Activity 8
// let word = "evening";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// // Challenge 8
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }

