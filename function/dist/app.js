"use strict";
// Optional and default parameter
Object.defineProperty(exports, "__esModule", { value: true });
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