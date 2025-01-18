//Understanding how to organize code into modules and how to import/export them in Node.js

//cjs(commanJS):- reqire word & module.exports use in Node mainly
//esm(ecmascriptModule):- import  export keywords are use


//fist example
// var a = 12;

// module.exports = a;//that means aap yaha sai value bhej rahe ho 

//second example
var a = 12;
var b = 13;

// module.exports = {a: a , b: b}; //first make a object & a,b if we want to a,b at the same time export one thing which is an object
// module.exports = b;//by this way we cannot access

//same work as the above one is:
module.exports.a = a;//we add property in export which is possible we make a property & set value a  
module.exports.b = b;
