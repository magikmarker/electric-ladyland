var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/markjensen/Code/jds-client-projects/2022/remixed-form/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: {
      fontFamily: `'-apple-system', 'Segoe UI', 'Helvetica Neue',
    'Helvetica', 'Roboto', 'Arial', 'sans-serif', 'system-ui', 'Apple Color Emoji',
    'Segoe UI Emoji'`,
      lineHeight: "1.4"
    }
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/markjensen/Code/jds-client-projects/2022/remixed-form/app/routes/multi-item-form.tsx
var multi_item_form_exports = {};
__export(multi_item_form_exports, {
  action: () => action,
  default: () => MultiItemForm,
  loader: () => loader,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");

// app/forms/multi-item-form.ts
var notImportantStep = {
  fields: [
    {
      name: "not-important",
      label: "Not Important",
      type: "text",
      required: true,
      initialValue: "Anything here",
      validation: {
        patterns: ["^[\\w\\s-&']{2,50}$"],
        messages: ["letters, spaces, & or '"]
      }
    }
  ],
  nextButtonText: "Todo List"
};
var todoStep = {
  fields: [
    {
      name: "todo-items-list",
      type: "expandable-list",
      listLabel: "Todo Items",
      addItemLabel: "Add Item",
      editItemLabel: "Edit Item",
      addOrEditItemModalLabel: "Add or Edit Item",
      initialValue: [],
      listItemStructure: [
        {
          name: "todo-title",
          label: "Part #",
          type: "text",
          required: true,
          initialValue: "",
          validation: {
            patterns: ["^[\\w\\s-&']{2,50}$"],
            messages: ["letters, spaces, & or '"]
          },
          showOnMobileTable: true,
          tableFlex: 3,
          alignText: "left"
        },
        {
          name: "todo-description",
          label: "Description",
          description: "Short (less than 30 characters) description of todo item",
          type: "text",
          required: true,
          initialValue: "",
          validation: {
            patterns: ["^[\\w\\s-&']{2,30}$"],
            messages: ["letters, spaces, & or '"]
          },
          showOnMobileTable: true,
          tableFlex: 3,
          alignText: "left"
        },
        {
          name: "priority",
          label: "Source",
          type: "radio",
          options: ["High", "Medium", "Low"],
          initialValue: "High"
        }
      ]
    }
  ],
  backButtonText: "Not Important",
  nextButtonText: "Less Important"
};
var lessImportantStep = {
  fields: [
    {
      name: "less-important",
      label: "Less Important",
      type: "text",
      required: true,
      initialValue: "Less important thing",
      validation: {
        patterns: ["^[\\w\\s-&']{2,50}$"],
        messages: ["letters, spaces, & or '"]
      }
    }
  ],
  backButtonText: "Todo List",
  nextButtonText: "Submit"
};
var multiItemStepForm = [
  notImportantStep,
  todoStep,
  lessImportantStep
];

// app/services/form/action-utils.ts
var import_node2 = require("@remix-run/node");

// app/services/form/shared.ts
function getFormStage({
  context,
  formBlueprint
}) {
  const numberOfAvailableSteps = formBlueprint.length;
  let formStage = context.currentStep === 0 ? "beginning" : Number(context.currentStep) + 1 === numberOfAvailableSteps ? "end" : "middle";
  return formStage;
}
function convertSingleQuotes(string) {
  let stringLength = string.length;
  let result = "";
  for (let i = 0; i < stringLength; i++) {
    let stringChar = string.charCodeAt(i);
    if (stringChar === 8216 || stringChar === 8217) {
      result += "'";
    } else {
      result += string[i];
    }
  }
  return result;
}

// app/services/form/session.server.ts
var import_node = require("@remix-run/node");
var { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__new_call",
    maxAge: 30,
    secure: false,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.FORM_SESSION_SECRET ?? "S3cr3tS3cr3ts"]
  }
});

