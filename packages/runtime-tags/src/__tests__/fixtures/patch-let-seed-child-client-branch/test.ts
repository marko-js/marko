import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector("button")!.click();

// A child's `<let>`, re-created in the child's own client branch, seeds from the
// input its caller last passed from a flush.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
    click,
    click,
    { v: "c", w: "3" },
  ],
};
