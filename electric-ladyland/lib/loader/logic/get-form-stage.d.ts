import type { MultiStepForm } from "../../types";
declare function getFormStage({ context, formBlueprint, }: {
    context: any;
    formBlueprint: MultiStepForm;
}): "beginning" | "middle" | "end";
export { getFormStage };
