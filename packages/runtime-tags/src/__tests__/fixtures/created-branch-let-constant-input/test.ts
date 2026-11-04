import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// patch-created-branch-let-constant-input without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
