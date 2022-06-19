/// <reference types="react" />
import type { ExpandableListBlueprint } from "../types";
export declare function ExpandableList({ fieldBlueprint, fieldContext, }: {
    fieldBlueprint: ExpandableListBlueprint;
    fieldContext: {
        value: string[];
        errors: string[];
    };
}): JSX.Element;
