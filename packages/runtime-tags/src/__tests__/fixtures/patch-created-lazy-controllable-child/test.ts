import type { TestConfig } from "../../main.test";

// A lazy route a patch creates binds a child's `<let>` to its own with `:=`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
