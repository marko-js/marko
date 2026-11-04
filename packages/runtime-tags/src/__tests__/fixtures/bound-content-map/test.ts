import type { TestConfig } from "../../main.test";
// patch-bound-content-map without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    (d: Document) => d.querySelector<HTMLButtonElement>("button")!.click(),
    { show: true, label: "c" },
  ],
};
