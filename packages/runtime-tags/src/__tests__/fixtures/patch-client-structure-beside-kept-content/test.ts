import type { TestConfig } from "../../main.test";

const toggle = (d: Document) =>
  d.querySelectorAll<HTMLButtonElement>("button")[1].click();

// The client's `<if>` and rows beside kept content: a patch renders them for kept
// content only, so the tags inside write and ship nothing (their closures render).
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
