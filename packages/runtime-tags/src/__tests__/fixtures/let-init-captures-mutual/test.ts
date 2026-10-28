import type { TestConfig } from "../../main.test";

// Two `<let>`s whose inits capture each other: the sources walk ends on the cycle.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
