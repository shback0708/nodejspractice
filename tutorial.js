const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    contructor(){
        console.log("object created");
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

// this should be equal to 
module.exports = {sum:sum, PI:PI, SomeMathObject:SomeMathObject};