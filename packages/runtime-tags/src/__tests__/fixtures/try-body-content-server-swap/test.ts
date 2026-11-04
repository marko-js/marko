import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { alt: false, label: "a" },
    { alt: true, label: "b" },
    click,
    { alt: false, label: "c" },
    click,
    { alt: true, label: "d" },
  ],
};
