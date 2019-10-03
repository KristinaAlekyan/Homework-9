/* 2)  Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.
*/class Account {
            constructor (id, name, balance) {
                this.id = id;
                this.name = name;
                this.balance = balance;
            }
            get idOfAccount() {
                return this.id;
            }
            get nameOfAccount() {
                return this.name;
            }
            set nameOfAccount(value) {
                return this.name = value;
            }
            get balanceOfAccount() {
                return this.balance;
            }
            set balanceOfAccount(value) {
                return this.balance = value;
            }
            credit(amount) {
                this.balance += amount;
                return this.balance;
            }
            debit(amount) {
                if(this.balance >= amount) {
                    this.balance -= amount;
                    return this.balance;
                } else {
                    return "Amount exceeded balance";
                }
            }
            transferTo(anotherAccount, amount) {
                if( amount>balance) {
                    return "Amount exceeded balance";
                } else {
                    this.balance -= amount;
                    anotherAccount += amount;
                    return this.balance;
                }
            }
            static identifyAccounts(accountFirst, accountSecond) {
                for (let key in accountFirst) {
                    if(accountFirst[key] !== accountSecond[key]) {
                        return false;
                    }
                        return true;
                }
            }
            toString() {
                return "stringMethod";
            }
        }
            let accountFirst = new Account("22047", "Acba", 1000);
            let accountSecond = new Account("15700", "Ameria", 2000);
            let accountThird = new Account("15700", "Ameria", 2000);
            console.log(accountFirst);
        console.log(Account.identifyAccounts(accountFirst, accountSecond));
        console.log(Account.identifyAccounts(accountThird, accountSecond));