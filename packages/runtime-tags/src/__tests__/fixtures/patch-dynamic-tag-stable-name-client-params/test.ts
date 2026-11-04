import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A <define> through a const renders its params in client code: the patch hands
// it new ones, which a click then renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    click,
    { show: false, label: "c" },
    click,
  ],
};
