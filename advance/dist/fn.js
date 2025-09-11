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
log(1.34675);
//# sourceMappingURL=fn.js.map