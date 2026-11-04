import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "b" }, click],
};
