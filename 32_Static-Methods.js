// Just like in other programming languages, we can create static methods in JavaScript using the static keyword. Static values can be accessed only using the classname.

// In the below example, code is a static method and it is accessed using the classname.

class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
    static code(){
        console.log("Employee is coding");
    }
}
Employee.code();
