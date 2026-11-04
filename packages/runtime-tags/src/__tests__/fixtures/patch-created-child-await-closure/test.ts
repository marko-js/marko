import type { TestConfig } from "../../main.test";

// A created child's `<await>` body reads the child's `<let>` and seeds its own.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, promise: Promise.resolve("a") },
    { show: true, promise: Promise.resolve("b") },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
