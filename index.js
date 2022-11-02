const user = {
    firstName: 'Alex',
    lastName: 'Doe',
    age: 25,
    telNum: '+380432234234',
    footSize: undefined,
    superId: Symbol(),
    address: null,
    sayHello: function(){
        return `${this.firstName} say: Hello!`
    }
}

const str = JSON.stringify(user);

JSON.parse(str); 

/*
address: null
age:25
firstName:"Alex"
lastName:"Doe"
telNum:"+380432234234"
*/