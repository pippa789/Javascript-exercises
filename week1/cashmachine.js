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