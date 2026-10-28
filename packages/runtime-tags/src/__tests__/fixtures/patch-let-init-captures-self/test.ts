import type { TestConfig } from "../../main.test";

// A `<let>` whose init captures itself: its first value's sources end at the cycle.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
