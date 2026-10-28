import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".b")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, a: "x" },
    { show: true, a: "x" },
    click,
    { show: true, a: "y" },
  ],
};
