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
                this._id = id;
                this._name = name;
                this._balance = balance;
            }
            get id() {
                return this._id;
            }
            get name() {
                return this._name;
            }
            set name(value) {
                return this._name = value;
            }
            get balance() {
                return this._balance;
            }
            set balance(value) {
                return this._balance = value;
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


/*3) Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().

Student is inherited from Person. It should have program(array of strings), year, fee.
It should have appropriate getters and setters. 
It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.

Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters. 
It should have a toString method.*/


        class Person {
        	constructor(firstName,lastName,gender,age){
       			  this.firstName = firstName;
        		  this.lastName = lastName;
      			  this.gender = gender;
                          this.age = age;
   		 }
	   get fistNameOfPerson(){
 		return this.firstName;
	   }
	   set fistNameOfPerson(value){
 		return this.firstName = value;
	   }

	   get lastNameOfPerson(){
 		return this.lastName;
	   }
	   set lastNameOfPerson(value){
 		return this.lastName = value;
	   }
	   get genderOfPerson(){
 		return this.gender;
	   }
	   set genderOfPerson(value){
 		return this.gender = value;
	   }
        }

let person = new Person("Kristina","Alekyan","female",32);

        
        class Student extends Person {
            constructor (firstName, lastName, gender, age, program = [], year, fee) {
                super(firstName, lastName, gender, age);
                this.program = program;
                this.year = year;
                this.fee = fee;
            }


	get programOfStudent(){
        	return this.program;
    	}
   	set programOfStudent(value){
        	return this.program = value;
    	}    
    	get yearOfStudent(){
        	return this.year;
    	}
    	set yearOfStudent(value){
        	return this.year = value;
    	} 
    	get feeOfStudent(){
        	return this.fee;
   	 }
    	set feeOfStudent(value){
       		return this.fee = value;
    	}    

	passExam(program, grade,year){
		for(let i=0; i <= program.length; i++){
        	if(grade>=50){
          	program.shift();
        	}
	      }
	 if(program.length===0){
            return ++year;
        }
        return year;
    
    }
    
    
    toString(){
        return "Student toStringMetod?? "
    }
	}
let student = new Student("Kristina","Alekyan","female", 32, ["JS","HTML"],3, 1000, 51);

class Teacher extends Person {
            constructor (firstName, lastName, gender,age, program,pay) {
                super(firstName,lastName,gender,age);
                this.program = program;
                this.pay = pay;
            }
}




console.log(student.passExam(["JS","HTML"],115,1));
let teacher= new Teacher("Kristina","Alekyan","female", 32,"ACA teacher", 100);
console.log(teacher);
