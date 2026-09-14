import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An effect reading a server value and state: the patch fills the value and re-runs the effect.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one", on: true },
    { label: "two", on: true },
    click,
    { label: "three", on: false },
    click,
    { label: "four", on: true },
  ],
};
