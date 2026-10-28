import type { TestConfig } from "../../main.test";

const add = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button.add")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, add, { label: "c" }],
};