// app/services/form/action-utils.ts
function honeypotFieldHasValue({ body }) {
  let honeypotField = body.get("given-name");
  if (honeypotField) {
    return true;
  }
  return false;
}
function addFormValuesToContext({
  formType,
  formBlueprint,
  body,
  context
}) {
  var _a;
  function addFieldToContext2(field) {
    var _a2, _b;
    let formFieldValue;
    if (field.type === "email" || field.type === "password" || field.type === "text" || field.type === "textarea" || field.type === "radio" || field.type === "hidden" || field.type === "stateful-radio") {
      formFieldValue = ((_a2 = body.get(`${field.name}`)) == null ? void 0 : _a2.toString()) ?? field.initialValue;
    }
    if (field.type === "checkbox") {
      let checkboxValue = (_b = body.get(`${field.name}`)) == null ? void 0 : _b.toString();
      if (!checkboxValue) {
        return;
      }
      formFieldValue = checkboxValue;
    }
    let errors = [];
    if (field.type === "text" || field.type === "textarea" || field.type === "email" || field.type === "password") {
      if (!formFieldValue && field.required) {
        errors.push("This field is required");
      }
    }
    if (typeof field === "object") {
      if (formFieldValue) {
        context[`${field.name}`] = {
          value: formFieldValue,
          errors
        };
      }
    }
    if (field.type === "stateful-radio") {
      field.dependentChildren.forEach((fields) => {
        if (typeof fields !== "undefined") {
          fields.forEach((nestedField) => {
            if (nestedField) {
              addFieldToContext2(nestedField);
            }
          });
        }
      });
    }
    if (field.type === "checkbox-group") {
      field.checkboxes.forEach((checkbox) => {
        delete context[`${checkbox.name}`];
        addFieldToContext2(checkbox);
      });
    }
  }
  if (formType === "basic") {
    formBlueprint.forEach((field) => {
      addFieldToContext2(field);
    });
  }
  if (formType === "multipart") {
    const currentFormStep = context.currentStep;
    for (const field of (_a = formBlueprint[currentFormStep]) == null ? void 0 : _a.fields) {
      if (field) {
        addFieldToContext2(field);
      }
    }
  }
}
function validateFieldValue({
  value,
  regex
}) {
  let regexTestPattern = new RegExp(`${regex}`, "igm");
  value = convertSingleQuotes(value);
  return regexTestPattern.test(value);
}
function validateFormFieldValue({
  formField,
  context
}) {
  if (formField.type === "hidden") {
    return;
  }
  if (formField.type === "text" || formField.type === "textarea" || formField.type === "email" || formField.type === "password") {
    let currentFieldValue = context[`${formField.name}`].value;
    formField.validation.patterns.forEach((pattern, index) => {
      const valueIsValid = validateFieldValue({
        value: currentFieldValue,
        regex: pattern
      });
      if (!valueIsValid && !context[`${formField.name}`].errors.includes(formField.validation.messages[index])) {
        context[`${formField.name}`].errors.push(formField.validation.messages[index]);
      }
    });
  }
  if (formField.type === "stateful-radio") {
    let currentFieldValue = context[`${formField.name}`].value;
    let { dependentChildren } = formField;
    const selectedValueIndex = formField.options.indexOf(currentFieldValue);
    if (typeof dependentChildren === "object") {
      dependentChildren[selectedValueIndex].forEach((dependentField) => {
        if (typeof dependentField !== "undefined") {
          validateFormFieldValue({ context, formField: dependentField });
        }
      });
    }
  }
}
function checkContextForErrors({
  context,
  formType,
  formBlueprint
}) {
  var _a, _b, _c, _d;
  let errorsPresent = false;
  if (formType === "basic") {
    for (const fieldValue in context) {
      if (((_a = fieldValue == null ? void 0 : fieldValue.errors) == null ? void 0 : _a.length) >= 1) {
        errorsPresent = true;
      }
      if (errorsPresent) {
        return true;
      }
    }
  }
  if (formType === "multipart") {
    let addFieldNameToValidateToArray = function(field, fieldsToValidate2) {
      fieldsToValidate2.push(field.name);
      if (field.type === "stateful-radio") {
        let selectedIndex = field.options.indexOf(context[`${field.name}`].value);
        field.dependentChildren[selectedIndex].forEach((nestedField) => {
          if (nestedField) {
            fieldsToValidate2.push(nestedField.name);
          }
        });
      }
    };
    const currentFormStep = context.currentStep;
    let fieldsToValidate = [];
    for (const field of (_b = formBlueprint[currentFormStep]) == null ? void 0 : _b.fields) {
      if (context)
        addFieldNameToValidateToArray(field, fieldsToValidate);
    }
    for (const fieldToValidate of fieldsToValidate) {
      if (((_d = (_c = context[`${fieldToValidate}`]) == null ? void 0 : _c.errors) == null ? void 0 : _d.length) >= 1) {
        errorsPresent = true;
      }
      if (errorsPresent) {
        return true;
      }
    }
  }
  return false;
}
async function handleFormData({
  handleDataFn,
  context,
  successRedirectPath,
  session,
  commitSession: commitSession2,
  request
}) {
  let handleDataResult = await handleDataFn(context, request);
  let [success, message] = handleDataResult;
  if (success) {
    context.dataHandlerSuccessMessage = message;
    context.dataHandlerErrorMessage = "";
    session.set("context", context);
    return (0, import_node2.redirect)(successRedirectPath, {
      headers: {
        "Set-Cookie": await commitSession2(session)
      }
    });
  } else {
    context.dataHandlerSuccessMessage = "";
    context.dataHandlerErrorMessage = message;
    session.set("context", context);
    return (0, import_node2.json)({}, {
      headers: {
        "Set-Cookie": await commitSession2(session)
      }
    });
  }
}
async function handleListItemFormStructureOp({
  operationType,
  formBlueprint,
  context,
  session,
  pathname,
  body
}) {
  var _a, _b;
  let expandableList = (_a = formBlueprint[context == null ? void 0 : context.currentStep]) == null ? void 0 : _a.fields.find((item) => {
    return item.type === "expandable-list";
  });
  let expandableListArr = ((_b = context == null ? void 0 : context[expandableList.name]) == null ? void 0 : _b.value) ?? [];
  if (operationType === "add-item-to-list") {
    let listItemObject = {};
    expandableList.listItemStructure.forEach((field) => {
      listItemObject[field.name] = {
        value: body.get(field.name),
        errors: []
      };
    });
    expandableListArr.push(listItemObject);
  } else if (operationType === "edit-list-item") {
    let indexToChange = body.get("index-to-change");
    expandableList.listItemStructure.forEach((field) => {
      expandableListArr[Number(indexToChange)][field.name] = {
        value: body.get(field.name),
        errors: []
      };
    });
  } else if (operationType === "delete-list-item") {
    let indexToDelete = body.get("index-to-delete");
    expandableListArr.splice(Number(indexToDelete), 1);
  }
  session.set("context", __spreadProps(__spreadValues({}, context), {
    [expandableList.name]: {
      value: expandableListArr,
      errors: []
    }
  }));
  return (0, import_node2.redirect)(pathname, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/services/form/action-function.ts
var import_node3 = require("@remix-run/node");
async function formActionFunction({
  formType,
  request,
  formBlueprint,
  handleDataFn,
  successRedirectPath
}) {
  var _a, _b;
  const session = await getSession(request.headers.get("Cookie"));
  console.log({ session });
  let { pathname } = new URL(request.url);
  let context = session.get("context") ?? {};
  console.log({ context });
  if (formType === "multipart" && Object.keys(context).length < 1) {
    let { pathname: pathname2 } = new URL(request.url);
    console.log("No context found in session, redirecting to start");
    return (0, import_node3.redirect)(pathname2, {
      headers: {
        "Set-Cookie": await destroySession(session)
      }
    });
  }
  const body = await request.formData();
  let honeypotFieldHit = honeypotFieldHasValue({ body });
  if (honeypotFieldHit) {
    return (0, import_node3.redirect)("/");
  }
  const operationType = body.get("operation-type");
  if (operationType) {
    return await handleListItemFormStructureOp({
      operationType,
      formBlueprint,
      context,
      session,
      pathname,
      body
    });
  }
  let submitType = ((_a = body.get("submit-type")) == null ? void 0 : _a.toString()) ?? "";
  if (formType === "multipart") {
    if (submitType === "back") {
      context.currentStep -= 1;
      session.set("context", context);
      return (0, import_node3.redirect)(pathname, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
  }
  await addFormValuesToContext({
    formType,
    formBlueprint,
    body,
    context
  });
  if (formType === "basic") {
    console.log("basically");
    formBlueprint.forEach((formField) => {
      validateFormFieldValue({ context, formField });
    });
  }
  if (formType === "multipart") {
    const currentFormStep = context.currentStep;
    for (const formField of (_b = formBlueprint[currentFormStep]) == null ? void 0 : _b.fields) {
      validateFormFieldValue({ context, formField });
    }
  }
  let sessionData = {};
  for (const contextItem in context) {
    sessionData[contextItem] = context[contextItem].value;
  }
  session.set("context", context);
  let errorsInContext = checkContextForErrors({
    context,
    formType,
    formBlueprint
  });
  if (!errorsInContext) {
    if (formType === "basic") {
      return handleFormData({
        request,
        handleDataFn,
        commitSession,
        context,
        successRedirectPath,
        session
      });
    }
    const formStage = getFormStage({ formBlueprint, context });
    context.formStage = formStage;
    if (formStage === "end" && submitType === "submit") {
      return handleFormData({
        handleDataFn,
        commitSession,
        context,
        successRedirectPath,
        session,
        request
      });
    } else {
      console.log("pow");
      context.currentStep += 1;
      console.log({ currentStep: context.currentStep });
      session.set("context", context);
      return (0, import_node3.redirect)(pathname, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
  }
  console.log("you're here?");
  return (0, import_node3.redirect)(pathname, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/services/form/form-types.tsx
var import_react5 = require("@remix-run/react");

// app/services/form/form-field.tsx
var import_react3 = require("react");
var import_dialog = require("@reach/dialog");
var import_react4 = require("@remix-run/react");
var import_fi = require("react-icons/fi");
function createFieldLabel(fieldName) {
  let words = fieldName.split("-");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
function displayFieldErrors({
  fieldErrors,
  fieldVisited
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-1"
  }, fieldErrors.length >= 1 && fieldVisited ? fieldErrors.map((fieldError) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "text-danger-6 font-medium mm:text-lg",
      key: fieldError
    }, fieldError);
  }) : null);
}
function FormField({
  field,
  context
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let errors = [];
  let visited = false;
  if (field.type === "email" || field.type === "password" || field.type === "text" || field.type === "textarea") {
    if ((_a = context[`${field.name}`]) == null ? void 0 : _a.errors) {
      errors = (_b = context[`${field.name}`]) == null ? void 0 : _b.errors;
      if (((_c = context[`${field.name}`]) == null ? void 0 : _c.errors.length) >= 1)
        visited = true;
    }
  }
  let [fieldErrors, setFieldErrors] = (0, import_react3.useState)(errors);
  let [fieldVisited, setFieldVisited] = (0, import_react3.useState)(visited);
  function onChange(e) {
    if (field.type === "text" || field.type === "textarea" || field.type === "email" || field.type === "password") {
      field.validation.patterns.forEach(async (pattern, index) => {
        let regexTestPattern = new RegExp(pattern, "gim");
        let value = convertSingleQuotes(e.target.value);
        let fieldIsValid = regexTestPattern.test(value);
        if (fieldIsValid) {
          setFieldErrors([]);
        } else if (!fieldErrors.includes(field.validation.messages[index])) {
          setFieldErrors([...fieldErrors, field.validation.messages[index]]);
        }
      });
    }
  }
  if (field.type === "hidden") {
    let value = field.initialValue;
    if (context[`${field.name}`]) {
      value = (_d = context[`${field.name}`]) == null ? void 0 : _d.value;
    }
    return /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: field.name,
      value
    });
  }
  if (field.type === "text") {
    let defaultValue = field.initialValue;
    if (context[`${field.name}`]) {
      defaultValue = (_e = context[`${field.name}`]) == null ? void 0 : _e.value;
    }
    return /* @__PURE__ */ React.createElement("label", {
      className: "block mb-12",
      key: field.name
    }, /* @__PURE__ */ React.createElement(FieldLabel, null, field.label), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), displayFieldErrors({ fieldErrors, fieldVisited }), /* @__PURE__ */ React.createElement(InputField, {
      dataTest: field.name,
      required: field.required,
      name: field.name,
      defaultValue,
      placeholder: field.placeholder,
      onBlur: () => setFieldVisited(true),
      onChange,
      pattern: field.validation.formInputPattern,
      title: field.validation.formInputMessage,
      type: field.type
    }));
  }
  if (field.type === "password") {
    let value = field.initialValue;
    if (context[`${field.name}`]) {
      value = (_f = context[`${field.name}`]) == null ? void 0 : _f.value;
    }
    return /* @__PURE__ */ React.createElement("label", {
      className: "mb-6 block",
      key: field.name
    }, /* @__PURE__ */ React.createElement(FieldLabel, null, field.label), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), displayFieldErrors({ fieldErrors, fieldVisited }), /* @__PURE__ */ React.createElement(InputField, {
      dataTest: field.name,
      required: field.required,
      name: field.name,
      defaultValue: value,
      onBlur: () => setFieldVisited(true),
      onChange,
      pattern: field.validation.formInputPattern,
      title: field.validation.formInputMessage,
      type: "password"
    }));
  }
  if (field.type === "email") {
    let defaultValue = field.initialValue;
    if (context[`${field.name}`]) {
      defaultValue = (_g = context[`${field.name}`]) == null ? void 0 : _g.value;
    }
    return /* @__PURE__ */ React.createElement("label", {
      className: "mb-4",
      key: field.name
    }, /* @__PURE__ */ React.createElement(FieldLabel, null, field.label), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), displayFieldErrors({ fieldErrors, fieldVisited }), /* @__PURE__ */ React.createElement(InputField, {
      dataTest: field.name,
      required: field.required,
      name: field.name,
      defaultValue,
      placeholder: field.placeholder,
      onBlur: () => setFieldVisited(true),
      onChange,
      pattern: field.validation.formInputPattern,
      title: field.validation.formInputMessage,
      type: field.type
    }));
  }
  if (field.type === "textarea") {
    let defaultValue = field.initialValue;
    if (context[field.name]) {
      defaultValue = (_h = context[field.name]) == null ? void 0 : _h.value;
    }
    return /* @__PURE__ */ React.createElement("label", {
      className: "mb-4",
      key: field.name
    }, /* @__PURE__ */ React.createElement(FieldLabel, null, field.label), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), displayFieldErrors({ fieldErrors, fieldVisited }), /* @__PURE__ */ React.createElement("textarea", {
      "data-test": field.name,
      className: "w-full font-medium mm:text-lg p-2 px-3 bg-white rounded",
      required: field.required,
      rows: 5,
      name: field.name,
      defaultValue,
      placeholder: field.placeholder,
      onBlur: () => setFieldVisited(true),
      onChange
    }), /* @__PURE__ */ React.createElement("span", {
      className: "block h-10"
    }));
  }
  if (field.type === "radio") {
    console.log({ context });
    return /* @__PURE__ */ React.createElement(FieldItemWrapper, null, /* @__PURE__ */ React.createElement(FieldLabel, null, field.label), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), field.options.map((radioValue) => {
      var _a2;
      console.log({ radioValue });
      let defaultRadioValue = field.initialValue;
      if (context[field.name]) {
        defaultRadioValue = (_a2 = context[field.name]) == null ? void 0 : _a2.value;
      }
      const label = createFieldLabel(radioValue);
      return /* @__PURE__ */ React.createElement(RadioItem, {
        key: `${field.name}-${radioValue}`
      }, /* @__PURE__ */ React.createElement("input", {
        "data-test": `${field.name}-${radioValue}`,
        key: radioValue,
        type: "radio",
        id: `${field.name}-${radioValue}`,
        name: field.name,
        value: radioValue,
        autoComplete: "off",
        defaultChecked: radioValue === defaultRadioValue
      }), /* @__PURE__ */ React.createElement(RadioLabel, {
        className: "ml-2\n              ",
        htmlFor: `${field.name}-${radioValue}`
      }, label));
    }));
  }
  if (field.type === "checkbox-group") {
    return /* @__PURE__ */ React.createElement(FieldItemWrapper, null, /* @__PURE__ */ React.createElement(FieldLabel, null, field.groupLabel), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), field.checkboxes.map((checkbox) => {
      return /* @__PURE__ */ React.createElement(RadioItem, {
        key: checkbox.name
      }, /* @__PURE__ */ React.createElement("input", {
        "data-test": `${checkbox.name}-${checkbox.value}`,
        key: checkbox.name,
        type: "checkbox",
        id: checkbox.name,
        name: checkbox.name,
        value: checkbox.value,
        autoComplete: "off",
        defaultChecked: context[checkbox.name]
      }), /* @__PURE__ */ React.createElement(RadioLabel, {
        className: "ml-2\n              ",
        htmlFor: checkbox.name
      }, checkbox.label));
    }), /* @__PURE__ */ React.createElement("span", {
      className: "block h-4"
    }));
  }
  if (field.type === "expandable-list") {
    const { ExpandableList } = useExpandableList({
      field
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FieldItemWrapper, null, /* @__PURE__ */ React.createElement("div", {
      className: "expandable-list-label"
    }, field.listLabel), (field == null ? void 0 : field.listDescription) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
      className: "block h-2"
    }), /* @__PURE__ */ React.createElement(FieldDescription, null, field.listDescription)), /* @__PURE__ */ React.createElement("span", {
      className: "block h-8"
    }), /* @__PURE__ */ React.createElement(ExpandableList, {
      context
    })));
  }
  if (field.type === "stateful-radio") {
    const { StatefulRadio, selectedValue } = useStatefulRadio({
      field,
      context
    });
    return /* @__PURE__ */ React.createElement(FieldItemWrapper, null, /* @__PURE__ */ React.createElement(StatefulRadio, {
      key: field.name
    }), selectedValue === 0 ? field.dependentChildren[0].map((nestedField) => {
      if (nestedField) {
        return /* @__PURE__ */ React.createElement(FormField, {
          context,
          key: nestedField.name,
          field: nestedField
        });
      }
      return null;
    }) : selectedValue === 1 ? field.dependentChildren[1].map((nestedField) => {
      if (nestedField) {
        return /* @__PURE__ */ React.createElement(FormField, {
          context,
          key: nestedField.name,
          field: nestedField
        });
      }
      return null;
    }) : selectedValue === 2 ? field.dependentChildren[2].map((nestedField) => {
      if (nestedField) {
        return /* @__PURE__ */ React.createElement(FormField, {
          context,
          key: nestedField.name,
          field: nestedField
        });
      }
      return null;
    }) : selectedValue === 3 ? field.dependentChildren[3].map((nestedField) => {
      if (nestedField) {
        return /* @__PURE__ */ React.createElement(FormField, {
          context,
          key: nestedField.name,
          field: nestedField
        });
      }
      return null;
    }) : []);
  }
  return null;
}
function useExpandableList({ field }) {
  const submit = (0, import_react4.useSubmit)();
  const [showDialog, setShowDialog] = (0, import_react3.useState)(false);
  const [selectedIndex, setSelectedIndex] = (0, import_react3.useState)(void 0);
  const [selectedAction, setSelectedAction] = (0, import_react3.useState)("");
  const [listItems, setListItems] = (0, import_react3.useState)([]);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  console.log({ field });
  let { listItemStructure } = field;
  function ExpandableList({ context }) {
    console.log({ context, fieldName: field.name });
    (0, import_react3.useEffect)(() => {
      var _a;
      console.log("context changed");
      setListItems((_a = context[field.name]) == null ? void 0 : _a.value);
      console.log({ listItems });
    }, [context]);
    let fieldsToShowInTable = {};
    listItemStructure.map((field2) => {
      if (field2.showOnMobileTable) {
        fieldsToShowInTable[field2.name] = field2;
      }
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
      className: "add-item-button expand-click-target",
      onClick: () => {
        setSelectedIndex(void 0);
        setSelectedAction("");
        open();
      }
    }, /* @__PURE__ */ React.createElement("span", {
      className: "add-item-icon"
    }, /* @__PURE__ */ React.createElement(import_fi.FiPlusCircle, null)), field.addItemLabel), /* @__PURE__ */ React.createElement("span", {
      className: "block h-5 mm:h-6"
    }), listItems.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "list-items-table-wrapper"
    }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", {
      className: "lit-row"
    }, listItemStructure.map((nestedField) => {
      if (Object.keys(fieldsToShowInTable).includes(nestedField.name)) {
        return /* @__PURE__ */ React.createElement("th", {
          className: "lit-cell",
          "data-flex": nestedField.tableFlex,
          "data-align-text": nestedField.alignText,
          key: nestedField.name
        }, nestedField.label);
      }
    }), /* @__PURE__ */ React.createElement("th", {
      className: "lit-cell",
      "data-flex": 3
    }, "\xA0"), /* @__PURE__ */ React.createElement("th", {
      className: "lit-cell",
      "data-flex": 3
    }, "\xA0"))), listItems.map((item, index) => {
      return /* @__PURE__ */ React.createElement("tr", {
        className: "lit-row",
        key: index
      }, Object.keys(fieldsToShowInTable).map((fieldToShow, index2) => {
        var _a, _b;
        console.log({ index: index2 });
        console.log("data-flex: ", (_a = listItemStructure[index2]) == null ? void 0 : _a.tableFlex);
        let cellFlexValue;
        let alignTextValue;
        listItemStructure.forEach((itemStructure) => {
          if (itemStructure.name === fieldToShow) {
            cellFlexValue = itemStructure.tableFlex;
            alignTextValue = itemStructure.alignText;
          }
        });
        console.log({ cellFlexValue });
        return /* @__PURE__ */ React.createElement("th", {
          className: "lit-cell",
          "data-flex": cellFlexValue,
          "data-align-text": alignTextValue,
          key: `${item[fieldToShow]}-${index2}`
        }, (_b = item[fieldToShow]) == null ? void 0 : _b.value);
      }), /* @__PURE__ */ React.createElement("th", {
        className: "lit-cell",
        "data-align-text": "right",
        "data-flex": 3
      }, /* @__PURE__ */ React.createElement("button", {
        className: "edit-item-button expand-click-target",
        "data-test": `edit-${index}`,
        onClick: () => {
          setSelectedIndex(index);
          setSelectedAction("edit-item");
          open();
        }
      }, "Edit")), /* @__PURE__ */ React.createElement("th", {
        className: "lit-cell",
        "data-align-text": "right",
        "data-flex": 3
      }, /* @__PURE__ */ React.createElement("button", {
        className: "delete-item-button expand-click-target",
        "data-test": `delete-${index}`,
        onClick: () => {
          setSelectedIndex(index);
          setSelectedAction("delete-item");
          open();
        }
      }, "Delete")));
    })))), /* @__PURE__ */ React.createElement(import_dialog.DialogOverlay, {
      isOpen: showDialog,
      onDismiss: close
    }, /* @__PURE__ */ React.createElement(import_dialog.DialogContent, {
      "aria-label": field.addOrEditItemModalLabel
    }, selectedAction === "delete-item" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "font-bold text-2xl text-danger-7"
    }, "Delete Item"), /* @__PURE__ */ React.createElement("span", {
      className: "block h-3"
    }), /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to delete item", " ", listItems.map((item, index) => {
      var _a;
      if (index === selectedIndex) {
        console.log({ item: item[Object.keys(item)[0]] });
        return (_a = listItems[selectedIndex][Object.keys(listItems[selectedIndex])[0]]) == null ? void 0 : _a.value;
      }
    })), /* @__PURE__ */ React.createElement("span", {
      className: "block h-6"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "bg-primary-05 text-primary-7 font-bold py-2 px-4 rounded-md mr-8 border-none expand-click-target",
      "data-test": "cancel",
      onClick: () => {
        close();
      }
    }, "Cancel"), /* @__PURE__ */ React.createElement(import_react4.Form, {
      method: "post",
      onSubmitCapture: (event) => {
        submit(event.currentTarget);
        close();
      }
    }, /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "operation-type",
      value: "delete-list-item"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "index-to-delete",
      value: selectedIndex
    }), /* @__PURE__ */ React.createElement("button", {
      className: "bg-danger-05 text-danger-9 font-bold outline-none py-2 px-4 rounded-md",
      "data-test": "confirm-delete",
      type: "submit"
    }, "Confirm Delete")))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "font-bold text-neutral-9 text-2xl"
    }, typeof selectedIndex === "number" ? field.editItemLabel : field.addItemLabel), /* @__PURE__ */ React.createElement("span", {
      className: "block h-8"
    }), /* @__PURE__ */ React.createElement(import_react4.Form, {
      reloadDocument: true,
      method: "post",
      onSubmitCapture: (event) => {
        submit(event.currentTarget);
        close();
      }
    }, selectedAction === "edit-item" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "operation-type",
      value: "edit-list-item"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "index-to-change",
      value: selectedIndex
    })) : /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "operation-type",
      value: "add-item-to-list"
    }), listItemStructure.map((nestedField) => {
      var _a;
      return /* @__PURE__ */ React.createElement(FormField, {
        context: typeof selectedIndex === "number" ? (_a = context[field.name]) == null ? void 0 : _a.value[selectedIndex] : context,
        key: nestedField.name,
        field: nestedField
      });
    }), /* @__PURE__ */ React.createElement("span", {
      className: "block h-4"
    }), /* @__PURE__ */ React.createElement("button", {
      className: "text-success-7 font-bold rounded-md border-none text-lg px-4 py-2 -ml-1 bg-success-05",
      type: "submit"
    }, "Confirm"))))));
  }
  return { ExpandableList };
}
function useStatefulRadio({
  field,
  context
}) {
  let selectedIndex = 0;
  field.options.forEach((option, index) => {
    let defaultValue = field.initialValue;
    if (context[field.name]) {
      defaultValue = context[`${field.name}`].value;
    }
    if (defaultValue === option) {
      selectedIndex = index;
    }
  });
  const [selectedValue, setSelectedValue] = (0, import_react3.useState)(selectedIndex);
  function StatefulRadio() {
    return /* @__PURE__ */ React.createElement(FieldItemWrapper, null, /* @__PURE__ */ React.createElement(FieldLabel, null, field.label), /* @__PURE__ */ React.createElement(FieldDescription, null, field.description), field.options.map((radioValue, index) => {
      const label = createFieldLabel(radioValue);
      if (index === selectedValue) {
        return /* @__PURE__ */ React.createElement(RadioItem, {
          key: radioValue
        }, /* @__PURE__ */ React.createElement("input", {
          "data-test": `${field.name}-${radioValue}`,
          type: "radio",
          id: `${field.name}-${radioValue}`,
          name: field.name,
          value: radioValue,
          onChange: () => {
            setSelectedValue(index);
          },
          checked: true,
          autoComplete: "off"
        }), /* @__PURE__ */ React.createElement(RadioLabel, {
          htmlFor: `${field.name}-${radioValue}`
        }, label));
      } else {
        return /* @__PURE__ */ React.createElement(RadioItem, {
          key: radioValue
        }, /* @__PURE__ */ React.createElement("input", {
          "data-test": `${field.name}-${radioValue}`,
          type: "radio",
          id: `${field.name}-${radioValue}`,
          name: field.name,
          value: radioValue,
          onChange: () => {
            setSelectedValue(index);
          },
          autoComplete: "off"
        }), /* @__PURE__ */ React.createElement(RadioLabel, {
          htmlFor: `${field.name}-${radioValue}`
        }, label));
      }
    }));
  }
  return { StatefulRadio, selectedValue };
}
function FieldItemWrapper({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `mb-10${className ? " " + className : ""}`
  }, children);
}
function FieldLabel({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: `block font-display font-bold text-xl tb:text-xl text-neutral-6${className ? " " + className : ""}`
  }, children), /* @__PURE__ */ React.createElement("span", {
    className: "block h-1.5"
  }));
}
function InputField({
  className,
  required,
  name,
  defaultValue,
  placeholder,
  onBlur,
  onChange,
  pattern,
  title,
  type,
  dataTest
}) {
  return /* @__PURE__ */ React.createElement("input", {
    "data-test": dataTest,
    className: `bg-white  font-body font-medium rounded w-full text-base p-2 mm:text-xl${className ? " " + className : ""}`,
    required,
    name,
    defaultValue,
    placeholder,
    onBlur,
    onChange,
    pattern,
    title,
    type,
    autoCorrect: "false",
    autoComplete: "false"
  });
}
function RadioItem({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `mb-1 mt-2 flex items-center${className ? " " + className : ""}`
  }, children), /* @__PURE__ */ React.createElement("span", {
    className: "block h-1"
  }));
}
function RadioLabel({
  className,
  children,
  htmlFor
}) {
  return /* @__PURE__ */ React.createElement("label", {
    htmlFor,
    className: `radio-label block ml-2 font-medium mm:text-lg mm:ml-3 text-neutral-8${className ? " " + className : ""}`
  }, children);
}
function FieldDescription({ children }) {
  if (children) {
    return /* @__PURE__ */ React.createElement("p", {
      className: "-mt-1 mb-4 mm:mb-3 text-neutral-6 font-light"
    }, children);
  }
  return null;
}

