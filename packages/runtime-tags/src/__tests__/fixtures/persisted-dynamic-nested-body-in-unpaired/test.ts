import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A dynamic tag nested in the body of an unpaired site: its attrs and body holes refresh through fills.
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
