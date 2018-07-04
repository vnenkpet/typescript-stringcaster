"use strict";
// this is a proof-of-concept solution for stringcaster/dotenv-utils for typescript
// this should go into its own package if it works for us.
Object.defineProperty(exports, "__esModule", { value: true });
var stringcaster_1 = require("stringcaster");
exports.toBoolean = stringcaster_1.toBoolean;
exports.toArray = stringcaster_1.toArray;
exports.toNumber = stringcaster_1.toNumber;
exports.toString = stringcaster_1.toString;
exports.toObject = stringcaster_1.toObject;
// inject decorator
function inject({ cast = (val) => val, defaultValue, source, sourceKey }) {
    return function (target, propertyKey) {
        const targetKey = sourceKey ? sourceKey : propertyKey;
        if (typeof defaultValue !== "undefined" &&
            typeof source[targetKey] === "undefined") {
            target[targetKey] = defaultValue;
            return;
        }
        target[targetKey] = cast(source[targetKey]);
    };
}
exports.inject = inject;
//# sourceMappingURL=index.js.map