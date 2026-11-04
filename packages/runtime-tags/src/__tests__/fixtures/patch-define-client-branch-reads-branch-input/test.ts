import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A `<define>` branch its call hands the client reads the input that selects
// the branch around it: the walk gates only on what the call passes.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, toggle, toggle, { v: "b" }, toggle, { v: "c" }],
};
