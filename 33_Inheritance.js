// In JavaScript, one class can inherit another class using the extends keyword. 

// The subclass inherits all the methods ( both static and non-static ) of the parent class.

// In the below code, we are creating a child class called PartTimeEmployee which extends the Employee class. 
class Employee {
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    swipeIn(){
        console.log("Employee "+ this.id +" has swiped in at "+new Date());
    }

    static code(){
        console.log("Employee is coding"); 
    }
}

class PartTimeEmployee extends Employee{
}


e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee();

PartTimeEmployee.code();
// Employee is coding

e2.swipeIn();
//Employee undefined has swiped in at Mon Jul 25 2022 21:14:38 GMT+0530 (India Standard Time)
//  e2.swipeIn() gives undefined for the id. This is because we are not passing the values to the parent constructor. Let us look at how to achieve this in the next lesson.