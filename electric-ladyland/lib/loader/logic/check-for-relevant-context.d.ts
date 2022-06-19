import type { FormFieldInput, MultiStepForm } from "../../types";
declare function checkForRelevantContext({ basicOrMultipart, formBlueprint, context, }: {
    basicOrMultipart: "basic";
    formBlueprint: FormFieldInput[];
    context: any;
} | {
    basicOrMultipart: "multipart";
    formBlueprint: MultiStepForm;
    context: any;
}): any;
export { checkForRelevantContext };
