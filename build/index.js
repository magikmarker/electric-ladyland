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

// route:/Users/markjensen/shared/electric-ladyland/app/root.tsx
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

// route:/Users/markjensen/shared/electric-ladyland/app/routes/multi-item-form.tsx
var multi_item_form_exports = {};
__export(multi_item_form_exports, {
  action: () => action,
  default: () => MultiItemForm,
  links: () => links,
  loader: () => loader,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node");
var import_react8 = require("@remix-run/react");

// app/forms/multi-item-form.ts
var notImportantStep = {
  fields: [
    {
      name: "not-important",
      label: "Text Input",
      type: "text",
      description: "Short (less than 30 characters) description of todo item",
      required: true,
      initialValue: "Anything here",
      validation: {
        formInputPattern: "^[\\w\\s\\-\\.&']{2,50}$",
        formInputMessage: "letters, spaces, & or '",
        patterns: ["^[\\w\\s\\-\\.&']{2,50}$"],
        messages: ["letters, spaces, & or '"]
      }
    },
    {
      name: "checkbox-test-group",
      type: "checkbox-group",
      label: "Test Checkbox Group",
      checkboxes: [
        {
          type: "checkbox",
          name: "checkbox-one",
          label: "Option One",
          value: "option-one"
        },
        {
          type: "checkbox",
          name: "checkbox-two",
          label: "Option Two",
          value: "option-two"
        },
        {
          type: "checkbox",
          name: "checkbox-three",
          label: "Option Three",
          value: "option-three"
        }
      ]
    },
    {
      name: "is-commercial-client",
      label: "Commercial Client?",
      type: "stateful-radio",
      options: ["no", "yes", "maybe"],
      initialValue: "no",
      dependentChildren: [
        [void 0],
        [
          {
            name: "business-name",
            label: "Business Name",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"]
            }
          },
          {
            name: "business-address",
            label: "Business Address",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"]
            }
          }
        ],
        [
          {
            name: "business-name",
            label: "Business Name",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"]
            }
          },
          {
            name: "business-address",
            label: "Business Address",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"]
            }
          }
        ]
      ]
    },
    {
      name: "testy-test",
      type: "hidden",
      initialValue: "dags"
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

// app/services/electric-ladyland/action/logic/check-context-for-errors.ts
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

// app/services/electric-ladyland/action/logic/handle-form-data.ts
var import_node = require("@remix-run/node");
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
    return (0, import_node.redirect)(successRedirectPath, {
      headers: {
        "Set-Cookie": await commitSession2(session)
      }
    });
  } else {
    context.dataHandlerSuccessMessage = "";
    context.dataHandlerErrorMessage = message;
    session.set("context", context);
    return (0, import_node.json)({}, {
      headers: {
        "Set-Cookie": await commitSession2(session)
      }
    });
  }
}

// app/services/electric-ladyland/action/logic/handle-list-item-form-structure-op.ts
var import_node3 = require("@remix-run/node");

