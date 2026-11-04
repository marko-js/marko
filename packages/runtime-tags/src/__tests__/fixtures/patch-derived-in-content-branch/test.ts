import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A stateful branch reads a value derived in content no patch writes: after
// a patch the client recomputes it from the value it derives from, which fills.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }],
};
