//Constructor function
function Person(name,age,gender){
    //Properties
    this.name=name;
    this.age=age;
    this.gender=gender;

    //Method to display prson's details
    this.displayDetails = function(){
        console.log(`Name: ${this.name},Age:${this.age},Gender:${this.gender}`);
    };

    //Method to celebrate birthay
    this.celebrateBirthday=function(){
        this.age++;
        console.log(`Happy Birthday,${this.name}!You are now ${this.age}years old.`);
    };

}
//Creating insances of Person
const person1 = new Person('Nisha',21,'female');
const person2 = new Person('ar',20,'male');

//using the method
person1.displayDetails();
person2.displayDetails();

//Celebrating birthdays
person1.celebrateBirthday();
person2.celebrateBirthday();
