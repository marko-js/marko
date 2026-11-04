import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child template passes a constant to a `<define>` body another consumer
// renders stateful: its setup passes it.
export const config: TestConfig = {
  steps: [{ label: "a" }, click],
};
