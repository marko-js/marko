import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A patch creates a `<try>` body rendering content the server swaps.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, alt: false, label: "a" },
    { show: true, alt: true, label: "b" },
    { show: true, alt: false, label: "c" },
    click,
    { show: false, alt: true, label: "d" },
    { show: true, alt: true, label: "e" },
    click,
    { show: true, alt: false, label: "f" },
  ],
};
