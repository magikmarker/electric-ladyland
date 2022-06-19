"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForRelevantContext = void 0;
// Check to see that the context applies to the current
// form structure. If it doesn't, return false
// Perform different validation based on the field type
// Outliers:
// - Stateful Radio
// - Checkbox Group
// Does the context apply to the current form structure?
// Yes - return the current context
// No - return an empty context object
function checkForRelevantContext(_a) {
    var basicOrMultipart = _a.basicOrMultipart, formBlueprint = _a.formBlueprint, context = _a.context;
    // No context exists
    if (!context) {
        return {};
    }
    var contextMismatch = false;
    if (basicOrMultipart === "multipart") {
        // Loop through the steps of the form structure and
        // then loop through the fields of that step
        // Each iteration of the loop will check the value of the
        // contextMatches boolean. If contextMatches is false, we
        // know we have a context mismatch and want to return an
        // empty context object to re-initate the form
        for (var _i = 0, formBlueprint_1 = formBlueprint; _i < formBlueprint_1.length; _i++) {
            var step = formBlueprint_1[_i];
            // @ts-ignore
            for (var _b = 0, _c = step === null || step === void 0 ? void 0 : step.fields; _b < _c.length; _b++) {
                var field = _c[_b];
                if (contextMismatch) {
                    console.log("The context you passed in does not match the structure of the form. Setting context to an empty object so that we can start the form again");
                    return {};
                }
                contextMismatch = checkContextForMismatch({ field: field, context: context });
            }
        }
    }
    if (basicOrMultipart === "basic") {
        for (var _d = 0, formBlueprint_2 = formBlueprint; _d < formBlueprint_2.length; _d++) {
            var field = formBlueprint_2[_d];
            if (contextMismatch) {
                return {};
            }
            contextMismatch = checkContextForMismatch({ field: field, context: context });
        }
    }
    return context;
}
exports.checkForRelevantContext = checkForRelevantContext;
function checkContextForMismatch(_a) {
    var field = _a.field, context = _a.context;
    // Checkbox groups should be ignored, because their value
    // may or may not exist. A selected checkbox will show up
    // in a form post, an unselected checkbox will not
    if (field.type === "checkbox-group") {
        return false;
    }
    var contextFieldName = context["".concat(field.name)];
    if (typeof (contextFieldName === null || contextFieldName === void 0 ? void 0 : contextFieldName.value) !== "string" &&
        typeof (contextFieldName === null || contextFieldName === void 0 ? void 0 : contextFieldName.value) !== "object") {
        console.log("bad value: ", contextFieldName.value);
        return true;
    }
    // Stateful radios are also special in that in addition to
    // their value, they can have nested children
    if (field.type === "stateful-radio") {
        field.dependentChildren.forEach(function (fields) {
            fields.forEach(function (nestedField) {
                if (nestedField) {
                    checkContextForMismatch({ field: nestedField, context: context });
                }
            });
        });
    }
    return false;
}
