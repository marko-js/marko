import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The plain twin of patch-content-caller-param-structure-nested: the client
// renders what a caller's state selects.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }, click],
};
