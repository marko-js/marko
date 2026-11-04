import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-child-renders-fn-reading-client-state with the function stored for a
// script alone: after a click, a patch keeps the function client code made.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", x: 0 },
    click,
    { label: "a", x: 1 },
    { label: "b", x: 1 },
  ],
};
