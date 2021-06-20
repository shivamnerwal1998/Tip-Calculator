/*
   TipCalculator class contains all the methods and 
   proprties of calculator 
*/
class TipCalculator {

    constructor() {
        this.bill = 0;
        this.tip = 0;
        this.number = 1;
    }

    // method to return total tip 
    totalTip = () => {
        let totalTipAmount = this.bill + ((this.bill * this.tip) / 100);
        return totalTipAmount;
    }

    // method to return tip per person 
    tipPerPerson = (totalTip) => {
        let tipPerPerson = totalTip / this.number;
    }
    // method to return bill per person 
    billPerPerson = (total) => {
        let eachShare = total / this.number;
        return eachShare;
    }
    showBill = () =>{
        console.log(this.bill) ;
    }


}

// creating the instance of calculator 
let calc = new TipCalculator();

let bill = document.getElementById("bill");
bill.addEventListener("change", () => {
    calc.bill = bill.value;
    console.log(calc.billPerPerson(calc.bill)); 
});




/*
let tip = document.getElementById("tip");
console.log( tip.value ) ;

let number = document.getElementById("number");
console.log( number.value ) ; */