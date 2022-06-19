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
exports.formActionFunction = void 0;
var logic_1 = require("./logic");
var session_server_1 = require("../session.server");
var node_1 = require("@remix-run/node");
var shared_1 = require("../shared");
function formActionFunction(_a) {
    var _b, _c, _d, _e;
    var formType = _a.formType, request = _a.request, formBlueprint = _a.formBlueprint, handleDataFn = _a.handleDataFn, successRedirectPath = _a.successRedirectPath;
    return __awaiter(this, void 0, void 0, function () {
        var session, pathname, context, pathname_1, _f, _g, _h, body, honeypotFieldHit, operationType, submitType, _j, _k, _l, currentFormStep, _i, _m, formField, sessionData, contextItem, errorsInContext, formStage, _o, _p, _q, _r, _s, _t;
        var _u, _v, _w, _x, _y, _z, _0, _1;
        return __generator(this, function (_2) {
            switch (_2.label) {
                case 0: return [4 /*yield*/, (0, session_server_1.getSession)(request.headers.get("Cookie"))];
                case 1:
                    session = _2.sent();
                    console.log({ session: session });
                    pathname = new URL(request.url).pathname;
                    context = (_b = session.get("context")) !== null && _b !== void 0 ? _b : {};
                    console.log({ context: context });
                    if (!(formType === "multipart" && Object.keys(context).length < 1)) return [3 /*break*/, 3];
                    pathname_1 = new URL(request.url).pathname;
                    // console.log({ pathname });
                    console.log("No context found in session, redirecting to start");
                    _f = node_1.redirect;
                    _g = [pathname_1];
                    _u = {};
                    _v = {};
                    _h = "Set-Cookie";
                    return [4 /*yield*/, (0, session_server_1.destroySession)(session)];
                case 2: return [2 /*return*/, _f.apply(void 0, _g.concat([(_u.headers = (_v[_h] = _2.sent(),
                            _v),
                            _u)]))];
                case 3: return [4 /*yield*/, request.formData()];
                case 4:
                    body = _2.sent();
                    honeypotFieldHit = (0, logic_1.honeypotFieldHasValue)({ body: body });
                    if (honeypotFieldHit) {
                        return [2 /*return*/, (0, node_1.redirect)("/")];
                    }
                    operationType = body.get("operation-type");
                    if (!operationType) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, logic_1.handleListItemFormStructureOp)({
                            operationType: operationType,
                            formBlueprint: formBlueprint,
                            context: context,
                            session: session,
                            pathname: pathname,
                            body: body,
                        })];
                case 5: return [2 /*return*/, _2.sent()];
                case 6:
                    submitType = (_d = (_c = body.get("submit-type")) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : "";
                    if (!(formType === "multipart")) return [3 /*break*/, 8];
                    if (!(submitType === "back")) return [3 /*break*/, 8];
                    context.currentStep -= 1;
                    session.set("context", context);
                    _j = node_1.redirect;
                    _k = [pathname];
                    _w = {};
                    _x = {};
                    _l = "Set-Cookie";
                    return [4 /*yield*/, (0, session_server_1.commitSession)(session)];
                case 7: return [2 /*return*/, _j.apply(void 0, _k.concat([(_w.headers = (_x[_l] = _2.sent(),
                            _x),
                            _w)]))];
                case 8:
                    if (!(formType === "basic")) return [3 /*break*/, 10];
                    return [4 /*yield*/, (0, logic_1.addFormValuesToContext)({
                            formType: formType,
                            formBlueprint: formBlueprint,
                            body: body,
                            context: context,
                        })];
                case 9:
                    _2.sent();
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, (0, logic_1.addFormValuesToContext)({
                        formType: formType,
                        formBlueprint: formBlueprint,
                        body: body,
                        context: context,
                    })];
                case 11:
                    _2.sent();
                    _2.label = 12;
                case 12:
                    // Validate the form inputs using the validation
                    // methods from the form structure
                    if (formType === "basic") {
                        console.log("basically");
                        formBlueprint.forEach(function (formField) {
                            (0, logic_1.validateFormFieldValue)({ context: context, formField: formField });
                        });
                    }
                    if (formType === "multipart") {
                        currentFormStep = context.currentStep;
                        for (_i = 0, _m = (_e = formBlueprint[currentFormStep]) === null || _e === void 0 ? void 0 : _e.fields; _i < _m.length; _i++) {
                            formField = _m[_i];
                            // console.log({ formField });
                            (0, logic_1.validateFormFieldValue)({ context: context, formField: formField });
                        }
                    }
                    sessionData = {};
                    for (contextItem in context) {
                        // console.log({ contextItem: context[contextItem] });
                        sessionData[contextItem] = context[contextItem].value;
                    }
                    // console.log({ sessionData });
                    session.set("context", context);
                    errorsInContext = (0, logic_1.checkContextForErrors)({
                        context: context,
                        formType: formType,
                        formBlueprint: formBlueprint,
                    });
                    if (!!errorsInContext) return [3 /*break*/, 15];
                    // If there are no errors in the context we have two routes
                    // to take
                    // Basic Form
                    // Multipart Form
                    // BASIC FORM
                    if (formType === "basic") {
                        return [2 /*return*/, (0, logic_1.handleFormData)({
                                request: request,
                                handleDataFn: handleDataFn,
                                commitSession: session_server_1.commitSession,
                                context: context,
                                successRedirectPath: successRedirectPath,
                                session: session,
                            })];
                    }
                    formStage = (0, shared_1.getFormStage)({ formBlueprint: formBlueprint, context: context });
                    context.formStage = formStage;
                    if (!(formStage === "end" && submitType === "submit")) return [3 /*break*/, 13];
                    // console.log("hey guys");
                    return [2 /*return*/, (0, logic_1.handleFormData)({
                            handleDataFn: handleDataFn,
                            commitSession: session_server_1.commitSession,
                            context: context,
                            successRedirectPath: successRedirectPath,
                            session: session,
                            request: request,
                        })];
                case 13:
                    console.log("pow");
                    // console.log("whats up dawg?");
                    // Still at the beginning or middle of the form
                    // All the inputs were correct, we want to go to
                    // the next stage of the form
                    context.currentStep += 1;
                    console.log({ currentStep: context.currentStep });
                    session.set("context", context);
                    _o = node_1.redirect;
                    _p = [pathname];
                    _y = {};
                    _z = {};
                    _q = "Set-Cookie";
                    return [4 /*yield*/, (0, session_server_1.commitSession)(session)];
                case 14: return [2 /*return*/, _o.apply(void 0, _p.concat([(_y.headers = (_z[_q] = _2.sent(),
                            _z),
                            _y)]))];
                case 15:
                    console.log("you're here?");
                    _r = node_1.redirect;
                    _s = [pathname];
                    _0 = {};
                    _1 = {};
                    _t = "Set-Cookie";
                    return [4 /*yield*/, (0, session_server_1.commitSession)(session)];
                case 16: return [2 /*return*/, _r.apply(void 0, _s.concat([(_0.headers = (_1[_t] = _2.sent(),
                            _1),
                            _0)]))];
            }
        });
    });
}
exports.formActionFunction = formActionFunction;
