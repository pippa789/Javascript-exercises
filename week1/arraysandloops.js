// Activity 1

const person = {
    name: 'Pip',
    age: 55,
    favSongs: ['City of New Orleans',
    'Son of a Preacher'],
sayHi(){
    return `Hello my name is ${this.name}`;
}
}  
console.log(person.sayHi())

// Activity 1, Stretch

const pet = {
    name: 'Ruby',
    typeOfPet: 'Very naughty Dog',
    age: '9 yrs old',
    color: 'Black',

    eat(){
        return `${this.name} is eating everything!`;
    },
    drink(){
        return `${this.name} is a ${this.typeOfPet} and she's drinking out of the pond`
    }
}
console.log(pet.eat())
console.log(pet.drink())

// Activity 1, later in the day.

let favFilms = [ 'f1', 'f2', 'f3','f4', 'f5']
favFilms.push('f6');
console.log(favFilms)
for(let i = 0; i < favFilms.length; i++){
    console.log(`${favFilms[i]} is one of my favorite films`)

// Activity 2

let randomNum = 
Math.floor(Math.random() * 50)
console.log(randomNum)
for (let i = 0; i < 7; i++){
    console.log(randomNum[i]);
}

 // Activity 3

let numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(numList)
let randomNumber;

for (let i = 0; i <= 6; i++) {
    randomNumber = Math.floor(Math.random() * 50);
    console.log(randomNumber);

// Activity 4 arrays and loops
let films = ["Atomic blond", "Venom", "Ghostbusters", "The Others"]

for(let i = 0 ; i < films.length; i++){
    console.log(films[i]);
}
if(films[2] == "Ghostbusters"){
    console.log("Yay its Ghostbusters")
} else {
    console.log("Boo! we want Ghostbusters")
}

// --- Activity 5 ---

for(let i = 0 ; i < 6; i++){
    let num = Math.ceil(Math.random() * 30);

    if(num%7 == 0){
        console.log(`${num} is divisible by 7`)
    } else {
        console.log(`${num} is not divisible by 7`)
    }
}

// --- Activity 6 ---

let pipsFriends = ["Sarah", "Lee", "Kelly", "Tracy"];
let alansFriends = ["Lee", "Paul", "Jack", "Tracy"];

for(let i = 0; i < pipsFriends.length; i++){
    for(let j = 0; j < alansFriends.length; j++){
        if(pipsFriends[i] === alansFriends[j]){
            console.log(alansFriends[j])
        }
    }
}


// --- Activity 7 ---

let text = "";
let i = 0;
do {
    text = "The number is " + i;
    console.log(text)
    i++;
}
while (i < 5);

i = 0;
for (i = 0; i < 5; i++) {
    text = "The number is " + i ;
    console.log(text)
}

i = 0;
while (i < 5) {
    text = "The number is " + i;
    console.log(text)
    i++;
}

