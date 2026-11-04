import type { TestConfig } from "../../main.test";

// The same chain on a page whose own module loads: an unbundled (debug) page
// registers the content too, yet the patch builds it from its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    (d: Document) => d.querySelectorAll("button")[2].click(),
    { show: true, label: "d" },
  ],
};
