import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A patch re-run resets the effect's `$signal`.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "one" }, { label: "two" }, { label: "three" }, click],
};
