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
class PartTimeEmployee extends Employee{
    constructor(id,name,age,contractPeriod){
        super(id,name,age);
        this.contractPeriod=contractPeriod;
    }
}
e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee(101,"Jane",34,3);

PartTimeEmployee.code();
//Employee is coding

e2.swipeIn();
//Employee 101 has swiped in at Mon Jul 25 2022 21:19:09 GMT+0530 (India Standard Time)

console.log(e2.contractPeriod);
//3
