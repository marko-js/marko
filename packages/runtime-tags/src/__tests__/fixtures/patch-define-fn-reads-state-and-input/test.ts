import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call passes a function reading client state and server input beside server input:
// the client makes the function anew, and a patch fills the input it intersects.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "x", label: "a" },
    click,
    { x: "y", label: "b" },
    click,
    { x: "z", label: "c" },
  ],
};
