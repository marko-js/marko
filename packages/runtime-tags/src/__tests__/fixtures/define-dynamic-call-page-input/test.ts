import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    click,
    { label: "c", show: false },
    click,
    { label: "d", show: true },
  ],
};