// app/services/form/form-types.tsx
var import_fa = require("react-icons/fa");
function MultipartForm({
  context,
  formStructure,
  action: action2,
  reloadDocument = false
}) {
  console.log({ formStructure });
  return /* @__PURE__ */ React.createElement("div", {
    className: "form-container relative"
  }, /* @__PURE__ */ React.createElement(FormWrapper, {
    reloadDocument,
    action: action2
  }, /* @__PURE__ */ React.createElement(HoneypotField, null), formStructure.map((field) => {
    return /* @__PURE__ */ React.createElement(FormField, {
      field,
      context,
      key: field.name
    });
  }), context.dataHandlerErrorMessage && context.formStage === "end" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "font-display text-lg font-semibold text-danger-5"
  }, context.dataHandlerErrorMessage), /* @__PURE__ */ React.createElement("span", {
    className: "block h-6"
  })) : null, /* @__PURE__ */ React.createElement("div", {
    className: "forward-button-wrapper mt-10 flex w-full"
  }, (context.formStage === "beginning" || context.formStage === "middle") && /* @__PURE__ */ React.createElement(FormButton, {
    dataTest: "next",
    className: "ml-auto bg-primary-5 pr-4",
    name: "submit-type",
    type: "submit",
    value: "next"
  }, context.nextButtonText, /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 block mm:text-lg"
  }, /* @__PURE__ */ React.createElement(import_fa.FaChevronRight, {
    "aria-hidden": "true"
  }))), context.formStage === "end" && /* @__PURE__ */ React.createElement(FormButton, {
    dataTest: "submit",
    className: " forward-button-wrapper ml-auto bg-primary-5 pr-4",
    name: "submit-type",
    type: "submit",
    value: "submit"
  }, "Submit", /* @__PURE__ */ React.createElement("span", {
    className: " ml-2 block mm:text-lg"
  }, /* @__PURE__ */ React.createElement(import_fa.FaChevronRight, {
    "aria-hidden": "true"
  }))))), (context.formStage === "middle" || context.formStage === "end") && /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(FormButton, {
    dataTest: "back",
    className: "absolute-button bottom-0 bg-neutral-4 pl-4",
    name: "submit-type",
    type: "submit",
    value: "back"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 block mm:text-lg"
  }, /* @__PURE__ */ React.createElement(import_fa.FaChevronLeft, {
    "aria-hidden": "true"
  })), context.backButtonText)));
}
function FormWrapper({
  children,
  action: action2,
  reloadDocument = false
}) {
  if (reloadDocument) {
    return /* @__PURE__ */ React.createElement(import_react5.Form, {
      reloadDocument: true,
      action: action2,
      className: "relative w-content",
      method: "post"
    }, children);
  }
  return /* @__PURE__ */ React.createElement(import_react5.Form, {
    action: action2,
    className: "relative w-content",
    method: "post"
  }, children);
}
function HoneypotField() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    className: "visually-hidden",
    type: "text",
    name: "given-name",
    id: "given-name"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "visually-hidden",
    htmlFor: "given-name"
  }, "Given Name"));
}
function FormButton({
  children,
  name,
  className,
  value,
  type = "submit",
  dataTest
}) {
  return /* @__PURE__ */ React.createElement("button", {
    "data-test": dataTest,
    className: `font-display flex items-center rounded-md border-0 py-3 px-5 font-semibold text-white mm:text-lg${className ? " " + className : ""}`,
    name,
    type,
    value
  }, children);
}

