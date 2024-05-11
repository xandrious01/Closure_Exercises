function createAccount(pin, amount=0) {
    const userAccount = {
        pin : pin,
        amount : amount,

        checkBalance : function(userInput){
            if(userInput === this.pin){
                return `$${this.amount}`
            } else {
                return this.incorrectPin();
            }
        },

        deposit : function(userInput, inputAmount){
            if(userInput === this.pin){
                let balance = this.amount;
                this.amount = balance + inputAmount;
                return `Successfully deposited $${inputAmount}. Current balance: $${this.amount*1}.`
            } else {
                return this.incorrectPin();
            }
        },

        withdraw : function (userInput, inputAmount){
            if (userInput === this.pin) {
                if(inputAmount <= this.amount){
                    let balance = this.amount;
                    this.amount = balance - inputAmount;
                    return `Successfully withdrew $${inputAmount}. Current balance: $${this.amount}.`
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
            } else {
                return this.incorrectPin();
            }
            
        },

        changePin : function(userInput, newPin){
            if(userInput === this.pin){
                this.pin = newPin;
                return "PIN successfully changed!"
            } else {
               return this.incorrectPin();
            }
        },

        incorrectPin : function(){
            return "Invalid PIN."
        }

    };
    return userAccount;
}


module.exports = { createAccount };
