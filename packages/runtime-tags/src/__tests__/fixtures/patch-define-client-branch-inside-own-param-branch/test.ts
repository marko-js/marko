import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A param read under a `<define>` branch its call hands the client, inside a
// branch on that param, is written for the client to render it again.
export const config: TestConfig = {
  patches: true,
  steps: [{ on: "a" }, toggle, { on: "b" }, toggle],
};
