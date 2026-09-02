import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Assigning a child's tag variable writes back through its change handler,
// which a patch keeps installed.
export const config: TestConfig = {
  persisted: true,
  steps: [{ start: 1 }, click, { start: 1 }, click],
};
