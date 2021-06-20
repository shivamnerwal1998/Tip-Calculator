/*
   TipCalculator class contains all the methods and 
   proprties of calculator 
*/
class TipCalculator {

    constructor(){
        this.bill = 0 ; 
        this.tip = 0  ; 
        this.number = 1 ;
    }

    // method to return total tip 
    totalTip = () =>{
        let totalTipAmount = this.bill + ((this.bill * this.tip)/100) ; 
        return totalTipAmount ;
    }

    // method to return tip person 
    tipPerPerson = (totalTip) =>{
        let tipPerPerson = totalTip/this.number ; 
    }
    // method to return bill perperson 
    billPerPerson = (total) => {
        let eachShare = total / this.number;
        return eachShare;
    }


}

