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
Object.defineProperty(exports, "__esModule", { value: true });
exports.formLoaderFunction = void 0;
var session_server_1 = require("../session.server");
var node_1 = require("@remix-run/node");
var logic_1 = require("./logic");
function formLoaderFunction(_a) {
    var _b, _c, _d, _e;
    var basicOrMultipart = _a.basicOrMultipart, request = _a.request, formBlueprint = _a.formBlueprint;
    return __awaiter(this, void 0, void 0, function () {
        var session, context, formStage, _f, _g, _h;
        var _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0: return [4 /*yield*/, (0, session_server_1.getSession)(request.headers.get("Cookie"))];
                case 1:
                    session = _l.sent();
                    context = session.get("context");
                    // Check to see if the current context matches the current
                    // form structure. If it doesn't match, there is a good chance
                    // that there is no context or we are coming from a different form
                    if (basicOrMultipart === "basic") {
                        context = (0, logic_1.checkForRelevantContext)({
                            formBlueprint: formBlueprint,
                            basicOrMultipart: basicOrMultipart,
                            context: context,
                        });
                    }
                    else {
                        context = (0, logic_1.checkForRelevantContext)({
                            formBlueprint: formBlueprint,
                            basicOrMultipart: basicOrMultipart,
                            context: context,
                        });
                    }
                    // If the context object doesn't have any length, we
                    // know that it is empty and we need to seed it
                    if (Object.keys(context).length < 1) {
                        if (basicOrMultipart === "basic") {
                            context = (0, logic_1.seedContextWithInitialValues)({
                                formBlueprint: formBlueprint,
                                basicOrMultipart: basicOrMultipart,
                            });
                        }
                        else {
                            context = (0, logic_1.seedContextWithInitialValues)({
                                formBlueprint: formBlueprint,
                                basicOrMultipart: basicOrMultipart,
                            });
                        }
                    }
                    // Get the current step
                    context.currentStep = (_b = context === null || context === void 0 ? void 0 : context.currentStep) !== null && _b !== void 0 ? _b : 0;
                    // We should never have a negative number
                    // for the current step
                    if (context.currentStep < 0) {
                        context.currentStep = 0;
                    }
                    if (!(basicOrMultipart === "multipart")) return [3 /*break*/, 4];
                    formStage = (0, logic_1.getFormStage)({ context: context, formBlueprint: formBlueprint });
                    if (!(context.currentStep > 0 && Object.keys(context).length < 1)) return [3 /*break*/, 3];
                    console.log("You shouldn't be here");
                    _f = node_1.json;
                    _g = [{}];
                    _j = {};
                    _k = {};
                    _h = "Set-Cookie";
                    return [4 /*yield*/, (0, session_server_1.destroySession)(session)];
                case 2: return [2 /*return*/, _f.apply(void 0, _g.concat([(_j.headers = (_k[_h] = _l.sent(),
                            _k),
                            _j)]))];
                case 3:
                    context.formStage = formStage;
                    // @ts-ignore
                    context.nextButtonText = (_c = formBlueprint[context.currentStep]) === null || _c === void 0 ? void 0 : _c.nextButtonText;
                    // @ts-ignore
                    context.backButtonText = (_d = formBlueprint[context.currentStep]) === null || _d === void 0 ? void 0 : _d.backButtonText;
                    _l.label = 4;
                case 4:
                    session.set("context", context);
                    if (basicOrMultipart === "multipart") {
                        // console.log({ currentStep: context?.currentStep });
                        return [2 /*return*/, {
                                context: context,
                                currentStepBlueprint: (_e = formBlueprint[context.currentStep]) === null || _e === void 0 ? void 0 : _e.fields,
                                commitSession: session_server_1.commitSession,
                                session: session,
                            }];
                    }
                    else {
                        return [2 /*return*/, {
                                context: context,
                                currentStepBlueprint: formBlueprint,
                                commitSession: session_server_1.commitSession,
                                session: session,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.formLoaderFunction = formLoaderFunction;
