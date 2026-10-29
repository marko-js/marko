import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

// A server value joined with client state in content a tag renders: a
// patch filling it re-runs the content's effect.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }],
};
