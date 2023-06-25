'use strict';

const senetences = [
    { subject: 'JavaScipt', verb: 'is', object: 'greate' },
    { subject: 'Elephant', verb: 'are', object: 'large' }
];

//es6 feature: object destructuring
function say({subject, verb, object}){
    // es6 feature : template string
    console.log( `${subject} ${verb} ${object}`);

}


// es6 feature: for..of
for (let s of senetences){
    say(s);
}