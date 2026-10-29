import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
// An unassigned `<let>` and an assigned one select a branch together: the client
// code the assigned one runs keeps the branch's fill.
export const config: TestConfig = {
  patches: true,
  // The `<let>`s keep their client values, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [{ show: true, w: "1" }, click, { show: true, w: "2" }, click],
};
