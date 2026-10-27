import type { TestConfig } from "../../main.test";

// A row's `@catch` a patch created from its shell; another row's client throw
// renders the same `@catch` from its error.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ id: "a" }, { id: "b" }] },
    { items: [{ id: "a", fail: true }, { id: "b" }] },
    (container: Document) =>
      container.querySelector<HTMLButtonElement>("button")!.click(),
  ],
};
