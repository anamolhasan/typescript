"use strict";
// function with typescript
Object.defineProperty(exports, "__esModule", { value: true });
// function funName (parameterName:type):ReturnType{
//     // logic
// }
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet('anam'));
// function type signature
let greetFunction;
greetFunction = function (name) {
    return `Hi ${name}`;
};
console.log(greetFunction('Hasan'));
//# sourceMappingURL=index.js.map