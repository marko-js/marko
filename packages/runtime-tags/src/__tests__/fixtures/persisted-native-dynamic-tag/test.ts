import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A native dynamic tag name the server picks, with server attrs and state in its body.
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