// app/services/electric-ladyland/session.server.ts
var import_node2 = require("@remix-run/node");
var { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
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

// app/services/electric-ladyland/action/logic/handle-list-item-form-structure-op.ts
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
  return (0, import_node3.redirect)(pathname, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/services/electric-ladyland/action/logic/honeypot-field-has-value.ts
function honeypotFieldHasValue({ body }) {
  let honeypotField = body.get("given-name");
  if (honeypotField) {
    return true;
  }
  return false;
}

// app/services/electric-ladyland/shared.ts
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

// app/services/electric-ladyland/action/index.ts
var import_node5 = require("@remix-run/node");

// app/services/electric-ladyland/action-utils.ts
var import_node4 = require("@remix-run/node");
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
        console.log("hi neighbors");
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

// app/services/electric-ladyland/action/index.ts
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
    return (0, import_node5.redirect)(pathname2, {
      headers: {
        "Set-Cookie": await destroySession(session)
      }
    });
  }
  const body = await request.formData();
  let honeypotFieldHit = honeypotFieldHasValue({ body });
  if (honeypotFieldHit) {
    return (0, import_node5.redirect)("/");
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
      return (0, import_node5.redirect)(pathname, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
  }
  if (formType === "basic") {
    await addFormValuesToContext({
      formType,
      formBlueprint,
      body,
      context
    });
  } else {
    await addFormValuesToContext({
      formType,
      formBlueprint,
      body,
      context
    });
  }
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
      return (0, import_node5.redirect)(pathname, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
  }
  console.log("you're here?");
  return (0, import_node5.redirect)(pathname, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/services/electric-ladyland/styles.css
var styles_default = "/build/_assets/styles-AVGWHGU4.css";

// app/services/electric-ladyland/components/hidden.tsx
function HiddenField({
  fieldContext,
  fieldBlueprint
}) {
  let initialValue = fieldBlueprint.initialValue ?? "";
  let value = (fieldContext == null ? void 0 : fieldContext.value) ?? initialValue;
  return /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: fieldBlueprint.name,
    value
  });
}

// app/services/electric-ladyland/components/shared/display.tsx
function FieldLabel({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: `el-form-field-label${className ? " " + className : ""}`
  }, children));
}
function FieldDescription({ children }) {
  if (children) {
    return /* @__PURE__ */ React.createElement("p", {
      className: "el-form-field-description"
    }, children);
  }
  return null;
}
function displayFieldErrors({
  fieldErrors,
  fieldVisited
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, fieldErrors.length >= 1 && fieldVisited ? fieldErrors.map((fieldError) => {
    console.log({ fieldError });
    if (fieldErrors.length === 1) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "el-field-error-text",
        key: fieldError
      }, fieldError);
    } else {
      return /* @__PURE__ */ React.createElement("div", {
        className: "el-field-error-text",
        key: fieldError
      }, "- ", fieldError);
    }
  }) : null);
}
function displayFieldLabelDescriptionError({
  fieldBlueprint,
  fieldErrors,
  fieldVisited
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: fieldBlueprint.name,
    key: fieldBlueprint.name
  }, /* @__PURE__ */ React.createElement(FieldLabel, null, fieldBlueprint.label)), /* @__PURE__ */ React.createElement(FieldDescription, null, fieldBlueprint.description), fieldErrors && fieldVisited ? displayFieldErrors({ fieldErrors, fieldVisited }) : null);
}
function RadioOrCheckboxWrapper({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `el-radio-or-checkbox-wrapper${className ? " " + className : ""}`
  }, children));
}
function RadioOrCheckboxLabel({
  className,
  children,
  htmlFor
}) {
  return /* @__PURE__ */ React.createElement("label", {
    htmlFor,
    className: `el-radio-or-checkbox-label${className ? " " + className : ""}`
  }, children);
}

