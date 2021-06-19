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

    totalTip = () =>{
        let totalTipAmount = this.bill + ((this.bill * this.tip)/100) ; 
        return totalTipAmount ;
    }
    tipPerPerson = (totalTip) =>{
        let tipPerPerson = totalTip/this.number ; 
    }

    billPerPerson = (total) => {
        let eachShare = total / this.number;
        return eachShare;
    }


}

