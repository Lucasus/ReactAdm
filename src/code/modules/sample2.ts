import greeter = require('modules/sample');

function greet2(name) {
    greeter.greet(name);
    console.log(name);
}

export = greet2;