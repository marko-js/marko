import type { TestConfig } from "../../main.test";

// A `<let>` whose init captures itself: its first value's sources end at the cycle.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
