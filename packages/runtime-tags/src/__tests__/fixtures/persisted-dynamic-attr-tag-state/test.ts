import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// State on an attr tag makes the dynamic tag site one no patch pairs, so
// the server hole in its body must stay current through the resumed page.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one", on: true },
    { label: "two", on: true },
    click,
    { label: "three", on: true },
    click,
    { label: "four", on: true },
  ],
};
