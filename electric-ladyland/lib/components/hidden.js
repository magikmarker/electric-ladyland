"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// Create a component that renders a hidden input
function HiddenField(_a) {
    var _b, _c;
    var fieldContext = _a.fieldContext, fieldBlueprint = _a.fieldBlueprint;
    var initialValue = (_b = fieldBlueprint.initialValue) !== null && _b !== void 0 ? _b : "";
    var value = (_c = fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.value) !== null && _c !== void 0 ? _c : initialValue;
    return (0, jsx_runtime_1.jsx)("input", { type: "hidden", name: fieldBlueprint.name, value: value });
}
exports.HiddenField = HiddenField;
