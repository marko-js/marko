import type { TestConfig } from "../../main.test";

const toggle = (d: Document) =>
  d.querySelectorAll<HTMLButtonElement>("button")[1].click();

// patch-client-structure-beside-kept-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", tag: "t1" },
    { label: "b", tag: "t2" },
    toggle,
    { label: "c", tag: "t3" },
    toggle,
    { label: "d", tag: "t4" },
  ],
};
