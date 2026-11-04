import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  equivalent: false,
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