// app/services/electric-ladyland/components/shared/logic.tsx
var import_react3 = require("react");
function createFieldLabel(fieldName) {
  let words = fieldName.split("-");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
function onChange({
  e,
  fieldValidation,
  setFieldErrors,
  fieldErrors
}) {
  fieldValidation.patterns.forEach(async (pattern, index) => {
    var _a;
    let regexTestPattern = new RegExp(pattern, "gim");
    let value = convertSingleQuotes((_a = e == null ? void 0 : e.currentTarget) == null ? void 0 : _a.value);
    let fieldIsValid = regexTestPattern.test(value);
    if (fieldIsValid) {
      setFieldErrors([]);
    } else if (!fieldErrors.includes(fieldValidation.messages[index])) {
      setFieldErrors([...fieldErrors, fieldValidation.messages[index]]);
    }
  });
}
function useFormField({
  fieldBlueprint,
  fieldContext
}) {
  let errors = [];
  let visited = false;
  if (fieldBlueprint.type === "email" || fieldBlueprint.type === "password" || fieldBlueprint.type === "text" || fieldBlueprint.type === "textarea") {
    if (fieldContext == null ? void 0 : fieldContext.errors) {
      errors = fieldContext == null ? void 0 : fieldContext.errors;
      if ((fieldContext == null ? void 0 : fieldContext.errors.length) >= 1)
        visited = true;
    }
  }
  let [fieldErrors, setFieldErrors] = (0, import_react3.useState)(errors);
  let [fieldVisited, setFieldVisited] = (0, import_react3.useState)(visited);
  let initialValue = fieldBlueprint.initialValue ?? "";
  let defaultValue = (fieldContext == null ? void 0 : fieldContext.value) ?? initialValue;
  return {
    fieldErrors,
    fieldVisited,
    setFieldErrors,
    setFieldVisited,
    defaultValue
  };
}

// app/services/electric-ladyland/components/text-input.tsx
function TextInput({
  fieldBlueprint,
  fieldContext,
  className
}) {
  let {
    defaultValue,
    fieldErrors,
    setFieldErrors,
    fieldVisited,
    setFieldVisited
  } = useFormField({ fieldBlueprint, fieldContext });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint,
    fieldErrors,
    fieldVisited
  }), fieldBlueprint.type === "text" || fieldBlueprint.type === "password" || fieldBlueprint.type === "email" ? /* @__PURE__ */ React.createElement("input", {
    "data-test": fieldBlueprint.name,
    name: fieldBlueprint.name,
    id: fieldBlueprint.name,
    className: `el-text-input${className ? " " + className : ""}`,
    required: fieldBlueprint.required,
    defaultValue,
    placeholder: fieldBlueprint.placeholder,
    onBlur: () => setFieldVisited(true),
    onChange: (event) => {
      onChange({
        e: event,
        setFieldErrors,
        fieldErrors,
        fieldValidation: fieldBlueprint.validation
      });
    },
    pattern: fieldBlueprint.validation.formInputPattern,
    title: fieldBlueprint.validation.formInputMessage,
    type: fieldBlueprint.type,
    autoCorrect: "false",
    autoComplete: "false"
  }) : fieldBlueprint.type === "textarea" ? /* @__PURE__ */ React.createElement("textarea", {
    name: fieldBlueprint.name,
    id: fieldBlueprint.name,
    "data-test": fieldBlueprint.name,
    className: "w-full font-medium mm:text-lg p-2 px-3 bg-white rounded",
    required: fieldBlueprint.required,
    rows: 5,
    defaultValue,
    placeholder: fieldBlueprint.placeholder,
    onBlur: () => setFieldVisited(true),
    onChange: (event) => {
      onChange({
        e: event,
        setFieldErrors,
        fieldErrors,
        fieldValidation: fieldBlueprint.validation
      });
    }
  }) : null);
}

// app/services/electric-ladyland/components/radio.tsx
function Radio({
  fieldBlueprint,
  fieldContext
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), fieldBlueprint.options.map((radioValue) => {
    console.log({ radioValue });
    let defaultRadioValue = fieldBlueprint.initialValue;
    if (fieldContext == null ? void 0 : fieldContext.value) {
      defaultRadioValue = fieldContext.value;
    }
    const label = createFieldLabel(radioValue);
    return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
      key: `${fieldBlueprint.name}-${radioValue}`
    }, /* @__PURE__ */ React.createElement("input", {
      "data-test": `${fieldBlueprint.name}-${radioValue}`,
      key: radioValue,
      type: "radio",
      id: `${fieldBlueprint.name}-${radioValue}`,
      name: fieldBlueprint.name,
      value: radioValue,
      autoComplete: "off",
      defaultChecked: radioValue === defaultRadioValue
    }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
      className: "ml-2\n              ",
      htmlFor: `${fieldBlueprint.name}-${radioValue}`
    }, label));
  }));
}

// app/services/electric-ladyland/components/checkbox-group.tsx
function CheckboxGroup({
  fieldBlueprint,
  context
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), fieldBlueprint.checkboxes.map((checkbox) => {
    return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
      key: checkbox.name
    }, /* @__PURE__ */ React.createElement("input", {
      "data-test": `${checkbox.name}-${checkbox.value}`,
      key: checkbox.name,
      type: "checkbox",
      id: checkbox.name,
      name: checkbox.name,
      value: checkbox.value,
      autoComplete: "off",
      defaultChecked: context == null ? void 0 : context[checkbox.name]
    }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
      className: "ml-2\n              ",
      htmlFor: checkbox.name
    }, checkbox.label));
  }));
}

