import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    { label: "c", show: false },
    click,
    { label: "d", show: true },
    click,
    { label: "e", show: false },
    { label: "f", show: true },
  ],
};
