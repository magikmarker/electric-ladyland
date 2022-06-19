"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedContextWithInitialValues = void 0;
function seedContextWithInitialValues(_a) {
    var basicOrMultipart = _a.basicOrMultipart, formBlueprint = _a.formBlueprint;
    // Give the context object initial values
    var context = {};
    if (basicOrMultipart === "multipart") {
        for (var _i = 0, formBlueprint_1 = formBlueprint; _i < formBlueprint_1.length; _i++) {
            var step = formBlueprint_1[_i];
            // console.log({ step });
            // @ts-ignore
            for (var _b = 0, _c = step === null || step === void 0 ? void 0 : step.fields; _b < _c.length; _b++) {
                var field = _c[_b];
                // console.log({ field });
                if (field) {
                    addFieldToContext({ field: field, context: context });
                }
            }
        }
        context.currentStep = 0;
    }
    if (basicOrMultipart === "basic") {
        for (var _d = 0, formBlueprint_2 = formBlueprint; _d < formBlueprint_2.length; _d++) {
            var nestedField = formBlueprint_2[_d];
            if (typeof nestedField === "object") {
                // @ts-ignore
                addFieldToContext({ field: nestedField, context: context });
            }
        }
    }
    return context;
}
exports.seedContextWithInitialValues = seedContextWithInitialValues;
function addFieldToContext(_a) {
    var field = _a.field, context = _a.context;
    if (field.type !== "checkbox-group" && field.type !== "expandable-list") {
        context["".concat(field.name)] = {
            value: field.initialValue || "",
            errors: [],
        };
    }
    else if (field.type === "checkbox-group") {
        field.checkboxes.forEach(function (checkbox) {
            if (checkbox.initialValue) {
                context["".concat(field.name)] = {
                    // @ts-expect-error silly typescript
                    value: field.initialValue || "",
                    errors: [],
                };
            }
        });
    }
    else if (field.type === "expandable-list") {
        context["".concat(field.name)] = {
            value: field.initialValue || [],
            errors: [],
        };
    }
    // console.log("adding field context: ", context);
    if (field.type === "stateful-radio") {
        field.dependentChildren.forEach(function (fields) {
            fields.forEach(function (nestedField) {
                if (typeof nestedField !== "undefined") {
                    addFieldToContext({ field: nestedField, context: context });
                }
            });
        });
    }
}
