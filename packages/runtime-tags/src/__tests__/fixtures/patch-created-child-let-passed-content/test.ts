import type { TestConfig } from "../../main.test";

// A created child's `<let>` passes its content to a child that keeps it in its
// own `<let>`: the grandchild renders it, then clears it.
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
