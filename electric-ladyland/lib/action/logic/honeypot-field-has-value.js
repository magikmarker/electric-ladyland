"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.honeypotFieldHasValue = void 0;
// A bot entered a value into a hidden field
function honeypotFieldHasValue(_a) {
    var body = _a.body;
    var honeypotField = body.get("given-name");
    // console.log({ honeypotField });
    if (honeypotField) {
        return true;
    }
    return false;
}
exports.honeypotFieldHasValue = honeypotFieldHasValue;
