import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child inside client-owned structure calling imported code is a plain
// client instance: patches skip it and a re-shown branch renders it fresh.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
