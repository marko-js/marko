import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// Content a client-fed condition shows after the page withheld it: a patch
// must still refresh what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "a" }, toggle, { note: "b" }],
};
