// / Activity 1 (if, else statements)
const age = 18;
if (age >= 17){
    console.log("Yes, I can serve you.")
}else{
    console.log("You are not old enough.")
}
// Activity 1 stretch
let country = 'UK';
country = 'US'
if (age >= 17 && country == 'UK'){
    console.log("I can serve you")
}else if (age >= 21 && country == 'US'){
    console.log('Welcome to the states, can I buy you a drink?')
}else{
    console.log('Sorry I can not serve you.')
}

// Activity 2 (if, else statements)

let topping = 'pepperoni';
topping = 'Pineapple';
switch(topping){
    case "Olives":
    case 'Mushrooms':
        console.log(`I like ${topping} on my Pizza`);
        break;
    case 'Pineapple':
    case 'Anchovies':
        console.log(`I cannot eat a Pizza with ${topping} on it.`)
        break;
    default:
        console.log('Not my fav but that is ok')
}

// Activity 3

const password = 'baddoggy';
if (password.length >= 8){
    console.log('Your Password is long enough')
}else if(password.length < 8){
    console.log('Sorry your Password is too short')
}
// Activity 3, stretch
const num = 10;
if (num % 3 && 5 == 0){
    console.log('this number is divisiable ')
}else  {
    console.log('you cant divide these');
}

// Activity 4 (if, else statements)

let num = 10;

if (num % 3 == 0 &&  5 == 0){
    console.log('fizz buzz')
}else if (num % 5 == 0){
    console.log('buzz');
}else if (num % 3 == 0){
    console.log('fizz ')
}else{
    console.log(num)
}

// Activity 5

let num = 1001;
num = 1002
let n = num.toString();
let numString = n.split('');
// console.log(numString);
let reverseNum = numString.reverse()
// console.log(reverseNum);
let forwardString = numString.reverse().join('')
// console.log(forwardString);
let reverseString = reverseNum.reverse().join('')
// console.log(reverseString);

if(forwardString === reverseString){
    console.log(`${num} is a palindrome`)
}else{
    console.log(`${num} is not a palindrome`)


// Activity 6

let time = 19
let placeOfWork = 9
let WakeUpTime = 8
let downTime = 18
if (time <= downTime){
    console.log('Im at work')
}else if (time >= downTime)
    console.log('Im not available')
else{
    console.log(' bla bla')
}


// // Activity 7

let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
for (let i = 0; i < vowelArr.length; i++){
console.log(string.lastIndexOf(vowelArr[i]));
index = string.lastIndexOf(vowelArr[i]);
if (index >= highestIndex ){
highestIndex = index;
lastVowel = vowelArr[i];
}
}
console.log(lastVowel); 
console.log(highestIndex)

// Activity 8

let word = "fragile";
if (word.charAt(0) == word.charAt(word.length-1)){
  console.log("True")
} else {
  console.log("False")
}

// Activity 9

let num1 = 5;
let num2 = 5;
let sum = num1 + num2;

if (sum % 2 == 0){
  console.log(`The sum = ${sum} and is even.`)
} else {
  console.log(`${num1 * num2}`)
}
