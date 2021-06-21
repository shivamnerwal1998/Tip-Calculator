/*
   TipCalculator class contains all the methods and 
   proprties of calculator 
*/
class TipCalculator {

    constructor() {
        this.bill = 0;
        this.tip = 0;
        this.number = 1;
        this.totalBill = 0;
    }

    // method to display Bill per Person   
    amountPerPerson() {
        this.totalTipAmount = (Number(this.bill) + (Number(this.bill) * Number(this.tip)) / 100);
        this.totalBill = this.totalTipAmount;
        let eachShare = this.totalBill / Number(this.number);
        let target = document.getElementById("totalBill");
        target.innerHTML = "$" + eachShare;

    }

    // method to display tip per person 
    tipPerPerson = () => {
        let tipEach = (this.bill) * Number(tip.value) / (Number(this.number) * 100);
        let target = document.getElementById("tipEach");
        target.innerHTML = "$" + tipEach;

    }

    static increment(id) {
        if (id === "tip") {
            console.log("hello world")

        }
        else if (id === "number") {
            console.log("hello Number");


        }


    }
    static decrement(id) {
        if (id === "tip") {
            console.log("hello world")

        }
        else if (id === "number") {
            console.log("hello Number");


        }



    }



}


// creating the instance of calculator 
let calc = new TipCalculator();


let bill = document.getElementById("bill");
bill.addEventListener("change", () => {
    calc.bill = bill.value;
    calc.amountPerPerson();
    calc.tipPerPerson();

});


let number = document.getElementById("number");
number.addEventListener("change", () => {
    calc.number = number.value;
    calc.amountPerPerson();
    calc.tipPerPerson();

});


let tip = document.getElementById("tip");
tip.addEventListener("change", () => {
    calc.tip = tip.value;
    calc.amountPerPerson();
    calc.tipPerPerson();
});
