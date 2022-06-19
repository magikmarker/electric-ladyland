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
exports.StatefulRadio = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var form_field_1 = require("../form-field");
var display_1 = require("./shared/display");
var logic_1 = require("./shared/logic");
function StatefulRadio(_a) {
    var fieldBlueprint = _a.fieldBlueprint, context = _a.context;
    var selectedIndex = 0;
    fieldBlueprint.options.forEach(function (option, index) {
        var _a, _b;
        var defaultValue = (_b = (_a = context[fieldBlueprint.name]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : fieldBlueprint.initialValue;
        if (defaultValue === option) {
            selectedIndex = index;
        }
    });
    console.log({ context: context });
    var _b = (0, react_1.useState)(selectedIndex), selectedValue = _b[0], setSelectedValue = _b[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, display_1.displayFieldLabelDescriptionError)({
                fieldBlueprint: fieldBlueprint,
            }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-item" }, { children: fieldBlueprint.options.map(function (radioValue, index) {
                    var label = (0, logic_1.createFieldLabel)(radioValue);
                    if (index === selectedValue) {
                        return ((0, jsx_runtime_1.jsxs)(display_1.RadioOrCheckboxWrapper, { children: [(0, jsx_runtime_1.jsx)("input", { "data-test": "".concat(fieldBlueprint.name, "-").concat(radioValue), type: "radio", id: "".concat(fieldBlueprint.name, "-").concat(radioValue), name: fieldBlueprint.name, value: radioValue, onChange: function () {
                                        setSelectedValue(index);
                                    }, checked: true, autoComplete: "off" }), (0, jsx_runtime_1.jsx)(display_1.RadioOrCheckboxLabel, __assign({ htmlFor: "".concat(fieldBlueprint.name, "-").concat(radioValue) }, { children: label }))] }, radioValue));
                    }
                    else {
                        return ((0, jsx_runtime_1.jsxs)(display_1.RadioOrCheckboxWrapper, { children: [(0, jsx_runtime_1.jsx)("input", { "data-test": "".concat(fieldBlueprint.name, "-").concat(radioValue), type: "radio", id: "".concat(fieldBlueprint.name, "-").concat(radioValue), name: fieldBlueprint.name, value: radioValue, onChange: function () {
                                        setSelectedValue(index);
                                    }, autoComplete: "off" }), (0, jsx_runtime_1.jsx)(display_1.RadioOrCheckboxLabel, __assign({ htmlFor: "".concat(fieldBlueprint.name, "-").concat(radioValue) }, { children: label }))] }, radioValue));
                    }
                }) })), fieldBlueprint.dependentChildren[selectedValue].map(function (nestedField) {
                if (nestedField) {
                    return ((0, jsx_runtime_1.jsx)(form_field_1.FormField, { context: context, field: nestedField }, nestedField.name));
                }
                return null;
            })] }));
}
exports.StatefulRadio = StatefulRadio;
