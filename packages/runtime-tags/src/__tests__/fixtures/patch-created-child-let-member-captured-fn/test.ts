import type { TestConfig } from "../../main.test";

const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

// A function a child receives reads a member of a `<let>` a flush created:
// a later flush keeps the page as a fresh render has it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    set,
    { show: true, label: "c" },
  ],
};
