"use strict";
// type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function log(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// log(1.34675)
// log('I am a web developer')
// handle form input
function processInput(input) {
    if (typeof input === 'number') {
        console.log('Parsed as a number :', input * 2);
    }
    else {
        console.log('Parsed as a string', input.trim()); // remove white space
    }
}
processInput('      Hello I am a developer      ');
processInput(3);
//# sourceMappingURL=narrowing.js.map