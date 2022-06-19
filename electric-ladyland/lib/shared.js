"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSingleQuotes = exports.fromBinary = exports.toBinary = exports.getFormStage = void 0;
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
function toBinary(string) {
    var codeUnits = new Uint16Array(string.length);
    for (var i = 0; i < codeUnits.length; i++) {
        codeUnits[i] = string.charCodeAt(i);
    }
    var charCodes = new Uint8Array(codeUnits.buffer);
    var result = "";
    for (var i = 0; i < charCodes.byteLength; i++) {
        result += String.fromCharCode(charCodes[i]);
    }
    return result;
}
exports.toBinary = toBinary;
function fromBinary(binary) {
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < bytes.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    var charCodes = new Uint16Array(bytes.buffer);
    var result = "";
    for (var i = 0; i < charCodes.length; i++) {
        result += String.fromCharCode(charCodes[i]);
    }
    return result;
}
exports.fromBinary = fromBinary;
function convertSingleQuotes(string) {
    var stringLength = string.length;
    var result = "";
    for (var i = 0; i < stringLength; i++) {
        // look for single quotes
        var stringChar = string.charCodeAt(i);
        // console.log({ stringChar });
        if (stringChar === 8216 || stringChar === 8217) {
            // console.log("We've got a runner");
            result += "'";
        }
        else {
            result += string[i];
        }
    }
    // console.log({ result });
    return result;
}
exports.convertSingleQuotes = convertSingleQuotes;
