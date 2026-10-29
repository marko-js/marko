import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
// patch-unassigned-let-branch-joins-client-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, w: "1" }, click, { show: true, w: "2" }, click],
};
