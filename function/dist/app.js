"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// void return type
function logMessage(message) {
    console.log('Log', message);
}
// never return type (advanced)
function throwError() {
    throw new Error('Something went wrong!');
}
// Optional and default parameter
function greet(fistName, lastName, title) {
    return `Hello ${fistName} - ${lastName} is a ${title ? title : 'N/A'}`;
}
console.log(greet('anam', 'Hasan', 'student'));
console.log(greet('anam', 'Hasan'));
// default parameter
function welcomeMessage(name = 'guest') {
    return `Welcome ${name}`;
}
console.log(welcomeMessage());
console.log(welcomeMessage("Hasan"));
//# sourceMappingURL=app.js.map