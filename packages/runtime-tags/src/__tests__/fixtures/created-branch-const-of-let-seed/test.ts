import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, x: 1, y: 2 },
    { show: true, x: 3, y: 4 },
    click,
    { show: true, x: 5, y: 6 },
  ],
};
