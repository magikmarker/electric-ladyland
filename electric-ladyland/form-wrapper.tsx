import type { ReactNode } from "react";
import type { FormFieldInput } from "./types";
import { Form } from "@remix-run/react";
import { FormField } from "./form-field";
import { Button } from "~/components/interactive";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function MultipartForm({
  context,
  formStructure,
  action,
  reloadDocument = false,
}: {
  context: any;
  formStructure: FormFieldInput[];
  action?: string;
  reloadDocument?: boolean;
}) {
  console.log({ formStructure });

  return (
    <div className="el-form-wrapper">
      <FormWrapper reloadDocument={reloadDocument} action={action}>
        <HoneypotField />
        {formStructure.map((field: FormFieldInput) => {
          return <FormField field={field} context={context} key={field.name} />;
        })}
        {context.dataHandlerErrorMessage && context.formStage === "end" ? (
          <>
            <div className="font-display text-lg font-semibold text-danger-5">
              {context.dataHandlerErrorMessage}
            </div>
            <span className="block h-6"></span>
          </>
        ) : null}
        <div className="forward-button-wrapper mt-10 flex w-full">
          {(context.formStage === "beginning" ||
            context.formStage === "middle") && (
            <FormButton
              dataTest="next"
              className="el-form-button-forward"
              name="submit-type"
              type="submit"
              value="next"
            >
              {context.nextButtonText}
              <span className="el-form-right-icon">
                <FaChevronRight aria-hidden="true" />
              </span>
            </FormButton>
          )}
          {context.formStage === "end" && (
            <FormButton
              dataTest="submit"
              className="el-form-button-forward"
              name="submit-type"
              type="submit"
              value="submit"
            >
              Submit
              <span className="el-form-right-icon">
                <FaChevronRight aria-hidden="true" />
              </span>
            </FormButton>
          )}
        </div>
      </FormWrapper>
      {(context.formStage === "middle" || context.formStage === "end") && (
        <Form method="post">
          <FormButton
            dataTest="back"
            className="el-form-button-back"
            name="submit-type"
            type="submit"
            value="back"
          >
            <span className="el-form-left-icon">
              <FaChevronLeft aria-hidden="true" />
            </span>
            {context.backButtonText}
          </FormButton>
        </Form>
      )}
    </div>
  );
}

export function BasicForm({
  context,
  formStructure,
  action,
  submitText,
  reloadDocument = false,
}: {
  context: any;
  formStructure: FormFieldInput[];
  action?: string;
  submitText?: string;
  reloadDocument?: boolean;
}) {
  return (
    <FormWrapper reloadDocument={reloadDocument} action={action}>
      <HoneypotField />
      {formStructure.map((field: FormFieldInput) => {
        return <FormField field={field} context={context} key={field.name} />;
      })}
      {context.dataHandlerErrorMessage && (
        <>
          <div className="font-display text-lg font-semibold text-danger-5">
            {context.dataHandlerErrorMessage}
          </div>
          <span className="block h-6"></span>
        </>
      )}
      <span className="block h-0.5"></span>
      {submitText ? (
        <SubmitButton>{submitText}</SubmitButton>
      ) : (
        <SubmitButton>Submit</SubmitButton>
      )}
    </FormWrapper>
  );
}

function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <Button
      dataTest="submit"
      elevation="sm"
      variant="none"
      className="!mt-8 !w-fit bg-primary-5 text-white"
      type="submit"
    >
      {children}
    </Button>
  );
}

function FormWrapper({
  children,
  action,
  reloadDocument = false,
}: {
  children: ReactNode;
  action?: string;
  reloadDocument?: boolean;
}) {
  if (reloadDocument) {
    return (
      <Form reloadDocument action={action} method="post">
        {children}
      </Form>
    );
  }
  return (
    <Form action={action} method="post">
      {children}
    </Form>
  );
}

function HoneypotField() {
  return (
    <>
      <input
        className="visually-hidden"
        type="text"
        name="given-name"
        id="given-name"
      />
      <label className="visually-hidden" htmlFor="given-name">
        Given Name
      </label>
    </>
  );
}

function FormButton({
  children,
  name,
  className,
  value,
  type = "submit",
  dataTest,
}: {
  children: ReactNode;
  name?: string;
  className?: string;
  value?: string;
  type?: "submit";
  dataTest?: string;
}) {
  return (
    <button
      data-test={dataTest}
      className={`el-form-button${className ? " " + className : ""}`}
      name={name}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}
