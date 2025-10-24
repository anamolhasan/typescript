"use strict";
//  with generics (super reusable)
Object.defineProperty(exports, "__esModule", { value: true });
function logData(data) {
    console.log(data);
}
logData("Hello");
logData(222);
logData(true);
const userResponse = {
    success: true,
    data: {
        name: "Alice"
    }
};
const numberResponse = {
    success: false,
    data: 42
};
//# sourceMappingURL=function-interfaces.js.map