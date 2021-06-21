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
    amountPerPerson(action) {
        this.totalTipAmount = (Number(this.bill) + (Number(this.bill) * Number(this.tip)) / 100);
        this.totalBill = this.totalTipAmount;
        let eachShare = this.totalBill / Number(this.number);
        let target = document.getElementById("totalBill");
            target.style.display ="block" ;
            target.innerHTML = "$" + eachShare;

    }

    // method to display tip per person 
    tipPerPerson = (action) => {
        let tipEach = (this.bill) * Number(tip.value) / (Number(this.number) * 100);
        let target = document.getElementById("tipEach");
            target.style.display ="block" ;
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

// class handeling input exceptions 
class inputException {
    static billCheck() {
        let target = document.getElementById("bill").value;
        let line = document.getElementById("billException");
        if (Number(target) < 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Bill Should be +ve in value ";
        }
        else if (target.length == 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Enter a valid number";

        }
        else {
            line.style.display = "none";
            calc.bill = bill.value;
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }

    }
    static numberCheck() {
        let target = document.getElementById("number").value;
        let line = document.getElementById("numberException");
        if (Number(target) == 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Number is greater than Zero";
        }
        else if (Number(target) < 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Number Should be +ve in value ";
        }
        else if (target.length == 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Enter a valid number";

        }
        else if (!(Number.isInteger(Number(target)))) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Number should be a positive Integer";

        }

        else {
            line.style.display = "none";
            calc.number = number.value;
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }


    }

}





let bill = document.getElementById("bill");
bill.addEventListener("change", () => {
    inputException.billCheck();

});


let number = document.getElementById("number");
number.addEventListener("change", () => {
    inputException.numberCheck();
});


let tip = document.getElementById("tip");
tip.addEventListener("change", () => {
    calc.tip = tip.value;
    calc.amountPerPerson("show");
    calc.tipPerPerson("show");
});