// app/services/form/loader-function.ts
var import_node4 = require("@remix-run/node");

// app/services/form/loader-utils.ts
function checkForFieldNameAndValue({
  field,
  context
}) {
  let contextFieldName = context[`${field.name}`];
  if (contextFieldName) {
    if (typeof (contextFieldName == null ? void 0 : contextFieldName.value) !== "string" && typeof (contextFieldName == null ? void 0 : contextFieldName.value) !== "object") {
      console.log("bad value: ", contextFieldName.value);
      return true;
    }
  } else {
    return true;
  }
  if (field.type === "stateful-radio") {
    field.dependentChildren.forEach((fields) => {
      fields.forEach((nestedField) => {
        if (nestedField) {
          checkForFieldNameAndValue({ field: nestedField, context });
        }
      });
    });
  }
  return false;
}
function addFieldToContext({
  field,
  context
}) {
  if (field.type !== "checkbox-group" && field.type !== "expandable-list") {
    context[`${field.name}`] = {
      value: field.initialValue || "",
      errors: []
    };
  } else if (field.type === "checkbox-group") {
    field.checkboxes.forEach((checkbox) => {
      if (checkbox.initialValue) {
        context[`${field.name}`] = {
          value: field.initialValue || "",
          errors: []
        };
      }
    });
  } else if (field.type === "expandable-list") {
    context[`${field.name}`] = {
      value: field.initialValue || [],
      errors: []
    };
  }
  if (field.type === "stateful-radio") {
    field.dependentChildren.forEach((fields) => {
      fields.forEach((nestedField) => {
        if (typeof nestedField !== "undefined") {
          addFieldToContext({ field: nestedField, context });
        }
      });
    });
  }
}

