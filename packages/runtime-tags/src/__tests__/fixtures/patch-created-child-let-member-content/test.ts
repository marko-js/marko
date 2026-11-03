import type { TestConfig } from "../../main.test";

// A created child's `<let>` keeps content inside an object and passes it on: the
// grandchild builds it from its shell, then clears it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    (d: Document) => d.querySelectorAll("button")[1].click(),
    { show: true, label: "d" },
  ],
};