// app/services/electric-ladyland/components/expandable-list.tsx
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");
var import_dialog = require("@reach/dialog");
var import_fi = require("react-icons/fi");
function ExpandableList({
  fieldBlueprint,
  fieldContext
}) {
  const submit = (0, import_react4.useSubmit)();
  const [showDialog, setShowDialog] = (0, import_react5.useState)(false);
  const [selectedIndex, setSelectedIndex] = (0, import_react5.useState)(void 0);
  const [selectedAction, setSelectedAction] = (0, import_react5.useState)("");
  const [listItems, setListItems] = (0, import_react5.useState)([]);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  (0, import_react5.useEffect)(() => {
    console.log("context changed");
    setListItems(fieldContext == null ? void 0 : fieldContext.value);
    console.log({ listItems });
  }, [fieldContext, listItems]);
  let { listItemStructure } = fieldBlueprint;
  let fieldsToShowInTable = {};
  listItemStructure.forEach((field) => {
    if (field.showOnMobileTable) {
      fieldsToShowInTable[field.name] = field;
    }
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "add-item-button expand-click-target",
    onClick: (e) => {
      e.preventDefault();
      setSelectedIndex(void 0);
      setSelectedAction("");
      open();
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "add-item-icon"
  }, /* @__PURE__ */ React.createElement(import_fi.FiPlusCircle, null)), fieldBlueprint.addItemLabel), /* @__PURE__ */ React.createElement("span", {
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
    } else {
      return null;
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
      var _a;
      console.log({ index: index2 });
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
      }, (_a = item[fieldToShow]) == null ? void 0 : _a.value);
    }), /* @__PURE__ */ React.createElement("th", {
      className: "lit-cell",
      "data-align-text": "right",
      "data-flex": 3
    }, /* @__PURE__ */ React.createElement("button", {
      className: "edit-item-button expand-click-target",
      "data-test": `edit-${index}`,
      onClick: (e) => {
        e.preventDefault();
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
      onClick: (e) => {
        e.preventDefault();
        setSelectedIndex(index);
        setSelectedAction("delete-item");
        open();
      }
    }, "Delete")));
  })))), /* @__PURE__ */ React.createElement(import_dialog.DialogOverlay, {
    isOpen: showDialog,
    onDismiss: close
  }, /* @__PURE__ */ React.createElement(import_dialog.DialogContent, {
    "aria-label": fieldBlueprint.addOrEditItemModalLabel
  }, selectedAction === "delete-item" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold text-2xl text-danger-7"
  }, "Delete Item"), /* @__PURE__ */ React.createElement("span", {
    className: "block h-3"
  }), /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to delete item", " ", listItems.map((item, index) => {
    var _a;
    if (index === selectedIndex) {
      console.log({ item: item[Object.keys(item)[0]] });
      return (_a = listItems[selectedIndex][Object.keys(listItems[selectedIndex])[0]]) == null ? void 0 : _a.value;
    } else {
      return null;
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
  }, typeof selectedIndex === "number" ? fieldBlueprint.editItemLabel : fieldBlueprint.addItemLabel), /* @__PURE__ */ React.createElement("span", {
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
    return /* @__PURE__ */ React.createElement(FormField, {
      context: typeof selectedIndex === "number" ? fieldContext == null ? void 0 : fieldContext.value[selectedIndex] : fieldContext,
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

// app/services/electric-ladyland/components/stateful-radio.tsx
var import_react6 = require("react");
function StatefulRadio({
  fieldBlueprint,
  context
}) {
  let selectedIndex = 0;
  fieldBlueprint.options.forEach((option, index) => {
    var _a;
    let defaultValue = ((_a = context[fieldBlueprint.name]) == null ? void 0 : _a.value) ?? fieldBlueprint.initialValue;
    if (defaultValue === option) {
      selectedIndex = index;
    }
  });
  console.log({ context });
  const [selectedValue, setSelectedValue] = (0, import_react6.useState)(selectedIndex);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), /* @__PURE__ */ React.createElement("div", {
    className: "el-field-item"
  }, fieldBlueprint.options.map((radioValue, index) => {
    const label = createFieldLabel(radioValue);
    if (index === selectedValue) {
      return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
        key: radioValue
      }, /* @__PURE__ */ React.createElement("input", {
        "data-test": `${fieldBlueprint.name}-${radioValue}`,
        type: "radio",
        id: `${fieldBlueprint.name}-${radioValue}`,
        name: fieldBlueprint.name,
        value: radioValue,
        onChange: () => {
          setSelectedValue(index);
        },
        checked: true,
        autoComplete: "off"
      }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
        htmlFor: `${fieldBlueprint.name}-${radioValue}`
      }, label));
    } else {
      return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
        key: radioValue
      }, /* @__PURE__ */ React.createElement("input", {
        "data-test": `${fieldBlueprint.name}-${radioValue}`,
        type: "radio",
        id: `${fieldBlueprint.name}-${radioValue}`,
        name: fieldBlueprint.name,
        value: radioValue,
        onChange: () => {
          setSelectedValue(index);
        },
        autoComplete: "off"
      }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
        htmlFor: `${fieldBlueprint.name}-${radioValue}`
      }, label));
    }
  })), fieldBlueprint.dependentChildren[selectedValue].map((nestedField) => {
    if (nestedField) {
      return /* @__PURE__ */ React.createElement(FormField, {
        context,
        key: nestedField.name,
        field: nestedField
      });
    }
    return null;
  }));
}

