import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }, click],
};
