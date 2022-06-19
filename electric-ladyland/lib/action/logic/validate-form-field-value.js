"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFormFieldValue = void 0;
var shared_1 = require("../../shared");
// Validate a form field value (context)
// using the validation patterns outlined in formField
// If an error exists, add it to the context
// errors array
function validateFormFieldValue(_a) {
    // currentStep and formStage are context properties
    // that we don't want to validate, they are also not
    // objects
    var formField = _a.formField, context = _a.context;
    // if (typeof formField !== "object") {
    //   console.log("I'm out..");
    //   return;
    // }
    if (formField.type === "hidden") {
        return;
    }
    if (formField.type === "text" ||
        formField.type === "textarea" ||
        formField.type === "email" ||
        formField.type === "password") {
        var currentFieldValue_1 = context["".concat(formField.name)].value;
        // Iterate through the validation patterns
        formField.validation.patterns.forEach(function (pattern, index) {
            var valueIsValid = validateFieldValue({
                value: currentFieldValue_1,
                regex: pattern,
            });
            // console.log("valueIsValid: ", valueIsValid);
            // Value is not valid
            // Push current error message onto array if it isn't already there
            if (!valueIsValid &&
                !context["".concat(formField.name)].errors.includes(formField.validation.messages[index])) {
                // console.log("add an error");
                context["".concat(formField.name)].errors.push(formField.validation.messages[index]);
            }
        });
    }
    if (formField.type === "stateful-radio") {
        var currentFieldValue = context["".concat(formField.name)].value;
        var dependentChildren = formField.dependentChildren;
        // Get currently selected radio option
        // Get the index of the current value
        var selectedValueIndex = formField.options.indexOf(currentFieldValue);
        if (typeof dependentChildren === "object") {
            dependentChildren[selectedValueIndex].forEach(function (dependentField) {
                if (typeof dependentField !== "undefined") {
                    validateFormFieldValue({ context: context, formField: dependentField });
                }
            });
        }
    }
}
exports.validateFormFieldValue = validateFormFieldValue;
function validateFieldValue(_a) {
    var value = _a.value, regex = _a.regex;
    var regexTestPattern = new RegExp("".concat(regex), "igm");
    value = (0, shared_1.convertSingleQuotes)(value);
    // console.log({ regexTestPattern });
    // console.log("regexTest: ", regexTestPattern.test(value));
    // console.log({ value });
    return regexTestPattern.test(value);
}
