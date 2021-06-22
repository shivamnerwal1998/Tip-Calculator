/* TipCalculator class contains all the methods and proprties of calculator */
class TipCalculator {
    constructor() {
        this.bill = 0;
        this.tip = 0;
        this.number = 1;
        this.totalBill = 0;
    }
    // method to display Bill per Person   
    amountPerPerson = (action) => {
        this.totalTipAmount = (Number(this.bill) + (Number(this.bill) * Number(this.tip)) / 100);
        this.totalBill = this.totalTipAmount;
        let eachShare = (this.totalBill / Number(this.number)).toFixed(2); // fixing it to 2 decimal places 
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
        let tipEach = (this.bill) * Number(this.tip) / (Number(this.number) * 100);
        tipEach = tipEach.toFixed(2);
        let target = document.getElementById("tipEach");
        if (action == "show") {
            target.style.display = "block";
            target.innerHTML = "$" + tipEach;
        }
        else {
            target.style.display = "none";
        }
    }
    /* Method for handeling operations of increment button */
    static increment(id) {
        let target;
        if (id === "tip") {

        }
        else if (id === "number") {
            target = document.getElementById("number");
            ++(target.value);
            inputException.numberCheck();
            // to add tip check exception here


        }


    }
    /* method for handling operations of decrement button  */
    static decrement(id) {
        if (id === "tip") {

        }
        else if (id === "number") {
            let targrt = document.getElementById("number");
            inputException.buttonException(id);


        }

    }
    /* Method of handeling operations of Tip input feild  */
    static inputTip() {
        let target = document.getElementById("tip");
        let exactValue = target.value;
        target.value = target.value + "%";
        inputException.tipException(exactValue);

    }



}
let calc = new TipCalculator(); // creating the instance of TipCalculator class 
// class containing methods to handle input exceptions 
class inputException {
    //method to show Exception message 
    static showExceptionMessage(id, message) {
        let line = document.getElementById(id);
        line.style.display = "block";
        line.style.color = "red";
        line.style.fontSize = "70%";
        line.innerHTML = message;

    }
    //method to hide Exception message 
    static hideExceptionMessage(id) {
        let line = document.getElementById(id);
        line.style.display = "none";
    }
    // method to check all the exceptions of Bill input feild 
    static billCheck() {
        let target = document.getElementById("bill").value;

        if (Number(target) < 0) {

            this.showExceptionMessage("billException", "Bill Should be +ve in value");
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {

            this.showExceptionMessage("billException", "Enter a valid number");
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");

        }
        else {
            this.hideExceptionMessage("billException");
            calc.bill = bill.value;
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }

    }
    //method to handle all exceptions of Number input feild  
    static numberCheck() {
        let target = document.getElementById("number").value;
        if (Number(target) == 0) {
            this.showExceptionMessage("numberException", "Number should be greater than zero");
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (Number(target) < 0) {
            this.showExceptionMessage("numberException", "Number Should be +ve in value");
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {
            this.showExceptionMessage("numberException", "Enter a Valid Number");
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (!(Number.isInteger(Number(target)))) {
            this.showExceptionMessage("numberException", "Number should be a positive integer");
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");

        }

        else {
            this.hideExceptionMessage("numberException");
            calc.number = number.value;
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }


    }
    // method to handle all the exceptions of Decrement buttons 
    static buttonException(id) {
        let target = document.getElementById(id);

        if (Number(target.value) == 1 && id == "number") {
            window.alert("Atleast one member should be there") ;
        }
        else if (Number(target.value) == 0) {
            window.alert("Enter a valid number") ;
        }
        else {
            (target.value)--
            if (id == "tip") {
                calc.tip = target.value;

            }
            else {
                calc.number = target.value;

            }
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");

        }


    }
    /* Method to handle tip exceptions */
    static tipException(exactValue) {
        if (false) {

        }
        else if (false) {

        }
        else {
            calc.tip = exactValue;
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
