import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// Content a known child renders under a page input holds its own state: a
// patch creates it from its shell, and its handler still runs.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, id: "a" },
    { show: true, id: "b" },
    click,
    { show: true, id: "c" },
    click,
    { show: false, id: "d" },
    { show: true, id: "e" },
    click,
  ],
};
