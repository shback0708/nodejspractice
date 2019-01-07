const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// here we basically need an on and emit

// can I interpret on as declaration of function
// and emit as calling the function? 

eventEmitter.on('tutorial', (num1,num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);


// class Person is an extension of EventEmitter
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('christina');

christina.on('name',() => {
    console.log('my name is ' + christina.name);
});

pedro.on('name',() => {
    console.log('my name is ' + pedro.name);
});

// synchronous call here
pedro.emit('name');
christina.emit('name');

