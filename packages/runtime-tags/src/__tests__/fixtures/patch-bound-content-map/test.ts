import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    (d: Document) => d.querySelector<HTMLButtonElement>("button")!.click(),
    { show: true, label: "c" },
  ],
};
