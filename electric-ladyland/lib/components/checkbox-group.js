"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroup = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var display_1 = require("./shared/display");
// Because we are dealing with checkboxes, we want all of the
// context items.
// To determine if a checkbox is checked, we need to look
// at the context to see if the field exists there. If it does,
// we know that the checkbox is checked.
function CheckboxGroup(_a) {
    var fieldBlueprint = _a.fieldBlueprint, context = _a.context;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, display_1.displayFieldLabelDescriptionError)({
                fieldBlueprint: fieldBlueprint,
            }), fieldBlueprint.checkboxes.map(function (checkbox) {
                return ((0, jsx_runtime_1.jsxs)(display_1.RadioOrCheckboxWrapper, { children: [(0, jsx_runtime_1.jsx)("input", { "data-test": "".concat(checkbox.name, "-").concat(checkbox.value), type: "checkbox", id: checkbox.name, name: checkbox.name, value: checkbox.value, autoComplete: "off", defaultChecked: context === null || context === void 0 ? void 0 : context[checkbox.name] }, checkbox.name), (0, jsx_runtime_1.jsx)(display_1.RadioOrCheckboxLabel, __assign({ className: "ml-2\n              ", htmlFor: checkbox.name }, { children: checkbox.label }))] }, checkbox.name));
            })] }));
}
exports.CheckboxGroup = CheckboxGroup;
