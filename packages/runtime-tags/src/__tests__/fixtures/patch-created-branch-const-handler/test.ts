import type { TestConfig } from "../../main.test";

// A source-less `<const>` a handler reads arrives in a created branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
