"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var display_1 = require("./shared/display");
var logic_1 = require("./shared/logic");
function TextInput(_a) {
    var fieldBlueprint = _a.fieldBlueprint, fieldContext = _a.fieldContext, className = _a.className;
    var _b = (0, logic_1.useFormField)({ fieldBlueprint: fieldBlueprint, fieldContext: fieldContext }), defaultValue = _b.defaultValue, fieldErrors = _b.fieldErrors, setFieldErrors = _b.setFieldErrors, fieldVisited = _b.fieldVisited, setFieldVisited = _b.setFieldVisited;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, display_1.displayFieldLabelDescriptionError)({
                fieldBlueprint: fieldBlueprint,
                fieldErrors: fieldErrors,
                fieldVisited: fieldVisited,
            }), fieldBlueprint.type === "text" ||
                fieldBlueprint.type === "password" ||
                fieldBlueprint.type === "email" ? ((0, jsx_runtime_1.jsx)("input", { "data-test": fieldBlueprint.name, name: fieldBlueprint.name, id: fieldBlueprint.name, className: "el-text-input".concat(className ? " " + className : ""), required: fieldBlueprint.required, defaultValue: defaultValue, placeholder: fieldBlueprint.placeholder, onBlur: function () { return setFieldVisited(true); }, onChange: function (event) {
                    (0, logic_1.onChange)({
                        e: event,
                        setFieldErrors: setFieldErrors,
                        fieldErrors: fieldErrors,
                        fieldValidation: fieldBlueprint.validation,
                    });
                }, pattern: fieldBlueprint.validation.formInputPattern, title: fieldBlueprint.validation.formInputMessage, type: fieldBlueprint.type, autoCorrect: "false", autoComplete: "false" })) : fieldBlueprint.type === "textarea" ? ((0, jsx_runtime_1.jsx)("textarea", { name: fieldBlueprint.name, id: fieldBlueprint.name, "data-test": fieldBlueprint.name, className: "w-full font-medium mm:text-lg p-2 px-3 bg-white rounded", required: fieldBlueprint.required, rows: 5, defaultValue: defaultValue, placeholder: fieldBlueprint.placeholder, onBlur: function () { return setFieldVisited(true); }, onChange: function (event) {
                    (0, logic_1.onChange)({
                        e: event,
                        setFieldErrors: setFieldErrors,
                        fieldErrors: fieldErrors,
                        fieldValidation: fieldBlueprint.validation,
                    });
                } })) : null] }));
}
exports.TextInput = TextInput;
