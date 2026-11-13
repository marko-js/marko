import type { TestConfig } from "../../main.test";

const toggle = (d: Document) =>
  d.querySelectorAll<HTMLButtonElement>("button")[1].click();

// The client's `<if>` and rows beside content a `<let>` holds: a patch skips them,
// so the tags inside write and ship nothing (their closures render).
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", tag: "t1" },
    { label: "b", tag: "t2" },
    toggle,
    { label: "c", tag: "t3" },
    toggle,
    { label: "d", tag: "t4" },
  ],
};
