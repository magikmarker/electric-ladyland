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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formFieldStyles = exports.FormField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var hidden_1 = require("./components/hidden");
var text_input_1 = require("./components/text-input");
var radio_1 = require("./components/radio");
var checkbox_group_1 = require("./components/checkbox-group");
var expandable_list_1 = require("./components/expandable-list");
var stateful_radio_1 = require("./components/stateful-radio");
// @ts-expect-error Way of the road bubs
var styles_css_1 = __importDefault(require("./styles.css"));
exports.formFieldStyles = styles_css_1.default;
FormField.styles = styles_css_1.default;
function FormField(_a) {
    var field = _a.field, context = _a.context;
    if (field.type === "hidden") {
        return ((0, jsx_runtime_1.jsx)(hidden_1.HiddenField, { fieldContext: context[field.name], fieldBlueprint: field }));
    }
    if (field.type === "text" ||
        field.type === "textarea" ||
        field.type === "password" ||
        field.type === "email") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-item" }, { children: (0, jsx_runtime_1.jsx)(text_input_1.TextInput, { fieldBlueprint: field, fieldContext: context[field.name] }) })));
    }
    if (field.type === "radio") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-item" }, { children: (0, jsx_runtime_1.jsx)(radio_1.Radio, { fieldBlueprint: field, fieldContext: context[field.name] }) })));
    }
    if (field.type === "checkbox-group") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-item" }, { children: (0, jsx_runtime_1.jsx)(checkbox_group_1.CheckboxGroup, { fieldBlueprint: field, context: context }) })));
    }
    if (field.type === "expandable-list") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-item" }, { children: (0, jsx_runtime_1.jsx)(expandable_list_1.ExpandableList, { fieldBlueprint: field, fieldContext: context[field.name] }) })));
    }
    if (field.type === "stateful-radio") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "el-field-item" }, { children: (0, jsx_runtime_1.jsx)(stateful_radio_1.StatefulRadio, { fieldBlueprint: field, context: context }) })));
    }
    return null;
}
exports.FormField = FormField;
