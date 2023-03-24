// JavaScript is a object oriented language.

//example:
class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
}
e1=new Employee(100,"Mark",23);
e2=new Employee(101,"Jane",24);
console.log(e1.age);
e1.swipeIn();
e2.swipeIn();
