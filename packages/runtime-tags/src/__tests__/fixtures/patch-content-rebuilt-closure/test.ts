import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content a child rebuilds on the client (a new attribute tag item) reads a
// closure a patch changed: the rebuilt item must see the patched value.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true }, { show: false }, click, { show: true }, click],
};