// app/services/form/loader-function.ts
async function formLoaderFunction({
  basicOrMultipart,
  request,
  formBlueprint
}) {
  var _a, _b, _c;
  const session = await getSession(request.headers.get("Cookie"));
  let context = session.get("context");
  console.log("here's your context", context);
  context = checkExistingContext({ formBlueprint, basicOrMultipart, context });
  if (Object.keys(context).length < 1) {
    context = seedContextWithInitialValues({ formBlueprint, basicOrMultipart });
  }
  console.log("here's your context now", context);
  (context == null ? void 0 : context.currentStep) ?? 0;
  if (context.currentStep < 0) {
    context.currentStep = 0;
  }
  if (basicOrMultipart === "multipart") {
    let formStage = getFormStage({ context, formBlueprint });
    if (context.currentStep > 0 && Object.keys(context).length < 1) {
      console.log("You shouldn't be here");
      return (0, import_node4.json)({}, {
        headers: {
          "Set-Cookie": await destroySession(session)
        }
      });
    }
    context.formStage = formStage;
    context.nextButtonText = (_a = formBlueprint[context.currentStep]) == null ? void 0 : _a.nextButtonText;
    context.backButtonText = (_b = formBlueprint[context.currentStep]) == null ? void 0 : _b.backButtonText;
  }
  session.set("context", context);
  if (basicOrMultipart === "multipart") {
    console.log({ currentStep: context == null ? void 0 : context.currentStep });
    return {
      context,
      currentStepBlueprint: (_c = formBlueprint[context.currentStep]) == null ? void 0 : _c.fields,
      commitSession,
      session,
      commitSessionFn: async () => {
        await commitSession(session);
      }
    };
  } else {
    return {
      context,
      currentStepBlueprint: formBlueprint,
      commitSession,
      session,
      commitSessionFn: async () => {
        await commitSession(session);
      }
    };
  }
}
function checkExistingContext({
  basicOrMultipart,
  formBlueprint,
  context
}) {
  if (!context) {
    return false;
  }
  let incorrectContext = false;
  if (basicOrMultipart === "multipart") {
    for (const step of formBlueprint) {
      for (const field of step == null ? void 0 : step.fields) {
        if (incorrectContext) {
          console.log("haro!");
          return {};
        }
        incorrectContext = checkForFieldNameAndValue({ field, context });
      }
    }
  }
  if (basicOrMultipart === "basic") {
    for (const field of formBlueprint) {
      if (incorrectContext) {
        return {};
      }
      incorrectContext = checkForFieldNameAndValue({ field, context });
    }
  }
  return context;
}
function seedContextWithInitialValues({
  basicOrMultipart,
  formBlueprint
}) {
  let context = {};
  if (basicOrMultipart === "multipart") {
    for (const step of formBlueprint) {
      for (const field of step == null ? void 0 : step.fields) {
        if (field) {
          addFieldToContext({ field, context });
        }
      }
    }
    context.currentStep = 0;
  }
  if (basicOrMultipart === "basic") {
    for (const nestedField of formBlueprint) {
      if (typeof nestedField === "object") {
        addFieldToContext({ field: nestedField, context });
      }
    }
  }
  return context;
}

