/// <reference types="react" />
import type { FormFieldInput } from "./types";
export declare function MultipartForm({ context, formStructure, action, reloadDocument, }: {
    context: any;
    formStructure: FormFieldInput[];
    action?: string;
    reloadDocument?: boolean;
}): JSX.Element;
export declare function BasicForm({ context, formStructure, action, submitText, reloadDocument, }: {
    context: any;
    formStructure: FormFieldInput[];
    action?: string;
    submitText?: string;
    reloadDocument?: boolean;
}): JSX.Element;
