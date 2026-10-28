import type { TestConfig } from "../../main.test";

const toggle = (d: Document) =>
  d.querySelector<HTMLButtonElement>("#toggle")!.click();

// Content a module registers keeps its registration on a page that binds
// other content by its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", on: false, note: "a" },
    { show: true, label: "b", on: true, note: "b" },
    toggle,
    toggle,
    { show: true, label: "c", on: true, note: "c" },
  ],
};
