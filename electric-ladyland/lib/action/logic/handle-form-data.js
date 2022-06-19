"use strict";
// Takes in the data (context), success redirect path, and
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
exports.handleFormData = void 0;
var node_1 = require("@remix-run/node");
// session and commitSession function
function handleFormData(_a) {
    var handleDataFn = _a.handleDataFn, context = _a.context, successRedirectPath = _a.successRedirectPath, session = _a.session, commitSession = _a.commitSession, request = _a.request;
    return __awaiter(this, void 0, void 0, function () {
        var handleDataResult, success, message, _b, _c, _d, _e, _f, _g;
        var _h, _j, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0: return [4 /*yield*/, handleDataFn(context, request)];
                case 1:
                    handleDataResult = _m.sent();
                    success = handleDataResult[0], message = handleDataResult[1];
                    if (!success) return [3 /*break*/, 3];
                    context.dataHandlerSuccessMessage = message;
                    context.dataHandlerErrorMessage = "";
                    session.set("context", context);
                    _b = node_1.redirect;
                    _c = [successRedirectPath];
                    _h = {};
                    _j = {};
                    _d = "Set-Cookie";
                    return [4 /*yield*/, commitSession(session)];
                case 2: return [2 /*return*/, _b.apply(void 0, _c.concat([(_h.headers = (_j[_d] = _m.sent(),
                            _j),
                            _h)]))];
                case 3:
                    context.dataHandlerSuccessMessage = "";
                    context.dataHandlerErrorMessage = message;
                    session.set("context", context);
                    _e = node_1.json;
                    _f = [{}];
                    _k = {};
                    _l = {};
                    _g = "Set-Cookie";
                    return [4 /*yield*/, commitSession(session)];
                case 4: return [2 /*return*/, _e.apply(void 0, _f.concat([(_k.headers = (_l[_g] = _m.sent(),
                            _l),
                            _k)]))];
            }
        });
    });
}
exports.handleFormData = handleFormData;
