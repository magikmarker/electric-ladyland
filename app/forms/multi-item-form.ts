import type { MultiStepForm, Step } from "~/services/electric-ladyland/types";
import { validation } from "~/services/electric-ladyland/validation";

const notImportantStep: Step = {
  fields: [
    {
      name: "todo-items-list",
      type: "expandable-list",
      label: "Todo Items",
      description:
        "Add some groovy todos, all the cool kids are doing it these days.",
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
            messages: ["letters, spaces, & or '"],
          },
          showOnMobileTable: true,
          tableFlex: 3,
          alignText: "left",
        },
        {
          name: "todo-description",
          label: "Description",
          description:
            "Short (less than 30 characters) description of todo item",
          type: "text",
          required: true,
          initialValue: "",
          validation: {
            patterns: ["^[\\w\\s-&']{2,30}$"],
            messages: ["letters, spaces, & or '"],
          },
          showOnMobileTable: true,
          tableFlex: 3,
          alignText: "left",
        },
        {
          name: "priority",
          label: "Source",
          type: "radio",
          options: ["High", "Medium", "Low"],
          initialValue: "High",
        },
      ],
    },
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
        messages: ["letters, spaces, & or '"],
      },
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
          value: "option-one",
        },
        {
          type: "checkbox",
          name: "checkbox-two",
          label: "Option Two",
          value: "option-two",
        },
        {
          type: "checkbox",
          name: "checkbox-three",
          label: "Option Three",
          value: "option-three",
        },
      ],
    },
    {
      name: "is-commercial-client",
      label: "Commercial Client?",
      type: "stateful-radio",
      options: ["no", "yes", "maybe"],
      initialValue: "no",
      dependentChildren: [
        [undefined],
        [
          {
            name: "business-name",
            label: "Business Name",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"],
            },
          },
          {
            name: "business-address",
            label: "Business Address",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"],
            },
          },
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
              messages: ["letters, spaces, & or '"],
            },
          },
          {
            name: "business-address",
            label: "Business Address",
            type: "text",
            required: true,
            initialValue: "",
            validation: {
              patterns: ["^[\\w\\s&']{2,50}$"],
              messages: ["letters, spaces, & or '"],
            },
          },
        ],
      ],
    },
    {
      name: "testy-test",
      type: "hidden",
      initialValue: "dags",
    },
  ],
  nextButtonText: "Todo List",
};

const todoStep: Step = {
  fields: [
    {
      name: "todo-items-list",
      type: "expandable-list",
      label: "Todo Items",
      description:
        "Add some groovy todos, all the cool kids are doing it these days.",
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
            messages: ["letters, spaces, & or '"],
          },
          showOnMobileTable: true,
          tableFlex: 3,
          alignText: "left",
        },
        {
          name: "todo-description",
          label: "Description",
          description:
            "Short (less than 30 characters) description of todo item",
          type: "text",
          required: true,
          initialValue: "",
          validation: {
            patterns: ["^[\\w\\s-&']{2,30}$"],
            messages: ["letters, spaces, & or '"],
          },
          showOnMobileTable: true,
          tableFlex: 3,
          alignText: "left",
        },
        {
          name: "priority",
          label: "Source",
          type: "radio",
          options: ["High", "Medium", "Low"],
          initialValue: "High",
        },
      ],
    },
  ],
  backButtonText: "Not Important",
  nextButtonText: "Less Important",
};

const lessImportantStep: Step = {
  fields: [
    {
      name: "less-important",
      label: "Less Important",
      type: "text",
      required: true,
      initialValue: "Less important thing",
      validation: {
        patterns: ["^[\\w\\s-&']{2,50}$"],
        messages: ["letters, spaces, & or '"],
      },
    },
  ],
  backButtonText: "Todo List",
  nextButtonText: "Submit",
};

export const multiItemStepForm: MultiStepForm = [
  notImportantStep,
  todoStep,
  lessImportantStep,
];
