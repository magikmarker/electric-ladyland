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
exports.Radio = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var display_1 = require("./shared/display");
var logic_1 = require("./shared/logic");
function Radio(_a) {
    var fieldBlueprint = _a.fieldBlueprint, fieldContext = _a.fieldContext;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, display_1.displayFieldLabelDescriptionError)({
                fieldBlueprint: fieldBlueprint,
            }), fieldBlueprint.options.map(function (radioValue) {
                console.log({ radioValue: radioValue });
                var defaultRadioValue = fieldBlueprint.initialValue;
                if (fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.value) {
                    defaultRadioValue = fieldContext.value;
                }
                var label = (0, logic_1.createFieldLabel)(radioValue);
                return ((0, jsx_runtime_1.jsxs)(display_1.RadioOrCheckboxWrapper, { children: [(0, jsx_runtime_1.jsx)("input", { "data-test": "".concat(fieldBlueprint.name, "-").concat(radioValue), type: "radio", id: "".concat(fieldBlueprint.name, "-").concat(radioValue), name: fieldBlueprint.name, value: radioValue, autoComplete: "off", defaultChecked: radioValue === defaultRadioValue }, radioValue), (0, jsx_runtime_1.jsx)(display_1.RadioOrCheckboxLabel, __assign({ className: "ml-2\n              ", htmlFor: "".concat(fieldBlueprint.name, "-").concat(radioValue) }, { children: label }))] }, "".concat(fieldBlueprint.name, "-").concat(radioValue)));
            })] }));
}
exports.Radio = Radio;
