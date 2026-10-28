import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { items: [{ id: "a", fail: true }, { id: "b" }] },
    (container: Document) =>
      container.querySelector<HTMLButtonElement>("button")!.click(),
  ],
};
