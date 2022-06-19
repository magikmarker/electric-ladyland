"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormField = exports.onChange = exports.createFieldLabel = void 0;
var react_1 = require("react");
var shared_1 = require("../../shared");
function createFieldLabel(fieldName) {
    var words = fieldName.split("-");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
exports.createFieldLabel = createFieldLabel;
function onChange(_a) {
    var _this = this;
    var e = _a.e, fieldValidation = _a.fieldValidation, setFieldErrors = _a.setFieldErrors, fieldErrors = _a.fieldErrors;
    fieldValidation.patterns.forEach(function (pattern, index) { return __awaiter(_this, void 0, void 0, function () {
        var regexTestPattern, value, fieldIsValid;
        var _a;
        return __generator(this, function (_b) {
            regexTestPattern = new RegExp(pattern, "gim");
            value = (0, shared_1.convertSingleQuotes)((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.value);
            fieldIsValid = regexTestPattern.test(value);
            if (fieldIsValid) {
                setFieldErrors([]);
            }
            else if (!fieldErrors.includes(fieldValidation.messages[index])) {
                // console.log("not valid");
                // Only display the error message once
                setFieldErrors(__spreadArray(__spreadArray([], fieldErrors, true), [fieldValidation.messages[index]], false));
            }
            return [2 /*return*/];
        });
    }); });
}
exports.onChange = onChange;
function useFormField(_a) {
    var _b, _c;
    var fieldBlueprint = _a.fieldBlueprint, fieldContext = _a.fieldContext;
    // Determine if the field has errors or has been visited
    var errors = [];
    var visited = false;
    if (fieldBlueprint.type === "email" ||
        fieldBlueprint.type === "password" ||
        fieldBlueprint.type === "text" ||
        fieldBlueprint.type === "textarea") {
        if (fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.errors) {
            errors = fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.errors;
            if ((fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.errors.length) >= 1)
                visited = true;
        }
    }
    var _d = (0, react_1.useState)(errors), fieldErrors = _d[0], setFieldErrors = _d[1];
    var _e = (0, react_1.useState)(visited), fieldVisited = _e[0], setFieldVisited = _e[1];
    // Check to see whether a value for the field exists in the context
    // If it does, set the value to the context value
    // If it doesn't, set the value to the initial value
    var initialValue = (_b = fieldBlueprint.initialValue) !== null && _b !== void 0 ? _b : "";
    var defaultValue = (_c = fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.value) !== null && _c !== void 0 ? _c : initialValue;
    return {
        fieldErrors: fieldErrors,
        fieldVisited: fieldVisited,
        setFieldErrors: setFieldErrors,
        setFieldVisited: setFieldVisited,
        defaultValue: defaultValue,
    };
}
exports.useFormField = useFormField;
