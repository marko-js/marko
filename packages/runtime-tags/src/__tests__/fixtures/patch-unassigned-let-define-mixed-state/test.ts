import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector("button")!.click();

// A `<define>` body passed client state with an unassigned `<let>`: the client renders
// the branch it selects.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [{ v: "a" }, click, { v: "b" }],
};
