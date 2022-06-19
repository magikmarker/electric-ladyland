"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormStage = void 0;
function getFormStage(_a) {
    var context = _a.context, formBlueprint = _a.formBlueprint;
    // What stage of the form are we in
    // Beginning - Middle - End
    var numberOfAvailableSteps = formBlueprint.length;
    var formStage = context.currentStep === 0
        ? "beginning"
        : Number(context.currentStep) + 1 === numberOfAvailableSteps
            ? "end"
            : "middle";
    return formStage;
}
exports.getFormStage = getFormStage;