// route:/Users/markjensen/Code/jds-client-projects/2022/remixed-form/app/routes/multi-item-form.tsx
var metaTitle = "Multi-Item Form";
var metaDescription = "TODO - Fill in description";
var meta2 = () => {
  return {
    title: metaTitle,
    description: metaDescription
  };
};
var loader = async ({ request }) => {
  const { currentStepBlueprint, context, commitSession: commitSession2, session } = await formLoaderFunction({
    basicOrMultipart: "multipart",
    request,
    formBlueprint: multiItemStepForm
  });
  console.log({ currentStepBlueprint, multiItemStepForm, context });
  return (0, import_node5.json)({
    currentStepBlueprint,
    context
  }, {
    headers: {
      "Set-Cookie": await commitSession2(session)
    }
  });
};
var action = async ({ request }) => {
  return formActionFunction({
    formBlueprint: multiItemStepForm,
    formType: "multipart",
    request,
    handleDataFn: () => {
      console.log("lol, handle data");
    },
    successRedirectPath: "/"
  });
};
function MultiItemForm() {
  let data = (0, import_react6.useLoaderData)();
  let context = data == null ? void 0 : data.context;
  let currentStepBlueprint = data == null ? void 0 : data.currentStepBlueprint;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "content-wrapper form-content-wrapper"
  }, /* @__PURE__ */ React.createElement(MultipartForm, {
    context,
    formStructure: currentStepBlueprint
  })));
}

// route:/Users/markjensen/Code/jds-client-projects/2022/remixed-form/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react7 = require("@remix-run/react");
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Remixed Form"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/multi-item-form"
  }, "Multi-Item Form"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "41fb245c", "entry": { "module": "/build/entry.client-AQBZLN64.js", "imports": ["/build/_shared/chunk-D7CY57E5.js", "/build/_shared/chunk-VJIYMWKE.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-GANW7KTS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-332IM6BK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/multi-item-form": { "id": "routes/multi-item-form", "parentId": "root", "path": "multi-item-form", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/multi-item-form-4V4AIVVJ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-41FB245C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/multi-item-form": {
    id: "routes/multi-item-form",
    parentId: "root",
    path: "multi-item-form",
    index: void 0,
    caseSensitive: void 0,
    module: multi_item_form_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
