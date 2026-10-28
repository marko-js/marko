import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// Content the document renders first binds by its shell once a patch creates
// the child it passes it to.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