// app/services/electric-ladyland/form-field.tsx
FormField.styles = styles_default;
function FormField({
  field,
  context
}) {
  if (field.type === "hidden") {
    return /* @__PURE__ */ React.createElement(HiddenField, {
      fieldContext: context[field.name],
      fieldBlueprint: field
    });
  }
  if (field.type === "text" || field.type === "textarea" || field.type === "password" || field.type === "email") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(TextInput, {
      fieldBlueprint: field,
      fieldContext: context[field.name]
    }));
  }
  if (field.type === "radio") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(Radio, {
      fieldBlueprint: field,
      fieldContext: context[field.name]
    }));
  }
  if (field.type === "checkbox-group") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(CheckboxGroup, {
      fieldBlueprint: field,
      context
    }));
  }
  if (field.type === "expandable-list") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(ExpandableList, {
      fieldBlueprint: field,
      fieldContext: context[field.name]
    }));
  }
  if (field.type === "stateful-radio") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(StatefulRadio, {
      fieldBlueprint: field,
      context
    }));
  }
  return null;
}

// app/services/electric-ladyland/form-wrapper.tsx
var import_react7 = require("@remix-run/react");
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
  }))))), (context.formStage === "middle" || context.formStage === "end") && /* @__PURE__ */ React.createElement(import_react7.Form, {
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
    return /* @__PURE__ */ React.createElement(import_react7.Form, {
      reloadDocument: true,
      action: action2,
      className: "relative w-content",
      method: "post"
    }, children);
  }
  return /* @__PURE__ */ React.createElement(import_react7.Form, {
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

// app/services/electric-ladyland/loader/index.ts
var import_node6 = require("@remix-run/node");

// app/services/electric-ladyland/loader/logic/check-for-relevant-context.ts
function checkForRelevantContext({
  basicOrMultipart,
  formBlueprint,
  context
}) {
  if (!context) {
    return {};
  }
  let contextMismatch = false;
  if (basicOrMultipart === "multipart") {
    for (const step of formBlueprint) {
      for (const field of step == null ? void 0 : step.fields) {
        if (contextMismatch) {
          console.log("The context you passed in does not match the structure of the form. Setting context to an empty object so that we can start the form again");
          return {};
        }
        contextMismatch = checkContextForMismatch({ field, context });
      }
    }
  }
  if (basicOrMultipart === "basic") {
    for (const field of formBlueprint) {
      if (contextMismatch) {
        return {};
      }
      contextMismatch = checkContextForMismatch({ field, context });
    }
  }
  return context;
}
function checkContextForMismatch({
  field,
  context
}) {
  if (field.type === "checkbox-group") {
    return false;
  }
  let contextFieldName = context[`${field.name}`];
  if (typeof (contextFieldName == null ? void 0 : contextFieldName.value) !== "string" && typeof (contextFieldName == null ? void 0 : contextFieldName.value) !== "object") {
    console.log("bad value: ", contextFieldName.value);
    return true;
  }
  if (field.type === "stateful-radio") {
    field.dependentChildren.forEach((fields) => {
      fields.forEach((nestedField) => {
        if (nestedField) {
          checkContextForMismatch({ field: nestedField, context });
        }
      });
    });
  }
  return false;
}

// app/services/electric-ladyland/loader/logic/seed-context-with-initial-values.ts
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

// app/services/electric-ladyland/loader/logic/get-form-stage.ts
function getFormStage2({
  context,
  formBlueprint
}) {
  const numberOfAvailableSteps = formBlueprint.length;
  let formStage = context.currentStep === 0 ? "beginning" : Number(context.currentStep) + 1 === numberOfAvailableSteps ? "end" : "middle";
  return formStage;
}

// app/services/electric-ladyland/loader/index.ts
async function formLoaderFunction({
  basicOrMultipart,
  request,
  formBlueprint
}) {
  var _a, _b, _c;
  const session = await getSession(request.headers.get("Cookie"));
  let context = session.get("context");
  if (basicOrMultipart === "basic") {
    context = checkForRelevantContext({
      formBlueprint,
      basicOrMultipart,
      context
    });
  } else {
    context = checkForRelevantContext({
      formBlueprint,
      basicOrMultipart,
      context
    });
  }
  if (Object.keys(context).length < 1) {
    if (basicOrMultipart === "basic") {
      context = seedContextWithInitialValues({
        formBlueprint,
        basicOrMultipart
      });
    } else {
      context = seedContextWithInitialValues({
        formBlueprint,
        basicOrMultipart
      });
    }
  }
  context.currentStep = (context == null ? void 0 : context.currentStep) ?? 0;
  if (context.currentStep < 0) {
    context.currentStep = 0;
  }
  if (basicOrMultipart === "multipart") {
    let formStage = getFormStage2({ context, formBlueprint });
    if (context.currentStep > 0 && Object.keys(context).length < 1) {
      console.log("You shouldn't be here");
      return (0, import_node6.json)({}, {
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
    return {
      context,
      currentStepBlueprint: (_c = formBlueprint[context.currentStep]) == null ? void 0 : _c.fields,
      commitSession,
      session
    };
  } else {
    return {
      context,
      currentStepBlueprint: formBlueprint,
      commitSession,
      session
    };
  }
}

// route:/Users/markjensen/shared/electric-ladyland/app/routes/multi-item-form.tsx
var metaTitle = "Multi-Item Form";
var metaDescription = "TODO - Fill in description";
var meta2 = () => {
  return {
    title: metaTitle,
    description: metaDescription
  };
};
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: FormField.styles
    }
  ];
};
var loader = async ({ request }) => {
  const { currentStepBlueprint, context, commitSession: commitSession2, session } = await formLoaderFunction({
    basicOrMultipart: "multipart",
    request,
    formBlueprint: multiItemStepForm
  });
  console.log({ currentStepBlueprint, multiItemStepForm, context });
  return (0, import_node7.json)({
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
  let data = (0, import_react8.useLoaderData)();
  let context = data == null ? void 0 : data.context;
  let currentStepBlueprint = data == null ? void 0 : data.currentStepBlueprint;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "content-wrapper form-content-wrapper"
  }, /* @__PURE__ */ React.createElement(MultipartForm, {
    context,
    formStructure: currentStepBlueprint
  })));
}

// route:/Users/markjensen/shared/electric-ladyland/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react9 = require("@remix-run/react");
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Remixed Form"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/multi-item-form"
  }, "Multi-Item Form"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "9efb9093", "entry": { "module": "/build/entry.client-Q7T3ZI3I.js", "imports": ["/build/_shared/chunk-2KUA5ERT.js", "/build/_shared/chunk-KREO6WPC.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MNYOBBNT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-467OWTL2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/multi-item-form": { "id": "routes/multi-item-form", "parentId": "root", "path": "multi-item-form", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/multi-item-form-OFJSNU2S.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9EFB9093.js" };

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
