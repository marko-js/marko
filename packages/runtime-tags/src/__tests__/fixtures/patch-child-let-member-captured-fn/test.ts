import type { TestConfig } from "../../main.test";

const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

// A function a child receives reads a member of a page's `<let>`: a flush
// keeps the page as a fresh render has it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true, label: "a" }, set, { show: true, label: "b" }],
};
