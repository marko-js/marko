import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// <for in> over a mixed object and <for until> with a server bound under patches.
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
