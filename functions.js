
// let age = 15
// if (age<= 18){
//     console.log("$8")
// } else if (age >= 18 && < 60){
//     console.log('$10.50')

// }else if (age >=60){
//     console.log("$7.50")
// }
//  const myFavColor = (colorOne, colorTwo) => {
//     console.log(`my fav color is ${colorOne} and ${colorTwo}`)
// }
// myFavColor('red', 'purple')

// Activity 1 , Functions

const factorial = (n) => {
    if (n === 0 || n === 1){
        return 1;
    } else {
        return (n * factorial(n-1))
    }
}
console.log(factorial(33))


// Activity 2

let orderCount = 0;
const takeOrder = (toppingOne, toppingtwo) => {
    console.log(`Pizza with ${toppingOne} and ${toppingtwo}`); orderCount++;
}
takeOrder('Ham', 'Mushroom')



// Activity 2
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
let total = 0
 
// Activity 3

let pin = 342
const getCash = (num, cash) => {
    if(num === pin && cash < 100){
        console.log(`thank you for using pip cash!`)
    }else if(num === pin && cash > 100){
        console.log('sorry you do not have enough funds')
    }else{
        console.log('try again');
    }
}
getCash(342, 500)                    

