import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call mixed into a client-owned selector re-evaluates client-side on
// every fill or state change, like any client-rendered expression.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 0 }, click, { min: 2 }, click, click],
};
