import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content a `<let>` names that client code may set: until it does, the content
// takes each patch's input; once it does, its own value renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
    click,
    { more: true, label: "d" },
  ],
};
