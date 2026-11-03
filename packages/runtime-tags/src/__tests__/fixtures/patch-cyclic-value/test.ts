import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A value that references itself: the flush's tree applies before the
// assignment that closes the cycle.
export const config: TestConfig = {
  patches: true,
  steps: [{ name: "a" }, { name: "b" }, click],
};
