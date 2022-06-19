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
exports.RadioOrCheckboxLabel = exports.RadioOrCheckboxWrapper = exports.displayFieldLabelDescriptionError = exports.displayFieldErrors = exports.FieldDescription = exports.FieldLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function FieldLabel(_a) {
    var className = _a.className, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "el-form-field-label".concat(className ? " " + className : "") }, { children: children })) }));
}
exports.FieldLabel = FieldLabel;
function FieldDescription(_a) {
    var children = _a.children;
    if (children) {
        return (0, jsx_runtime_1.jsx)("p", __assign({ className: "el-form-field-description" }, { children: children }));
    }
    return null;
}
exports.FieldDescription = FieldDescription;
function displayFieldErrors(_a) {
    var fieldErrors = _a.fieldErrors, fieldVisited = _a.fieldVisited;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: fieldErrors.length >= 1 && fieldVisited
            ? fieldErrors.map(function (fieldError) {
                console.log({ fieldError: fieldError });
                if (fieldErrors.length === 1) {
                    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-error-text" }, { children: fieldError }), fieldError));
                }
                else {
                    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "el-field-error-text" }, { children: ["- ", fieldError] }), fieldError));
                }
            })
            : null }));
}
exports.displayFieldErrors = displayFieldErrors;
function displayFieldLabelDescriptionError(_a) {
    var fieldBlueprint = _a.fieldBlueprint, fieldErrors = _a.fieldErrors, fieldVisited = _a.fieldVisited;
    // fieldErrors = ["Something Very Bad Happened", "Another Bad Thing"];
    // fieldVisited = true;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: fieldBlueprint.name }, { children: (0, jsx_runtime_1.jsx)(FieldLabel, { children: fieldBlueprint.label }) }), fieldBlueprint.name), (0, jsx_runtime_1.jsx)(FieldDescription, { children: fieldBlueprint.description }), fieldErrors && fieldVisited
                ? displayFieldErrors({ fieldErrors: fieldErrors, fieldVisited: fieldVisited })
                : null] }));
}
exports.displayFieldLabelDescriptionError = displayFieldLabelDescriptionError;
function RadioOrCheckboxWrapper(_a) {
    // console.log({ className });
    var className = _a.className, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "el-radio-or-checkbox-wrapper".concat(className ? " " + className : "") }, { children: children })) }));
}
exports.RadioOrCheckboxWrapper = RadioOrCheckboxWrapper;
function RadioOrCheckboxLabel(_a) {
    var className = _a.className, children = _a.children, htmlFor = _a.htmlFor;
    return ((0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: htmlFor, className: "el-radio-or-checkbox-label".concat(className ? " " + className : "") }, { children: children })));
}
exports.RadioOrCheckboxLabel = RadioOrCheckboxLabel;
