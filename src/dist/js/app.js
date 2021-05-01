"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../sass/main.scss");
const sumEverything = (...numbers) => {
    console.log(numbers);
    return numbers.reduce((result, num) => result
        + num, 0);
};
sumEverything(1, 2, 3, 4);
//# sourceMappingURL=app.js.map