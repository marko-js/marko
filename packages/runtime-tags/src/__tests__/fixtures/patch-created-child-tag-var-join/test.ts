import type { TestConfig } from "../../main.test";

// A created child binds with `:=` to state another child returns and sets
// once mounted.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
