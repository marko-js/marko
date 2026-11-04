import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector("button")!.click();
// patch-child-join-live-fn-lifecycle without patches: the lifecycle runs once
// per change of what the join reads.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "x", b: "p" },
    click,
    { a: "y", b: "p" },
    { a: "y", b: "p" },
    click,
  ],
};
