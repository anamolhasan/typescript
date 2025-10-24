"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generics
function logData(data) {
    console.log(data);
}
logData('Hello, world');
logData(23);
logData(true);
logData(['A', 'B', 'C']);
// any vs generics 
// any data check kore na 
// generic data check kore
// Constraints
function printLength(item) {
    console.log(item.length);
}
printLength("Hello, Developer"); // 18
printLength([1, 4, 6]);
function getId(item) {
    return item.id;
}
//# sourceMappingURL=constraints.js.map