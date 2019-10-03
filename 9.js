/* 1) Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have appropriate getters and setters.
It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
It should have a toString method. */


class Author {
            constructor (name, email, gender){
                this._name = name;
                this._email = email;
                this._gender = gender;
            }

            get name() {
                return this._name;
            }
            set name(value) {
                this._name = value;
            }
            get email() {
                return this._email;
            }
            set email(value) {
                this._email = value;
            }
            get gender() {
                return this._gender;
            }
            set gender(value) {
                this._gender = value;
            }
            toString() {
                return "barev";
            }
        }
          
	 class Book extends  Author {
           constructor (name, email, gender, title, price, quantity) {
                super(name, email, gender);
                this._title = title;                
                this._price = price;
                this.quantity = quantity;
            }
            get title() {
                return this._title;
            }
            set title(value) {
          	this._title = value;
            }
            get price() {
                return this._price;
            }
            set price(value) {
                this._price = value;
            }
            get quantity() {
                return this._quantity;
            }
            set quantity(value) {
                this._quantity = value;
            }
           
            
	   getProfit() {
                return this._price * this._quantity;
            }   
  
         toString() {
                return "hajox";
        }
    }
        
            


let book = new Book("Sheqspir", "gmail", "male", "Hamlet", 2000, 100);
console.log(book.getProfit());
console.log(book);



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
