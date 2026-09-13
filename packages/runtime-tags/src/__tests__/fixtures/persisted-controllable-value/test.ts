import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "typing";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

// An UNCONTROLLED input with a server-driven value: patches update the
// default through the interaction-preserving helper, so live typing
// survives while form-reset state tracks the server.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", value: "first" },
    type,
    { title: "Store!", value: "second" },
  ],
};
