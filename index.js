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
        let eachShare = (this.totalBill / Number(this.number)).toFixed(2);
        let target = document.getElementById("totalBill");
        if (action == "show") {
            target.style.display = "block";
            target.innerHTML = "$" + eachShare;
        }
        else {
            target.style.display = "none";
        }

    }

    // method to display tip per person 
    tipPerPerson = (action) => {
        let tipEach = (this.bill) * Number(tip.value) / (Number(this.number) * 100);
        tipEach = tipEach.toFixed(2);
        let target = document.getElementById("tipEach");
        if (action == "show") {
            target.style.display = "block";
            target.innerHTML = "$" + tipEach;
        }
        else {
            display = "none";
        }



    }

    static increment(id) {
        let target;
        if (id === "tip") {
            target = document.getElementById("tip");
            console.log("in tip");
            ++(target.value);
            // to add tip check exception 

        }
        else if (id === "number") {
            target = document.getElementById("number");
            ++(target.value);
            inputException.numberCheck();
            // to add tip check exception here


        }


    }
    static decrement(id) {
        if (id === "tip") {
            let target = document.getElementById("tip");
            inputException.buttonException(id);

        }
        else if (id === "number") {
            let targrt = document.getElementById("number");
            inputException.buttonException(id);


        }



    }



}

// creating the instance of calculator 
let calc = new TipCalculator();

// class contgaining methods to handle input exceptions 
class inputException {

    // method to check all the exceptions of bill input feild 
    static billCheck() {
        let target = document.getElementById("bill").value;
        let line = document.getElementById("billException");
        if (Number(target) < 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Bill Should be +ve in value ";
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "70%";
            line.innerHTML = "Enter a valid number";
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");

        }
        else {
            line.style.display = "none";
            calc.bill = bill.value;
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }

    }

    //method to handle all exceptions of Number input feild  
    static numberCheck() {
        let target = document.getElementById("number").value;
        let line = document.getElementById("numberException");
        if (Number(target) == 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "80%";
            line.innerHTML = "Number should be greater than Zero";
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (Number(target) < 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "80%";
            line.innerHTML = "Number Should be +ve in value ";
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "80%";
            line.innerHTML = "Enter a valid number";
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");

        }
        else if (!(Number.isInteger(Number(target)))) {
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "80%";
            line.innerHTML = "Number should be a positive Integer";
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");

        }

        else {
            line.style.display = "none";
            calc.number = number.value;
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }


    }

    // method to handle all the exceptions of decrement buttons 
    static buttonException(id) {
        let target = document.getElementById(id);

        if (Number(target.value) == 1 && id == "number") {

            let line = document.getElementById("numberException");
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "80%";
            line.innerHTML = "Atleast one member should be there";



        }
        else if (Number(target.value) == 0) {
            let line = document.getElementById(`${id}+Exception`);
            line.style.display = "block";
            line.style.color = "red";
            line.style.fontSize = "80%";
            line.innerHTML = "Number Should be +ve in value ";

        }
        else {
            (target.value)--;

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