import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A page wires a child's tag variable in stateful structure as the plain build
// does; only a patch render skips the wiring where the client owns nothing.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, {}, click],
};
