"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandableList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@remix-run/react");
var react_2 = require("react");
var dialog_1 = require("@reach/dialog");
var fi_1 = require("react-icons/fi");
var form_field_1 = require("../form-field");
var display_1 = require("./shared/display");
var io5_1 = require("react-icons/io5");
function ExpandableList(_a) {
    var fieldBlueprint = _a.fieldBlueprint, fieldContext = _a.fieldContext;
    var submit = (0, react_1.useSubmit)();
    var _b = (0, react_2.useState)(false), showDialog = _b[0], setShowDialog = _b[1];
    var _c = (0, react_2.useState)(undefined), selectedIndex = _c[0], setSelectedIndex = _c[1];
    var _d = (0, react_2.useState)(""), selectedAction = _d[0], setSelectedAction = _d[1];
    var _e = (0, react_2.useState)([]), listItems = _e[0], setListItems = _e[1];
    var open = function () { return setShowDialog(true); };
    var close = function () { return setShowDialog(false); };
    (0, react_2.useEffect)(function () {
        console.log("context changed");
        setListItems(fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.value);
        console.log({ listItems: listItems });
    }, [fieldContext, listItems]);
    var listItemStructure = fieldBlueprint.listItemStructure;
    var fieldsToShowInTable = {};
    listItemStructure.forEach(function (field) {
        // @ts-expect-error lolz typescript
        if (field.showOnMobileTable) {
            // @ts-expect-error lolz typescript
            fieldsToShowInTable[field.name] = field;
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "el-field-item" }, { children: [(0, display_1.displayFieldLabelDescriptionError)({
                fieldBlueprint: fieldBlueprint,
            }), (0, jsx_runtime_1.jsxs)("button", __assign({ className: "expand-click-target el-form-button el-form-add-item-button", onClick: function (e) {
                    e.preventDefault();
                    setSelectedIndex(undefined);
                    setSelectedAction("");
                    open();
                } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "el-form-left-icon" }, { children: (0, jsx_runtime_1.jsx)(fi_1.FiPlusCircle, {}) })), fieldBlueprint.addItemLabel] })), listItems.length > 0 && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "list-items-table-wrapper" }, { children: (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", __assign({ className: "lit-row" }, { children: [listItemStructure.map(function (nestedField) {
                                            if (Object.keys(fieldsToShowInTable).includes(nestedField.name)) {
                                                return ((0, jsx_runtime_1.jsx)("th", __assign({ className: "lit-cell", "data-flex": 
                                                    // @ts-expect-error lolz typescript
                                                    nestedField.tableFlex, "data-align-text": 
                                                    // @ts-expect-error lolz typescript
                                                    nestedField.alignText }, { children: nestedField.label }), nestedField.name));
                                            }
                                            else {
                                                return null;
                                            }
                                        }), (0, jsx_runtime_1.jsx)("th", __assign({ className: "lit-cell", "data-flex": 3 }, { children: "\u00A0" })), (0, jsx_runtime_1.jsx)("th", __assign({ className: "lit-cell", "data-flex": 3 }, { children: "\u00A0" }))] })) }), listItems.map(function (item, index) {
                                // console.log({ item });
                                return ((0, jsx_runtime_1.jsxs)("tr", __assign({ className: "lit-row" }, { children: [Object.keys(fieldsToShowInTable).map(function (fieldToShow, index) {
                                            var _a;
                                            console.log({ index: index });
                                            var cellFlexValue;
                                            var alignTextValue;
                                            listItemStructure.forEach(function (itemStructure) {
                                                if (itemStructure.name === fieldToShow) {
                                                    cellFlexValue = itemStructure.tableFlex;
                                                    alignTextValue = itemStructure.alignText;
                                                }
                                            });
                                            // flexValueArray.filter((item) => {
                                            //   if (item !== undefined && typeof item === "number") {
                                            //     return item;
                                            //   }
                                            // });
                                            console.log({ cellFlexValue: cellFlexValue });
                                            return ((0, jsx_runtime_1.jsx)("th", __assign({ className: "lit-cell", "data-flex": cellFlexValue, "data-align-text": alignTextValue }, { children: (_a = item[fieldToShow]) === null || _a === void 0 ? void 0 : _a.value }), "".concat(item[fieldToShow], "-").concat(index)));
                                        }), (0, jsx_runtime_1.jsx)("th", __assign({ className: "lit-cell", "data-align-text": "right", "data-flex": 3 }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "edit-item-button expand-click-target", "data-test": "edit-".concat(index), onClick: function (e) {
                                                    e.preventDefault();
                                                    // @ts-expect-error lolz typescript
                                                    setSelectedIndex(index);
                                                    setSelectedAction("edit-item");
                                                    open();
                                                } }, { children: "Edit" })) })), (0, jsx_runtime_1.jsx)("th", __assign({ className: "lit-cell", "data-align-text": "right", "data-flex": 3 }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "delete-item-button expand-click-target", "data-test": "delete-".concat(index), onClick: function (e) {
                                                    e.preventDefault();
                                                    // @ts-expect-error lolz typescript
                                                    setSelectedIndex(index);
                                                    setSelectedAction("delete-item");
                                                    open();
                                                } }, { children: "Delete" })) }))] }), index));
                            })] }) })) })), (0, jsx_runtime_1.jsx)(dialog_1.DialogOverlay, __assign({ isOpen: showDialog, onDismiss: close }, { children: (0, jsx_runtime_1.jsx)(dialog_1.DialogContent, __assign({ "aria-label": fieldBlueprint.addOrEditItemModalLabel }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "modal-content-wrapper" }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ className: "close-modal-button expand-click-target", onClick: close }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "close-icon-wrapper" }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoClose, { role: "img" }) })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Close Modal" }))] })), selectedAction === "delete-item" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "modal-label modal-delete-item-label" }, { children: "Delete Item" })), (0, jsx_runtime_1.jsx)("span", { className: "block h-3" }), (0, jsx_runtime_1.jsxs)("p", __assign({ className: "confirm-delete-text" }, { children: ["Are you sure you want to delete item", " ", listItems.map(function (item, index) {
                                                var _a;
                                                if (index === selectedIndex) {
                                                    console.log({ item: item[Object.keys(item)[0]] });
                                                    return (_a = listItems[selectedIndex][Object.keys(listItems[selectedIndex])[0]]) === null || _a === void 0 ? void 0 : _a.value;
                                                }
                                                else {
                                                    return null;
                                                }
                                            }), "?"] })), (0, jsx_runtime_1.jsx)("span", { className: "block h-6" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "el-form-button el-form-button-neutral expand-click-target", "data-test": "cancel", onClick: function () {
                                                    close();
                                                } }, { children: "Cancel" })), (0, jsx_runtime_1.jsxs)(react_1.Form, __assign({ method: "post", onSubmitCapture: function (event) {
                                                    submit(event.currentTarget);
                                                    close();
                                                } }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "operation-type", value: "delete-list-item" }), (0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "index-to-delete", value: selectedIndex }), (0, jsx_runtime_1.jsx)("button", __assign({ className: "el-form-button el-form-button-danger expand-click-target", "data-test": "confirm-delete", type: "submit" }, { children: "Confirm Delete" }))] }))] }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "modal-label modal-add-item-label" }, { children: typeof selectedIndex === "number"
                                            ? fieldBlueprint.editItemLabel
                                            : fieldBlueprint.addItemLabel })), (0, jsx_runtime_1.jsx)("span", { className: "block h-8" }), (0, jsx_runtime_1.jsxs)(react_1.Form, __assign({ reloadDocument: true, method: "post", onSubmitCapture: function (event) {
                                            submit(event.currentTarget);
                                            close();
                                        } }, { children: [selectedAction === "edit-item" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "operation-type", value: "edit-list-item" }), (0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "index-to-change", value: selectedIndex })] })) : ((0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "operation-type", value: "add-item-to-list" })), listItemStructure.map(function (nestedField) {
                                                return ((0, jsx_runtime_1.jsx)(form_field_1.FormField, { context: typeof selectedIndex === "number"
                                                        ? fieldContext === null || fieldContext === void 0 ? void 0 : fieldContext.value[selectedIndex]
                                                        : fieldContext, field: nestedField }, nestedField.name));
                                            }), (0, jsx_runtime_1.jsx)("span", { className: "block h-4" }), (0, jsx_runtime_1.jsx)("button", __assign({ className: "el-form-button el-form-add-item-button expand-click-target", type: "submit" }, { children: "Confirm" }))] }))] }))] })) })) }))] })));
}
exports.ExpandableList = ExpandableList;
