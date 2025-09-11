"use strict";
// Custom type guards
Object.defineProperty(exports, "__esModule", { value: true });
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myFish = {
    swim: () => console.log('my fish is swim....')
};
move(myFish);
//# sourceMappingURL=custom_guards.js.map