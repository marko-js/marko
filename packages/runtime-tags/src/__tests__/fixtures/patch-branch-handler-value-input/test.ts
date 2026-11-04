import type { TestConfig } from "../../main.test";

const go = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.go")!.click();
};

// A handler whose value reads a server input as it attaches, inside a stateful
// branch: a patch re-attaches it, so a click writes the new mode's letter.
export const config: TestConfig = {
  patches: true,
  steps: [{ mode: "a" }, go, { mode: "b" }, go],
};
