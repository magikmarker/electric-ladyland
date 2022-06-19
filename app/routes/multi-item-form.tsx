import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  LinksFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { multiItemStepForm } from "~/forms/multi-item-form";
import { formActionFunction } from "~/services/electric-ladyland/action-function";
import { FormField } from "~/services/electric-ladyland/form-field";
import { MultipartForm } from "~/services/electric-ladyland/form-types";
import { formLoaderFunction } from "~/services/electric-ladyland/loader";

const metaTitle = "Multi-Item Form";
const metaDescription = "TODO - Fill in description";

export let meta: MetaFunction = () => {
  return {
    title: metaTitle,
    description: metaDescription,
  };
};

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: FormField.styles,
    },
  ];
};

export let loader: LoaderFunction = async ({ request }) => {
  const { currentStepBlueprint, context, commitSession, session } =
    await formLoaderFunction({
      basicOrMultipart: "multipart",
      request,
      formBlueprint: multiItemStepForm,
    });

  console.log({ currentStepBlueprint, multiItemStepForm, context });

  return json(
    {
      currentStepBlueprint,
      context,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export const action: ActionFunction = async ({ request }) => {
  return formActionFunction({
    formBlueprint: multiItemStepForm,
    formType: "multipart",
    request: request,
    handleDataFn: () => {
      console.log("lol, handle data");
    },
    successRedirectPath: "/",
  });
};

export default function MultiItemForm() {
  let data = useLoaderData();

  let context = data?.context;
  let currentStepBlueprint = data?.currentStepBlueprint;

  return (
    <>
      <div className="content-wrapper form-content-wrapper">
        <MultipartForm context={context} formStructure={currentStepBlueprint} />
      </div>
    </>
  );
}
