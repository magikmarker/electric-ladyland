"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFormValuesToContext = void 0;
// Take the form values from the request
// form data and add them to context
function addFormValuesToContext(_a) {
    var _b;
    var formType = _a.formType, formBlueprint = _a.formBlueprint, body = _a.body, context = _a.context;
    // Get the inputs from the form
    function addFieldToContext(field) {
        var _a, _b, _c;
        // Get the form field value
        var formFieldValue;
        if (field.type === "email" ||
            field.type === "password" ||
            field.type === "text" ||
            field.type === "textarea" ||
            field.type === "radio" ||
            field.type === "hidden" ||
            field.type === "stateful-radio") {
            formFieldValue =
                (_b = (_a = body.get("".concat(field.name))) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : field.initialValue;
        }
        if (field.type === "checkbox") {
            var checkboxValue = (_c = body.get("".concat(field.name))) === null || _c === void 0 ? void 0 : _c.toString();
            // If there is no value, the checkbox was never checked, so
            // we want to return early
            // console.log({ checkboxValue });
            if (!checkboxValue) {
                return;
            }
            formFieldValue = checkboxValue;
        }
        var errors = [];
        // If a field is required and not present, we need to add an error
        // to the field
        if (field.type === "text" ||
            field.type === "textarea" ||
            field.type === "email" ||
            field.type === "password") {
            if (!formFieldValue && field.required) {
                errors.push("This field is required");
            }
        }
        if (typeof field === "object") {
            // console.log({ formFieldValue, fieldName: field.name });
            // Add the field to context
            if (formFieldValue) {
                context["".concat(field.name)] = {
                    value: formFieldValue,
                    errors: errors,
                };
            }
        }
        // If it is a stateful radio field, check for
        // dependent children
        if (field.type === "stateful-radio") {
            // Get the index of the selected value
            // We need this to know which children to show
            field.dependentChildren.forEach(function (fields) {
                if (typeof fields !== "undefined") {
                    fields.forEach(function (nestedField) {
                        if (nestedField) {
                            addFieldToContext(nestedField);
                        }
                    });
                }
            });
        }
        if (field.type === "checkbox-group") {
            field.checkboxes.forEach(function (checkbox) {
                // Get rid of checkbox values that might
                // exist from a previous pass
                delete context["".concat(checkbox.name)];
                // console.log({ contextAfterDelete: context });
                addFieldToContext(checkbox);
                console.log("hi neighbors");
            });
        }
    }
    // Use the form structure to create a context object
    if (formType === "basic") {
        formBlueprint.forEach(function (field) {
            addFieldToContext(field);
        });
    }
    if (formType === "multipart") {
        // Get the current form step to know what to add to context
        var currentFormStep = context.currentStep;
        // console.log({ currentFormStep, formBlueprint, context });
        // console.log("lol: ", typeof formBlueprint[currentFormStep]);
        // @ts-ignore
        for (var _i = 0, _c = (_b = formBlueprint[currentFormStep]) === null || _b === void 0 ? void 0 : _b.fields; _i < _c.length; _i++) {
            var field = _c[_i];
            if (field) {
                addFieldToContext(field);
            }
        }
    }
    // console.log({ context });
}
exports.addFormValuesToContext = addFormValuesToContext;
