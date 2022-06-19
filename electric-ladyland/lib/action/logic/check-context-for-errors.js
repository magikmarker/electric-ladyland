"use strict";
// Check for errors in context
// In basic, we want to check all of the context entries
// In multipart, we only want to check the context items
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkContextForErrors = void 0;
// for the current step
function checkContextForErrors(_a) {
    var _b, _c, _d, _e;
    var context = _a.context, formType = _a.formType, formBlueprint = _a.formBlueprint;
    var errorsPresent = false;
    // Basic form
    if (formType === "basic") {
        for (var fieldValue in context) {
            // @ts-ignore
            if (((_b = fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.errors) === null || _b === void 0 ? void 0 : _b.length) >= 1) {
                errorsPresent = true;
            }
            if (errorsPresent) {
                return true;
            }
        }
    }
    if (formType === "multipart") {
        var currentFormStep = context.currentStep;
        // Using the current form step, get the context fields to
        // check for errors
        // eslint-disable-next-line no-inner-declarations
        function addFieldNameToValidateToArray(field, fieldsToValidate) {
            fieldsToValidate.push(field.name);
            if (field.type === "stateful-radio") {
                var selectedIndex = field.options.indexOf(context["".concat(field.name)].value);
                field.dependentChildren[selectedIndex].forEach(function (nestedField) {
                    if (nestedField) {
                        fieldsToValidate.push(nestedField.name);
                    }
                });
            }
        }
        // We only care about the context values in the current step
        var fieldsToValidate = [];
        // @ts-ignore
        for (var _i = 0, _f = (_c = formBlueprint[currentFormStep]) === null || _c === void 0 ? void 0 : _c.fields; _i < _f.length; _i++) {
            var field = _f[_i];
            // console.log({ field });
            if (context)
                addFieldNameToValidateToArray(field, fieldsToValidate);
        }
        // console.log({ fieldsToValidate });
        for (var _g = 0, fieldsToValidate_1 = fieldsToValidate; _g < fieldsToValidate_1.length; _g++) {
            var fieldToValidate = fieldsToValidate_1[_g];
            if (((_e = (_d = context["".concat(fieldToValidate)]) === null || _d === void 0 ? void 0 : _d.errors) === null || _e === void 0 ? void 0 : _e.length) >= 1) {
                errorsPresent = true;
            }
            if (errorsPresent) {
                return true;
            }
        }
    }
    return false;
}
exports.checkContextForErrors = checkContextForErrors;
