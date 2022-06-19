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
exports.BasicForm = exports.MultipartForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@remix-run/react");
var form_field_1 = require("./form-field");
var interactive_1 = require("~/components/interactive");
var fa_1 = require("react-icons/fa");
function MultipartForm(_a) {
    var context = _a.context, formStructure = _a.formStructure, action = _a.action, _b = _a.reloadDocument, reloadDocument = _b === void 0 ? false : _b;
    console.log({ formStructure: formStructure });
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "el-form-wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(FormWrapper, __assign({ reloadDocument: reloadDocument, action: action }, { children: [(0, jsx_runtime_1.jsx)(HoneypotField, {}), formStructure.map(function (field) {
                        return (0, jsx_runtime_1.jsx)(form_field_1.FormField, { field: field, context: context }, field.name);
                    }), context.dataHandlerErrorMessage && context.formStage === "end" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "font-display text-lg font-semibold text-danger-5" }, { children: context.dataHandlerErrorMessage })), (0, jsx_runtime_1.jsx)("span", { className: "block h-6" })] })) : null, (0, jsx_runtime_1.jsxs)("div", __assign({ className: "forward-button-wrapper mt-10 flex w-full" }, { children: [(context.formStage === "beginning" ||
                                context.formStage === "middle") && ((0, jsx_runtime_1.jsxs)(FormButton, __assign({ dataTest: "next", className: "el-form-button-forward", name: "submit-type", type: "submit", value: "next" }, { children: [context.nextButtonText, (0, jsx_runtime_1.jsx)("span", __assign({ className: "el-form-right-icon" }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaChevronRight, { "aria-hidden": "true" }) }))] }))), context.formStage === "end" && ((0, jsx_runtime_1.jsxs)(FormButton, __assign({ dataTest: "submit", className: "el-form-button-forward", name: "submit-type", type: "submit", value: "submit" }, { children: ["Submit", (0, jsx_runtime_1.jsx)("span", __assign({ className: "el-form-right-icon" }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaChevronRight, { "aria-hidden": "true" }) }))] })))] }))] })), (context.formStage === "middle" || context.formStage === "end") && ((0, jsx_runtime_1.jsx)(react_1.Form, __assign({ method: "post" }, { children: (0, jsx_runtime_1.jsxs)(FormButton, __assign({ dataTest: "back", className: "el-form-button-back", name: "submit-type", type: "submit", value: "back" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "el-form-left-icon" }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaChevronLeft, { "aria-hidden": "true" }) })), context.backButtonText] })) })))] })));
}
exports.MultipartForm = MultipartForm;
function BasicForm(_a) {
    var context = _a.context, formStructure = _a.formStructure, action = _a.action, submitText = _a.submitText, _b = _a.reloadDocument, reloadDocument = _b === void 0 ? false : _b;
    return ((0, jsx_runtime_1.jsxs)(FormWrapper, __assign({ reloadDocument: reloadDocument, action: action }, { children: [(0, jsx_runtime_1.jsx)(HoneypotField, {}), formStructure.map(function (field) {
                return (0, jsx_runtime_1.jsx)(form_field_1.FormField, { field: field, context: context }, field.name);
            }), context.dataHandlerErrorMessage && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "font-display text-lg font-semibold text-danger-5" }, { children: context.dataHandlerErrorMessage })), (0, jsx_runtime_1.jsx)("span", { className: "block h-6" })] })), (0, jsx_runtime_1.jsx)("span", { className: "block h-0.5" }), submitText ? ((0, jsx_runtime_1.jsx)(SubmitButton, { children: submitText })) : ((0, jsx_runtime_1.jsx)(SubmitButton, { children: "Submit" }))] })));
}
exports.BasicForm = BasicForm;
function SubmitButton(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(interactive_1.Button, __assign({ dataTest: "submit", elevation: "sm", variant: "none", className: "!mt-8 !w-fit bg-primary-5 text-white", type: "submit" }, { children: children })));
}
function FormWrapper(_a) {
    var children = _a.children, action = _a.action, _b = _a.reloadDocument, reloadDocument = _b === void 0 ? false : _b;
    if (reloadDocument) {
        return ((0, jsx_runtime_1.jsx)(react_1.Form, __assign({ reloadDocument: true, action: action, method: "post" }, { children: children })));
    }
    return ((0, jsx_runtime_1.jsx)(react_1.Form, __assign({ action: action, method: "post" }, { children: children })));
}
function HoneypotField() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { className: "visually-hidden", type: "text", name: "given-name", id: "given-name" }), (0, jsx_runtime_1.jsx)("label", __assign({ className: "visually-hidden", htmlFor: "given-name" }, { children: "Given Name" }))] }));
}
function FormButton(_a) {
    var children = _a.children, name = _a.name, className = _a.className, value = _a.value, _b = _a.type, type = _b === void 0 ? "submit" : _b, dataTest = _a.dataTest;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ "data-test": dataTest, className: "el-form-button".concat(className ? " " + className : ""), name: name, type: type, value: value }, { children: children })));
}
