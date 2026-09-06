import type { TestConfig } from "../../main.test";

const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A locally written `by` keyer inside a client-owned loop reading a server
// value: the read delivers as a fill, so client re-lists key correctly.
export const config: TestConfig = {
  persisted: true,
  steps: [{ keyField: "id" }, add],
};
