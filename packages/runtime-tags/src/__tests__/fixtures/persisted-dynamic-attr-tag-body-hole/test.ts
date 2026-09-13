import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An attr tag with body content holding a server hole on an unpaired site.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one", on: true, items: ["a", "b"] },
    { label: "two", on: true, items: ["a", "b", "c"] },
    click,
    { label: "three", on: false, items: ["b"] },
    click,
    { label: "four", on: true, items: ["a"] },
  ],
};
