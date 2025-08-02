
var money = 100;
var taxRate = 1.08;

function totalCost (money, taxRate){
    return money * taxRate;
}

var totalMoney = totalCost(money, taxRate);
console.log(totalMoney);

function objectMaker (num){
    return{
        prop: num
    }
}
objectMaker(20);

let counter = 3;

function example(){
    console.log(counter);
    counter = counter - 1;
    if(counter === 0){
        return;
    }
    example();
}

example();

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)

var purchase1 = {
    shoes: 100,
    taxRate: 1.08,
    totalPrice: function(){
        var calculation = this.shoes * this.taxRate;
        console.log("Total cost:", calculation);
    }
}
purchase1.totalPrice();

class car {
    constructor (color, speed){
        this.color = color;
        this.speed = speed;
    }

    engineOn(){
        console.log("Engine is on!");
    }
}

