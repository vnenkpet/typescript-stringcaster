"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringcaster_1 = require("stringcaster");
exports.toBoolean = stringcaster_1.toBoolean;
exports.toArray = stringcaster_1.toArray;
exports.toNumber = stringcaster_1.toNumber;
exports.toString = stringcaster_1.toString;
exports.toObject = stringcaster_1.toObject;
// envVar decorator
function envVar({ cast = (val) => val, defaultValue, source, sourceKey }) {
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
exports.envVar = envVar;
// backwards compatibility alias
exports.inject = envVar;
//# sourceMappingURL=index.js.map