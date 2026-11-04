import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// A `<let>` in a branch a patch creates in a child, whose initial value is input
// its caller passes constant (content): the created branch takes it as a seed.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
