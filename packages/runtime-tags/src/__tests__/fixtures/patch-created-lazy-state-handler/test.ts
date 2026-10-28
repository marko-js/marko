import type { TestConfig } from "../../main.test";

// A lazy tag only a patch creates still loads where it is handed a handler
// that writes state, though the tag only invokes it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
