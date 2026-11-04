import type { TestConfig } from "../../main.test";

// A created child's never-assigned `<let>` renders the content it holds by a
// dynamic tag: the seed runs its signal, so the created child renders it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    { show: false, label: "c" },
    { show: true, label: "d" },
  ],
};
