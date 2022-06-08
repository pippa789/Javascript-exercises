// Activity 1

// const person = {
//     name: 'Pip',
//     age: 55,
//     favSongs: ['City of New Orleans',
//     'Son of a Preacher'],
// sayHi(){
//     return `Hello my name is ${this.name}`;
// }
// }  
// console.log(person.sayHi())

// // Activity 2

// const pet = {
//     name: 'Ruby',
//     typeOfPet: 'Very naughty Dog',
//     age: '9 yrs old',
//     color: 'Black',

//     eat(){
//         return `${this.name} is eating everything!`;
//     },
//     drink(){
//         return `${this.name} is a ${this.typeOfPet} and she's drinking out of the pond`
//     }
// }
// console.log(pet.eat())
// console.log(pet.drink())

// Activity 3

const coffeeShop = {
    branch: "Manchester",
    drinks: [
        ["Latte", 1],
        ["Tea", 2],
        ["Coffee", 3]        
    ],
    
    food: [
        ["chips", 1],
        ["sandwich", 2]
    ],
    
    drinksOrdered (){
        drinksAmount ++;
        console.log(`Your order is ${this.branch} is drinks`) ;
    },
    foodOrdered (){
        foodAmount ++;
        console.log(`Your order is ${this.branch} is food`);
    }
}

