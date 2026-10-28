import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `<let>` seeded from a param keeps its live value when a patch updates the
// param: the patch applies as a render does, never as an assignment.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ a: "a0" }, { a: "a1" }, click, { a: "a2" }],
};
