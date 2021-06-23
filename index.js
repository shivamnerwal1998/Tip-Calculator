/* TipCalculator class contains all the methods and proprties of Tip calculator */
class TipCalculator {
    constructor() {
        this.bill = 0;
        this.tip = 0;
        this.number = 1;
        this.totalBill = 0;
        this.tipException = false;
        this.billException = false;
        this.numberException = false;
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

    //Method for handeling operations of Increment button 
    static increment(id) {
        let target;
        if (id === "tip") {
            target = document.getElementById("tip");
            ++(target.value);
            inputException.tipException();

        }
        else if (id === "number") {
            target = document.getElementById("number");
            ++(target.value);
            inputException.numberException();
        }

    }
    // method for handling operations of decrement button  
    static decrement(id) {
        if (id === "tip") {
            inputException.buttonException(id);

        }
        else if (id === "number") {
            inputException.buttonException(id);


        }

    }

    //method to confirm there is no Exception remaining
    confirmException = () => {
        if ((this.billException || this.tipException || this.numberException)) {
            return true;
        }
        else {
            return false;
        }

    }

}

var calc = new TipCalculator();

/* class containing methods to handle all possible exceptions */
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
    // method to check any exception remaining
    static confirmOtherExceptions() {
        if (calc.confirmException()) {
            window.alert("Enter a valid number in heighlighted field");
        }
        else {
            calc.amountPerPerson("show");
            calc.tipPerPerson("show");
        }

    }
    // method to check all the exceptions of Bill input feild 
    static billException() {
        let target = document.getElementById("bill").value;

        if (Number(target) < 0) {

            this.showExceptionMessage("billException", "Bill Should be +ve in value");
            calc.billException = true;
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {

            this.showExceptionMessage("billException", "Enter a valid number");
            calc.billException = true;
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");

        }
        else {
            this.hideExceptionMessage("billException");
            calc.billException = false;
            calc.bill = bill.value;
            this.confirmOtherExceptions();

        }

    }
    //method to handle all exceptions of Number input feild  
    static numberException() {
        let target = document.getElementById("number").value;
        if (Number(target) == 0) {
            this.showExceptionMessage("numberException", "Number should be greater than zero");
            calc.numberException = true;
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (Number(target) < 0) {
            this.showExceptionMessage("numberException", "Number Should be +ve in value");
            calc.numberException = true;
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {
            this.showExceptionMessage("numberException", "Enter a Valid Number");
            calc.numberException = true;
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
            calc.numberException = false;
            calc.number = number.value;
            this.confirmOtherExceptions();

        }


    }
    // method to handle all the exceptions of Decrement buttons 
    static buttonException(id) {
        let target = document.getElementById(id);

        if (Number(target.value) == 1 && id == "number") {
            window.alert("Number Exception\nAtleast one member should be there");
        }
        else if (Number(target.value) == 0) {
            window.alert("Tip Exception\nTip Should be a positive in Value");
        }
        else {
            (target.value)--
            if (id == "tip") {
                calc.tip = target.value;

            }
            else {
                calc.number = target.value;

            }
            this.confirmOtherExceptions();

        }


    }
    // Method to handle tip exceptions 
    static tipException() {
        let target = document.getElementById("tip").value;
        if (Number(target) < 0) {
            this.showExceptionMessage("tipException", "Tip Should be +ve in value");
            calc.tipException = true;
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else if (target.length == 0) {
            this.showExceptionMessage("tipException", "Enter a Valid Number");
            calc.tipException = true;
            calc.amountPerPerson("hide");
            calc.tipPerPerson("hide");
        }
        else {
            this.hideExceptionMessage("tipException");
            calc.tipException = false;
            calc.tip = Number(target);
            this.confirmOtherExceptions();

        }


    }

}